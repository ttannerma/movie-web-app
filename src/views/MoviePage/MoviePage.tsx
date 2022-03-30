import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";
import MovieAccordion from "./MovieAccordion";
import { useGetAllMoviesQuery } from "services/api";

const classes = {
  wrapper: {
    maxHeight: 600,
    width: "80%",
    mx: "auto",
    mt: 5,
    overflowY: "scroll",
    p: 1,
  },
  spinnerContainer: {
    mt: "25%",
    display: "flex",
    justifyContent: "center",
  },
} as const;

const MoviePage: React.FC = () => {
  // Fetch all movies with getAllMovies RTK query hook
  const { data, isLoading } = useGetAllMoviesQuery({});
  const { wrapper, spinnerContainer } = classes;

  return isLoading ? (
    <Box sx={spinnerContainer}>
      <CircularProgress />
    </Box>
  ) : (
    <Box sx={wrapper}>
      {data && data.length > 0 ? (
        data.map((movie, i) => (
          <MovieAccordion key={`movie_${i}`} movie={movie} index={i} />
        ))
      ) : (
        <Typography variant="h5">No movies found</Typography>
      )}
    </Box>
  );
};

export default MoviePage;
