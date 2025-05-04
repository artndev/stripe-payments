import React from 'react'
import '../styles/css/app.css'
import { useReduxDispatch, useReduxSelector } from '../hooks'
import { addProduct, removeProduct } from '../pizzaSlices/Products'

const App = () => {
  const store = useReduxSelector(state => state.products)
  const dispatch = useReduxDispatch()

  return (
    <>
      <button
        type="button"
        onClick={() =>
          dispatch(
            addProduct({
              brand: 'Nike',
              title: 'Air Max 90',
              cost: '150$',
              sizes: ['40', '41', '42'],
            })
          )
        }
      >
        Add Product
      </button>
      <button type="button" onClick={() => dispatch(removeProduct())}>
        Remove Product
      </button>
      {store.map((val, i) => {
        return (
          <div key={i}>
            <h3>{val.title}</h3>
            <ul>
              <li>{val.brand}</li>
              <li>{val.cost}</li>
              <li>
                {val.sizes.map((size, i) => {
                  return <span key={i}>{size}</span>
                })}
              </li>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default App
