import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '98f1463c4bmsh05b403b73436978p12d58djsnb87f281a4b91',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
    
const createRequest = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath:  'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
       getCryptos: builder.query({
            query: (count) => createRequest(`/stats?limit=${count}`),
       })
    })
});

export const {
    useGetCryptosQuery,
} = cryptoApi;