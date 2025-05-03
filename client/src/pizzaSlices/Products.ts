import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [
    {
      brand: 'Nike',
      title: 'Air Max 90',
      cost: '150$',
      sizes: ['40', '41', '42'],
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
  },
})

export const { addProduct } = productSlice.actions

export default productSlice.reducer
