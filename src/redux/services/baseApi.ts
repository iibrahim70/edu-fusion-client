import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://edu-fusiion.vercel.app/api/v1/",
  }),
  endpoints: () => ({}),
});

export default baseApi;
