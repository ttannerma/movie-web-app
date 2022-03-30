import { Box } from "@mui/material";
import React from "react";
import MoviePage from "views/MoviePage/MoviePage";
import Header from "./Header";

const classes = {
  wrapper: {
    height: "100%",
    width: "100%",
  },
};

const Layout: React.FC = () => {
  const { wrapper } = classes;

  return (
    <Box sx={wrapper}>
      <Header />
      <MoviePage />
    </Box>
  );
};

export default Layout;
