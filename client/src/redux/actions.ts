import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBasketProducts = createAsyncThunk(
  'basket/fetchBasketProducts',
  async () => {
    const response = await axios.get('http://localhost:3002/basket', {
      withCredentials: true,
    });
    return response.data;
  }
);

export const removeFromBasket = createAsyncThunk(
  'basket/removeFromBasket',
  async (productId) => {
    await axios.delete(`http://localhost:3002/basket/${productId}`, {
      withCredentials: true,
    });
    return productId;
  }
);

export const incrementItemInBasket = createAsyncThunk(
  'basket/incrementItemInBasket',
  async (productId) => {
    const response = await axios.put(
      `http://localhost:3002/basket/increment/${productId}`,
      null,
      {
        withCredentials: true,
      }
    );
    return productId;
  }
);

export const decrementItemInBasket = createAsyncThunk(
  'basket/decrementItemInBasket',
  async (productId) => {
    const response = await axios.put(
      `http://localhost:3002/basket/decrement/${productId}`,
      null,
      {
        withCredentials: true,
      }
    );
    return productId;
  }
);

export const fetchFavouriteProducts = createAsyncThunk(
  'basket/fetchFavouriteProducts',
  async () => {
    const response = await axios.get('http://localhost:3002/favourite', {
      withCredentials: true,
    });
    console.log(response.data);

    return response.data;
  }
);
