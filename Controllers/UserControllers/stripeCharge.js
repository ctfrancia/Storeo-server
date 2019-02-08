import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const stripe = Stripe(process.env.SK_STRIPE);

const stripeCharge = async (req, res) => {
  try {
    console.log('body is ', req.body, 'and type is ', typeof req.body);
    const { amount, token } = req.body;

    const charge = await stripe.charges.create({
      amount: parseInt(amount, 10) * 100,
      currency: 'eur',
      source: token,
    });

    console.log('chage is ', charge);

    res
      .status(200)
      .send('Payment successful.');
  } catch (e) {
    //  eslint-disable-next-line
    console.error('Error in stripeCharge Controller =>', e);
    res
      .status(401)
      .send('Impossible to process the payment.');
  }
};

export default stripeCharge;
