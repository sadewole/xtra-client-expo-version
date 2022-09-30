import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
// eslint-disable-next-line import/no-unresolved
import { REACT_APP_RAPID_API_KEY } from '@env';

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
  prepareHeaders: (headers) => {
    headers.set('X-RapidAPI-Key', REACT_APP_RAPID_API_KEY);
    headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
    return headers;
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const api = createApi({
  reducerPath: 'shazamApi',
  baseQuery: baseQueryWithRetry,
  endpoints: (build) => ({
    getTopCharts: build.query({ query: () => 'charts/world' }),
  }),
});

export const { useGetTopChartsQuery } = api;
