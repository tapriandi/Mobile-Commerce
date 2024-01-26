import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IProducts } from './types';

const base_url = 'https://dummyjson.com/';

export const dummyApi = createApi({
  reducerPath: 'dummyApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: builder => ({
    // starShips
    getAllProductApi: builder.query<IProducts, any>({
      query: params => ({
        url: '/products',
        method: 'GET',
        params: params,
      }),
    }),
    getProductApi: builder.query<IProduct, string>({
      query: id => ({
        url: `/products/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllProductApiQuery, useGetProductApiQuery } = dummyApi;
