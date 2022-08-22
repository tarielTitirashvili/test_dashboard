import { Box, TextField, Typography } from "@mui/material";
import React from "react";

export default function Input(props) {
  const {
    label,
    name,
    value,
    onChange,
    fullWidth,
    margin,
    type = "text",
  } = props;
  return (
    <Box
      sx={{
        margin: margin ? margin : "0",
      }}
    >
      <Typography>{label}</Typography>
      <TextField
        sx={{
          width: fullWidth ? "100%" : "230px",
        }}
        autoComplete="off"
        size="small"
        variant="outlined"
        placeholder={label}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}
