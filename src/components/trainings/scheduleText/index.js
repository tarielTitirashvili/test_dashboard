import { Box, Typography } from "@mui/material";
import React from "react";

const flexBoxStyle = {
  display: "flex",
  alignItems: "center",
};

export default function ScheduleText(props) {
  const { title, value } = props;

  return (
    <Box sx={flexBoxStyle}>
      <Typography fontWeight={"bold"} variant="p">
        {title}:
      </Typography>
      <Typography m={1} variant="p">
        {value}
      </Typography>
    </Box>
  );
}
