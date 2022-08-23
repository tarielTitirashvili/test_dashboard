import { Box, Typography } from "@mui/material";
import React from "react";

export default function TitleWithText(props) {
  const { title, text } = props;
  return (
    <Box display={"flex"} alignItems={"center"}>
      <Typography
        variant="h6"
        sx={{ fontSize: "1rem", fontWeight: "bold" }}
      >
        {title}:
      </Typography>
      <Typography ml={1} variant="p">
        {text}
      </Typography>
    </Box>
  );
}
