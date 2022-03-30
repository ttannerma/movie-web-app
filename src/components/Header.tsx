import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import NewMovieDialog from "./NewMovieDialog";

const classes = {
  wrapper: {
    mt: 2,
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    height: "100%",
    mx: "auto",
  },
};

const Header: React.FC = () => {
  const [isNewMovieModalOpen, setIsNewMovieModalOpen] = useState(false);
  const { wrapper } = classes;

  const handleModalClose = () => {
    setIsNewMovieModalOpen(false);
  };

  return (
    <Box sx={wrapper}>
      <Typography variant="h6">Movie App</Typography>
      <Button variant="contained" onClick={() => setIsNewMovieModalOpen(true)}>
        Add movie
      </Button>
      <NewMovieDialog
        handleClose={handleModalClose}
        open={isNewMovieModalOpen}
        onBackdropClick={() => handleModalClose()}
      />
    </Box>
  );
};

export default Header;
