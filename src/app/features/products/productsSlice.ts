import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICart } from "./../../../interfaces/index";
import axionsInstance from "../../../config/axios.config";
import { RootState } from "../../store";

export interface ProductState {
  loading: boolean;
  data: ICart[];
  error: "" | null;
}

const initialState: ProductState = {
  loading: true,
  data: [],
  error: null,
};

export const getProductList = createAsyncThunk("products/getProductList", async (_, thunkAPI) => {
  const { rejectWithValue } = thunkAPI;

  try {
    const { data } = await axionsInstance.get("products");
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductList.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getProductList.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.payload;
    });
    // [`${getProductList.pending}`]: (state) => {
    //     state.loading = true
    // },
    // [`${getProductList.fulfilled}`]: (state, action) => {
    //     state.loading = false;
    //     state.productsList = action.paylodad
    // },
    // [`${getProductList.rejected}`]: (state, action) => {
    //     state.loading = false;
    //     state.productsList = [];
    //     state.error = action.payload
    // },
  },
});

export const productsSelector = ({ products }: RootState) => products;

export default productsSlice.reducer;
