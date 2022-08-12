import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        p: 0,
        m: 0,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
