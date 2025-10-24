// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import cartReducer from "../features/cart/cartSlice"; // 1. Import cartReducer

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer, // 2. Thêm cartReducer vào store
  },
});
