import type { Request, Response } from 'express'
import { stripe } from '../index.js'
import config from '../config.json' with { type: 'json' }

export async function createCheckoutSession(req: Request, res: Response) {
  try {
    const { products } = req.body

    const lineItems = products.map((product: IProduct) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: product.name,
        },
        unit_amount: Math.round(product.price * 100),
      },
      quantity: 1,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${config.FRONTEND_URL}/success`,
      cancel_url: `${config.FRONTEND_URL}/cancel`,
    })

    res.status(200).json({
      message: 'You have successfully handled the transaction',
      answer: {
        id: session.id,
      },
    })
  } catch (err) {
    console.error(err)

    res.status(500).json({
      message: 'Server is not responding',
      answer: false,
    })
  }
}
