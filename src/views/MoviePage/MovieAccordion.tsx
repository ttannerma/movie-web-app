import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const classes = {
  accordion: {
    "&:hover": {
      color: "gray",
    },
  },
  text: {
    color: "common.black",
  },
};

interface Props {
  movie: State.Movie;
}

const MovieAccordion: React.FC<Props> = (props: Props) => {
  const { movie } = props;
  const { name, year, synopsis } = movie;

  const { accordion, text } = classes;

  return (
    <Accordion sx={accordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>
          {name} | {year}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Typography sx={text} variant="subtitle1">
            {synopsis}
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default MovieAccordion;
