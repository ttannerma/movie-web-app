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
  grayAccordionSummary: {
    "&.MuiAccordion-root": {
      backgroundColor: "gray",
    },
  },
  text: {
    color: "common.black",
  },
} as const;

interface Props {
  movie: State.Movie;
  index: number;
}

const MovieAccordion: React.FC<Props> = (props: Props) => {
  const { movie, index } = props;
  const { name, year, synopsis } = movie;

  const { accordion, grayAccordionSummary, text } = classes;

  const useGrayColor = index % 2 === 0;

  return (
    <Accordion sx={accordion}>
      <AccordionSummary
        sx={useGrayColor ? grayAccordionSummary : {}}
        expandIcon={<ExpandMoreIcon />}
      >
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
