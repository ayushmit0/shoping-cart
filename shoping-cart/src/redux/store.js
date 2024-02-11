import {configureStore} from '@reduxjs/toolkit'
// import React from 'react'
import { CartSlice } from './CartSlice'
// import CartReducer from './CartSlice.js'
export const store= configureStore({
    reducer:{
        cart: CartSlice.reducer
    }
})


