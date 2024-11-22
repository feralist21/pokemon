import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/', timeout: 3000 }),
    endpoints: () => ({}),
});

export default api;
