// src/features/cart/cartSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3001/cart"; // API endpoint cho giỏ hàng

// --- THUNKS ---

// 1. Fetch Cart Items
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async () => {
    const response = await axios.get(API_URL);
    return response.data;
  }
);

// 2. Add Item to Cart (Ví dụ, bạn có thể gọi từ ProductDetailPage)
export const addItemToCart = createAsyncThunk(
  "cart/addItemToCart",
  async (item) => {
    // Kiểm tra xem item đã có trong giỏ hàng chưa
    const currentCartResponse = await axios.get(
      `${API_URL}?productId=${item.productId}`
    );
    if (currentCartResponse.data.length > 0) {
      // Nếu có, cập nhật số lượng
      const existingItem = currentCartResponse.data[0];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + item.quantity,
      };
      const response = await axios.put(
        `${API_URL}/${existingItem.id}`,
        updatedItem
      );
      return { item: response.data, type: "update" }; // Đánh dấu là update
    } else {
      // Nếu chưa, thêm mới
      const response = await axios.post(API_URL, item);
      return { item: response.data, type: "add" }; // Đánh dấu là add
    }
  }
);

// 3. Update Item Quantity
export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async ({ id, quantity }) => {
    // Đảm bảo số lượng không âm
    const newQuantity = Math.max(0, quantity);
    if (newQuantity === 0) {
      // Nếu số lượng về 0, xóa item
      await axios.delete(`${API_URL}/${id}`);
      return { id, quantity: 0 }; // Trả về id và số lượng 0 để reducer biết xóa
    } else {
      // Ngược lại, cập nhật số lượng
      const response = await axios.patch(`${API_URL}/${id}`, {
        quantity: newQuantity,
      });
      return response.data; // Trả về item đã cập nhật
    }
  }
);

// 4. Remove Item from Cart
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    return id; // Trả về id để reducer xóa
  }
);

// --- SLICE ---

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Cart Items
      .addCase(fetchCartItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })

      // Add Item To Cart
      .addCase(addItemToCart.fulfilled, (state, action) => {
        const { item, type } = action.payload;
        if (type === "add") {
          state.items.push(item);
        } else if (type === "update") {
          const index = state.items.findIndex(
            (cartItem) => cartItem.id === item.id
          );
          if (index !== -1) {
            state.items[index] = item;
          }
        }
      })

      // Update Cart Item Quantity or Remove if quantity is 0
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        if (action.payload.quantity === 0) {
          // Xóa item nếu số lượng là 0
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          // Cập nhật số lượng
          const index = state.items.findIndex(
            (item) => item.id === action.payload.id
          );
          if (index !== -1) {
            state.items[index] = action.payload;
          }
        }
      })

      // Remove Cart Item
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default cartSlice.reducer;
