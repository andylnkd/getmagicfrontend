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
    const buf = await buffer(req)
    const sig = req.headers[stripe-signature]
    const webhooksecret = process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SIGNING_SECRET
  let event;
  try{
 if (!sig || !webhooksecret) return;
 event = stripe.webhooks.constructEvent(buf, sig, webhooksecret)
  }catch(err){console.log(`Webhook error: ${err.message}`);
  return res.status(400).send(`Webhook error: ${err.message}`)}
  
  console.log('event: ',event)
  res.status(200).send();
  }
  
}
