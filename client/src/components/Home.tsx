import React, { useEffect } from 'react'
import '../styles/css/home.css'
import { useReduxDispatch, useReduxSelector } from '../hooks'
import { addProduct, removeProduct } from '../pizzaSlices/Products'
import { loadStripe } from '@stripe/stripe-js'
import process from 'process'
import axios from '../axios'

const Home = () => {
  const cart = useReduxSelector(state => state.products)
  const dispatch = useReduxDispatch()

  const makePayment = async () => {
    const stripe = await loadStripe(
      process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY,
      {
        stripeAccount: process.env.REACT_APP_STRIPE_ACCOUNT_ID,
      }
    )

    if (!stripe) {
      console.log('Stripe is not loaded')
      return
    }

    const res = await axios.post('/create-checkout-session', {
      products: cart,
    })

    const answer = await stripe!.redirectToCheckout({
      sessionId: res.data.answer.id,
    })

    if (answer!.error) {
      console.log(answer!.error)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() =>
          dispatch(
            addProduct({
              name: 'Nike Air Max 90',
              price: 150,
              sizes: [40, 41, 42],
            })
          )
        }
      >
        Add Product
      </button>
      <button type="button" onClick={() => dispatch(removeProduct())}>
        Remove Product
      </button>
      <button
        type="button"
        onClick={() => {
          if (cart.length === 0) return

          makePayment()
        }}
      >
        Make Payment
      </button>
      {cart.map((val, i) => {
        return (
          <div key={i}>
            <h3>{val.name}</h3>
            <ul>
              <li>{val.price.toString() + '$'}</li>
              <li>
                {val.sizes.map((size, i) => {
                  return (
                    <>
                      <span key={i}>{size.toString()}</span>
                      <br />
                    </>
                  )
                })}
              </li>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default Home
