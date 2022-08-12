import { TextField } from "@mui/material";
import React from "react";

export default function Input(props) {
  const { label, name, value, onChange, fullWidth } = props;
  return (
    <TextField
      sx={{ width: fullWidth ? "100%" : "230px" }}
      autoComplete="off"
      size="small"
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}
