import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const stripe = Stripe(process.env.SK_STRIPE);

const stripeCharge = async (req, res) => {
  const token = req.body;
  // eslint-disable-next-line
  console.log('token is ', token);

  const charge = await stripe.charges.create({
    amount: 999,
    currency: 'usd',
    description: 'Example charge',
    source: 'tok_visa',
  });

  res
    .status(200)
    .send(charge);
};

export default stripeCharge;
