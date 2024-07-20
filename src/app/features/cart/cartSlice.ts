import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICart } from './../../../interfaces/index';

export interface CartState {
  cartItems: ICart[]
}

const initialState: CartState = {
    cartItems :[]
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
      addProductToCard: (state, actoinPayload: PayloadAction<ICart>)=>{
        state.cartItems = [...state.cartItems ,actoinPayload.payload]
      }
    }

})

export const { addProductToCard } = cartSlice.actions

export default cartSlice.reducer