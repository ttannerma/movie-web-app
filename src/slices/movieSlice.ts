import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MovieState {
  movies: any[];
}

const initialState: MovieState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<any>) => {
      state.movies = action.payload;
    },
    getMovies: (state) => {},
    deleteMovie: (state, action: PayloadAction<number>) => {},
  },
});

export const movieReducer = movieSlice.reducer;
export default movieSlice.reducer;
