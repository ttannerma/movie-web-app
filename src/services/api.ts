import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serverUrl = process.env.REACT_APP_SERVER_URL;
const serverPort = process.env.REACT_APP_SERVER_PORT;

const movieApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: `http://${serverUrl}:${serverPort}` }),
  endpoints: (builder) => ({
    /** GET all movies */
    getAllMovies: builder.query<State.Movie[], {}>({
      query: () => "/movies",
    }),

    /** POST single movie */
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

// Export auto-generated hooks
export const { useGetAllMoviesQuery, useAddMovieMutation } = movieApi;
