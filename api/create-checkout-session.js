const Stripe = require('stripe');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    return res.end('Method Not Allowed');
  }

  try {
    const { plan, email, origin } = req.body || {};
    const priceMonthly = process.env.STRIPE_PRICE_MONTHLY;
    const priceYearly  = process.env.STRIPE_PRICE_YEARLY;

    const priceId =
      plan === 'yearly' ? priceYearly :
      plan === 'monthly' ? priceMonthly :
      null;

    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({ error: 'Missing STRIPE_SECRET_KEY' });
    }
    if (!priceId) {
      return res.status(400).json({ error: 'Invalid plan or missing price env vars' });
    }
    if (!email || typeof email !== 'string') {
      return res.status(400).json({ error: 'Missing email' });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-06-20' });

        const proto = (req.headers['x-forwarded-proto'] || 'https').toString().split(',')[0].trim();
    const host = (req.headers['x-forwarded-host'] || req.headers.host || '').toString().split(',')[0].trim();
    const derived = host ? `${proto}://${host}` : null;
    const baseUrl = (origin && typeof origin === 'string') ? origin : (process.env.APP_ORIGIN || derived || 'https://top-daily-value-bets.vercel.app');

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      customer_email: email,
      allow_promotion_codes: true,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${baseUrl}/?vip=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/?vip=cancelled`,
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || 'Stripe error' });
  }
};
