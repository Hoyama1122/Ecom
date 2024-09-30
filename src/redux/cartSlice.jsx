import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);
      if (itemIndex) {
        itemIndex.quantity += 1;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemIndex = state.products.find((item) => item.id === id);
      if (itemIndex !== -1) {
        state.totalPrice -= itemIndex.totalPrice;
        state.totalQuantity -= itemIndex.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const itemIndex = state.products.find((item) => item.id === id);
      if (itemIndex) {
        itemIndex.quantity += 1;
        itemIndex.totalPrice += itemIndex.price;
        state.totalPrice += itemIndex.price;
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const itemIndex = state.products.find((item) => item.id === id);
      if (itemIndex) {
        itemIndex.quantity -= 1;
        itemIndex.totalPrice -= itemIndex.price;
        state.totalPrice -= itemIndex.price;
      }
    },
  },
});
console.log(cartSlice);
export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
