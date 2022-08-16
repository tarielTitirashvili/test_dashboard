import { Box, TextareaAutosize, Typography } from "@mui/material";
import React from "react";

export default function TextArea(props) {
  const { name, label, value, onChange, width, height } = props;
  return (
    <Box>
      <Typography>{label}</Typography>
      <TextareaAutosize
        aria-label="minimum height"
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        minRows={3}
        style={{
          width: width ? width : "300px",
          height: height ? height : "150px",
        }}
      />
    </Box>
  );
}
