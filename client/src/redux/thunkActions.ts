import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// TODO Mycode createAsincThunk
export const fetchAllProducts = createAsyncThunk("products/all", async () => {
  const response = await axios.get("http://localhost:3002/products");
  return response.data;
});