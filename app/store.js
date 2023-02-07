import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import productReducer from '../slices/productSlice'
import CheckOutReducer from '../slices/CheckOutSlice'
import CartReducer from '../slices/CartSlice'


export const store = configureStore({
  reducer: {

    counter: counterReducer,
    product: productReducer,
    checkout: CheckOutReducer,
    cart: CartReducer
  },
})