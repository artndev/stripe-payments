import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      name: 'Nike Air Max 90',
      price: 150,
      sizes: [40, 41, 42],
    },
  ],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload]
    },
    removeProduct: state => {
      state.products.pop()
    },
  },
})

export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer
