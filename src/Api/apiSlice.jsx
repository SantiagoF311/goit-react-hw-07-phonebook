 import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://651310488e505cebc2e98726.mockapi.io/contacts',
    }),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => '/users',
            providesTags: ['users'],
        }),

        createContact: builder.mutation({
            query: (newContact) => ({
                url: '/users',
                method: 'POST',
                body: newContact, 
            }),
            invalidatesTags: ['users'],
        }),

        deleteContact: builder.mutation({
            query: (id) => ({
                url: `/users/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['users'],
        })
    })
})

export const { useGetContactsQuery, useCreateContactMutation, useDeleteContactMutation } = apiSlice;  