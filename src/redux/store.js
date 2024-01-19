import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slice";

const cartStore = configureStore({ reducer: { cart: cartSlice.reducer } });

export default cartStore;
