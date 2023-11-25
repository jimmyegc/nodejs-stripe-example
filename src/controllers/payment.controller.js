import Stripe from 'stripe'
import { STRIPE_PRIVATE_KEY } from '../config.js'
const stripe = new Stripe(STRIPE_PRIVATE_KEY)

export const createSession = async (req, res) => {  
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          product_data: {
            name: 'Telefono',
            description: 'iPhone X'
          },
          currency: 'usd',
          unit_amount: 20000, // 2000.00
        },
        quantity: 1,
      },
      {
        price_data: {
          product_data: {
            name: 'Case para Telefono',
            description: 'Funda para iPhone X'
          },
          currency: 'usd',
          unit_amount: 10000, // 100.00
        },
        quantity: 1,
      }     
    ],
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel'
  })  
  return res.json(session)
}