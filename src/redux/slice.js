import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartState: JSON.parse(localStorage.getItem("cart")) ?? [],
};

const cartSlice = createSlice({
  name: "cartState",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      //   state.cartState.push(action.payload);
      state.cartState.push(action.payload);
    },
    deleteCartItem(state, action) {
      state.cartState.splice(action.payload, 1);
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;
