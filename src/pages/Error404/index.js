import React from "react";
import { IconButton, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { NavLink } from "react-router-dom";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { useNavigate } from "react-router-dom";
import { t } from "i18next";

const Error404Container = styled("div")({
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  height: "calc(100vh - 112px)",
});

export default function Error404() {

  const navigate = useNavigate();
  return (
    <Error404Container>
      <Box>
        <Typography variant="h2"  gutterBottom align="center">
          404
        </Typography>
        <Typography variant="h5"  gutterBottom>
          {t("couldNotFindPage")}
        </Typography>
        <NavLink to="/">
          <IconButton>
            <PersonPinIcon />
            {t("main")}
          </IconButton>
        </NavLink>
        <IconButton onClick={() => navigate(-1)}>
          <KeyboardBackspaceIcon />
          {t("back")}
        </IconButton>
      </Box>
    </Error404Container>
  );
}
