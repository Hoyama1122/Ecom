import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,    // ใช้ cartSlice โดยตรง
    product: productSlice, // ใช้ productSlice โดยตรง
  },
});

export default store;
