import { Box, TextField } from "@mui/material";
import React from "react";

export default function Input(props) {
  const { label, name, value, onChange, fullWidth } = props;
  return (
    <Box mt={1}>
      <TextField
        autoComplete="off"
        size="small"
        fullWidth={fullWidth ? true : false}
        variant="outlined"
        label={label}
        name={name}
        value={value}
        onChange={onChange}
      />
    </Box>
  );
}
