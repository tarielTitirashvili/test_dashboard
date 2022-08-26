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
        width: `${width ? width : "100%"}`,
        height: `${height ? height : "calc(100vh - 112px)"}`,
        p: 0,
        m: 0,
      }}
    >
      <CircularProgress />
    </Box>
  );
}
