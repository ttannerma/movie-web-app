import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface MovieQueryParams {
  index?: number;
}

const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  endpoints: (builder) => ({
    getAllMovies: builder.query<State.Movie[], MovieQueryParams>({
      query: () => "/movies",
    }),
    addMovie: builder.mutation<any, State.Movie>({
      query: (movie) => {
        return {
          url: "/movie",
          method: "POST",
          body: movie,
        };
      },
    }),
  }),
});

export default movieApi;

// Export automatically generated queries or mutations.
export const { useGetAllMoviesQuery, useAddMovieMutation } = movieApi;
