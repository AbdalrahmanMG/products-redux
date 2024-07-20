import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "./../../../interfaces/index";
import { addItemToShoppingCart } from "../../../utils/functions";
import { RootState } from "../../store";

export interface CartState {
  cartItems: ICart[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCard: (state, actoinPayload: PayloadAction<ICart>) => {
      state.cartItems = addItemToShoppingCart(state.cartItems, actoinPayload.payload);
    },
  },
});

export const { addProductToCard } = cartSlice.actions;
export const cartSelector = ({ cart }: RootState) => cart;

export default cartSlice.reducer;
