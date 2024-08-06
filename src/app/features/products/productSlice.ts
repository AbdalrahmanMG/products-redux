import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApiSlice = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: () => {
        return {
          url: "/products",
        };
      },
    }),
  }),
});

export const { useGetProductListQuery } = productApiSlice;
