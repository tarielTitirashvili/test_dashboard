import { Box, TextField, Typography } from "@mui/material";
import React from "react";

export default function Input(props) {
  const { label, name, value, onChange, fullWidth, margin } = props;
  return (
    <Box>
      <Typography>{label}</Typography>
      <TextField
        sx={{
          width: fullWidth ? "100%" : "230px",
          margin: margin ? margin : "0",
        }}
        autoComplete="off"
        size="small"
        variant="outlined"
        placeholder={label}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}
