const Stripe = require('stripe');

module.exports = async (req, res) => {
  try {
    const email = (req.query?.email || '').toString().trim();

    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({ error: 'Missing STRIPE_SECRET_KEY' });
    }
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Missing email' });
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: '2024-06-20' });

    // Find customer by email (may be multiple)
    const customers = await stripe.customers.list({ email, limit: 10 });

    let active = false;
    let best = null;

    for (const c of customers.data) {
      const subs = await stripe.subscriptions.list({
        customer: c.id,
        status: 'all',
        limit: 20
      });

      const activeSub = subs.data.find(s => ['active','trialing','past_due','unpaid'].includes(s.status));
      if (activeSub) {
        active = ['active','trialing'].includes(activeSub.status);
        best = {
          customer: c.id,
          subscription: activeSub.id,
          status: activeSub.status,
          current_period_end: activeSub.current_period_end
        };
        if (active) break;
      }
    }

    return res.status(200).json({ active, details: best });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message || 'Stripe error' });
  }
};
