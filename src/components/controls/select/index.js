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
  const {
    name,
    label,
    value,
    onChange,
    options,
    margin,
    width,
    id,
    disabled = false,
  } = props;
  return (
    <Box>
      <Typography>{label}</Typography>
      <MuiSelect
        sx={{ margin: margin ? margin : "0", width: width ? width : "230px" }}
        input={
          <OutlinedInput
            size="small"
            name={name}
            placeholder={label}
            disabled={disabled}
            value={value}
            onChange={(e) => onChange(e, id)}
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
