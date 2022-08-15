import React from "react";
import { MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Select(props) {
  const { name, label, value, onChange, options } = props;
  return (
    <Box>
      <Typography>{label}</Typography>
      <TextField
        sx={{ width: "230px" }}
        size="small"
        select
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
