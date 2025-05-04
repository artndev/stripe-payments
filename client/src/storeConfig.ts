import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './pizzaSlices/Products'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedProductsReducer = persistReducer(persistConfig, productsReducer)

export const storeConfig = configureStore({ reducer: persistedProductsReducer })
export const persistor = persistStore(storeConfig)
