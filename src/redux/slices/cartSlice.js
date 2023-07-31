import { createSlice } from "@reduxjs/toolkit";
// import { toast } from 'react-hot-toast'

// TODO - how to access localStorage, how to set localStorage values, give appropriate name to variables
const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  total: localStorage.getItem('total') ? JSON.parse(localStorage.getItem('total')) : 0,
  totalCartItems: localStorage.getItem('totalCartItems') ? JSON.parse(localStorage.getItem('totalCartItems')) : 0,
}

const cartSlice = createSlice({
  name: 'cart slice',
  initialState,
  reducers: {
    // TODO
    addToCart: (state, action) => {

    },
    removeFromCart: (state, action) => {

    },
    resetCart: (state, action) => {

    }
  }
})

export const { addToCart, removeFromCart, resetCart } = cartSlice.actions
export default cartSlice.reducer


