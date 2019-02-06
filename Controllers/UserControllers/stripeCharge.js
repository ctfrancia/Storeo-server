import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const stripe = Stripe(process.env.SK_STRIPE);

const stripeCharge = async (req, res, next) => {
  try {
    // eslint-disable-next-line
    console.log('body is ', req.body, 'and type is ', typeof req.body);
    const { amount, token } = req.body;

    const charge = await stripe.charges.create({
      amount: parseInt(amount, 10),
      currency: 'eur',
      source: token,
    });

    // eslint-disable-next-line
    console.log('charge is ', charge);

    res
      .status(200)
      .send('Payment successful.');
  } catch (err) {
    //  eslint-disable-next-line
    console.error('Error in stripeCharge Controller =>', err);
    err.errorMessage = 'Impossible to process the payment.';
    next(err);
  }
};

export default stripeCharge;
