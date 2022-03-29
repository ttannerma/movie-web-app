import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface MovieQueryParams {
  index?: number;
}

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getAllMovies: builder.query<string, MovieQueryParams>({
      query: () => "/movies",
    }),
  }),
});

// Auto generate hooks based on endpoint name
export const { useGetAllMoviesQuery } = movieApi;
