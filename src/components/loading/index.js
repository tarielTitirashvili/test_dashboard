import { Box, CircularProgress } from "@mui/material";
import React from "react";

export default function Loading(props) {
  const { width, height } = props;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: `${width ? width : "100vw"}`,
        height: `${height ? height : "100vh"}`,
        p: 0,
        m: 0,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
