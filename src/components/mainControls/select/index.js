import { Box, MenuItem, TextField, Typography } from "@mui/material";
import React from "react";

export default function Select(props) {
  const { name, label, value, onChange, options } = props;
  return (
    <TextField
      sx={{ width: "230px" }}
      size='small'
      select
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem key={option.id} value={option.value}>
          {option.value}
        </MenuItem>
      ))}
    </TextField>
  );
}
