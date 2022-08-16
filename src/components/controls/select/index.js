import React from "react";
import { Box, MenuItem, OutlinedInput, Typography } from "@mui/material";
import MuiSelect from "@mui/material/Select";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 200,
      width: 230,
    },
  },
};

export default function Select(props) {
  const { name, label, value, onChange, options } = props;
  return (
    <Box>
      <Typography>{label}</Typography>
      <MuiSelect
        input={
          <OutlinedInput
            sx={{ width: "230px" }}
            size="small"
            name={name}
            placeholder={label}
            value={value}
            onChange={onChange}
          />
        }
        MenuProps={MenuProps}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </MuiSelect>
    </Box>
  );
}
