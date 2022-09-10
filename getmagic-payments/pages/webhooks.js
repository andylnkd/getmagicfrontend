import Stripe from 'stripe'
import {buffer} from 'micro'

export const config = {
api:{
  bodyParser: false
}
}
export default async function webhookhandler(req, res) {
  const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)
  if (req.method === "POST") {
    console.log(req.body);
  }
}
