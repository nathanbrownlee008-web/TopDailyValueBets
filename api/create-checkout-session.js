const Stripe = require('stripe');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end('Method Not Allowed');
  }

  try {
    const { plan, email } = req.body || {};

    const priceMonthly = process.env.STRIPE_PRICE_MONTHLY;
    const priceYearly = process.env.STRIPE_PRICE_YEARLY;
    const priceMonthlyIntro = process.env.STRIPE_PRICE_MONTHLY_INTRO || null;
    const couponFirstMonth = process.env.STRIPE_COUPON_FIRST_MONTH || null;
    const trialDays = Number(process.env.STRIPE_TRIAL_DAYS || 5);

    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({ error: 'Missing STRIPE_SECRET_KEY' });
    }
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Missing email' });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-06-20' });
    const baseUrl = process.env.APP_ORIGIN || "https://top-daily-value-bets-mu.vercel.app";

    const sessionConfig = {
      mode: 'subscription',
      customer_email: email,
      allow_promotion_codes: true,
      success_url: `${baseUrl}/?vip=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/?vip=cancelled`,
      metadata: { selected_plan: String(plan || '') }
    };

    if (plan === 'trial') {
      if (!priceMonthly) {
        return res.status(400).json({ error: 'Missing STRIPE_PRICE_MONTHLY for trial plan' });
      }
      sessionConfig.line_items = [{ price: priceMonthly, quantity: 1 }];
      sessionConfig.subscription_data = { trial_period_days: trialDays };
    } else if (plan === 'monthly_intro' || plan === 'monthly') {
      if (couponFirstMonth) {
        if (!priceMonthly) {
          return res.status(400).json({ error: 'Missing STRIPE_PRICE_MONTHLY for monthly intro plan' });
        }
        sessionConfig.line_items = [{ price: priceMonthly, quantity: 1 }];
        sessionConfig.discounts = [{ coupon: couponFirstMonth }];
      } else if (priceMonthlyIntro) {
        sessionConfig.line_items = [{ price: priceMonthlyIntro, quantity: 1 }];
      } else if (priceMonthly) {
        sessionConfig.line_items = [{ price: priceMonthly, quantity: 1 }];
      } else {
        return res.status(400).json({ error: 'Missing monthly Stripe price env vars' });
      }
    } else if (plan === 'yearly') {
      if (!priceYearly) {
        return res.status(400).json({ error: 'Missing STRIPE_PRICE_YEARLY' });
      }
      sessionConfig.line_items = [{ price: priceYearly, quantity: 1 }];
    } else {
      return res.status(400).json({ error: 'Invalid plan' });
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);
    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || 'Stripe error' });
  }
};
