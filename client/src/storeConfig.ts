import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './pizzaSlices/Products'

export const storeConfig = configureStore({
  reducer: {
    products: productsReducer,
  },
})
