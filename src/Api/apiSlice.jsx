import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://650f6d6d54d18aabfe9a0ec3.mockapi.io',
    }),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => '/contacts',
        })
    })
})

export const { useGetContactsQuery } = apiSlice;