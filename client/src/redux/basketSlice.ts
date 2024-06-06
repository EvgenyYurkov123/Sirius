import {
  fetchBasketProducts,
  removeFromBasket,
  incrementItemInBasket,
  decrementItemInBasket,
  fetchFavouriteProducts,
} from './actions';
import { createSlice } from '@reduxjs/toolkit';
import { fetchAllProducts } from './thunkActions';
import { SliceStateType } from '../types/types';

const initialState: SliceStateType = {
  products: [],
  loading: false,
  error: '',
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    
      .addCase(fetchBasketProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchFavouriteProducts.fulfilled, (state, action) => {
        console.log('--->', action.payload);
        state.products = action.payload;
        state.loading = false;
        state.error = null;
      })
      
      .addCase(removeFromBasket.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
        state.loading = false;
        state.error = null;
      })
      
      .addCase(incrementItemInBasket.fulfilled, (state, action) => {
        const productId = action.payload;
        const productIndex = state.products.findIndex(
          (product) => product.id === productId
        );

        if (productIndex !== -1) {
          state.products[productIndex].quantity++;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(decrementItemInBasket.fulfilled, (state, action) => {
        const productId = action.payload;
        const productIndex = state.products.findIndex(
          (product) => product.id === productId
        );
        if (productIndex !== -1 && state.products[productIndex].quantity > 1) {
          state.products[productIndex].quantity--;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      });
    
  },
});

export default basketSlice.reducer;

