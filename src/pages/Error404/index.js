import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { NavLink } from "react-router-dom";

const Error404Container = styled("div")({
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  height: "calc(100vh - 112px)",
});

export default function Error404() {
  return (
    <Error404Container>
      <Box>
        <Typography variant="h1" component="div" gutterBottom align="center">
          404
        </Typography>
        <Typography variant="h3" component="div" gutterBottom>
          გვერდი ვერ მოიძებნა
        </Typography>
        <NavLink to="/">
          <IconButton>
            <KeyboardBackspaceIcon />
            ძირითადი
          </IconButton>
        </NavLink>
      </Box>
    </Error404Container>
  );
}
