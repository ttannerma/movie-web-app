import React, { useState } from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import { Box, Button, TextField } from "@mui/material";
import movieApi, { useAddMovieMutation } from "services/api";

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

const initialMovie: State.Movie = {
  name: "",
  year: 2022,
  genres: [""],
  ageLimit: 0,
  rating: 0,
  actors: [],
  director: {
    firstName: "",
    lastName: "",
  },
  synopsis: "",
};

interface Props extends DialogProps {
  handleClose: () => void;
}

const NewMovieDialog: React.FC<Props> = (props: Props) => {
  const [newMovie, setNewMovie] = useState<State.Movie>(initialMovie);
  const { handleClose } = props;

  const [addMovie] = useAddMovieMutation();
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
    } catch {}
  };

  return (
    <Dialog sx={dialog} {...props}>
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
