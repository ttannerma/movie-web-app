import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import { Box, Button, TextField } from "@mui/material";
import movieApi, { useAddMovieMutation } from "services/api";
import { initialMovie } from "utils/movieUtils";

const classes = {
  dialog: {
    "& .MuiPaper-root": {
      width: 300,
      height: 300,
      gap: 2,
    },
  },
  dialogContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  saveButton: {
    width: "5rem",
    mx: "auto",
  },
};

interface Props extends DialogProps {
  handleClose: () => void;
}

const NewMovieDialog: React.FC<Props> = (props: Props) => {
  const [newMovie, setNewMovie] = useState<State.Movie>(initialMovie);
  const { handleClose, ...rest } = props;

  //  endpoint mutation hook that is used to add new movie
  const [addMovie] = useAddMovieMutation();

  // endpoint query hook that refetches all movies
  const { refetch } = movieApi.endpoints.getAllMovies.useQuerySubscription({});

  const { dialog, dialogContent, saveButton } = classes;

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    setNewMovie({
      ...newMovie,
      name,
    });
  };

  const handleAddMovie = async () => {
    try {
      // Add new movie
      await addMovie(newMovie);

      // Fetch all movies
      refetch();

      // Close modal
      handleClose();

      // Reset modal state
      setNewMovie(initialMovie);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog sx={dialog} {...rest}>
      <DialogTitle>Add new movie</DialogTitle>
      <Box sx={dialogContent}>
        <TextField
          onChange={handleNameChange}
          label="Name of the movie"
          value={newMovie.name}
        />
      </Box>
      <Button sx={saveButton} onClick={handleAddMovie} variant="contained">
        Add
      </Button>
    </Dialog>
  );
};

export default NewMovieDialog;
