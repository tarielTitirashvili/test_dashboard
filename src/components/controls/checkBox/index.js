import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export default function CheckBox(props) {
  const labels = { inputProps: { "aria-label": "Checkbox demo" } };

  const { label, onChange, name, value, margin } = props;

  return (
    <FormControlLabel
      sx={{ margin: margin }}
      control={
        <Checkbox
          {...labels}
          checked={value}
          name={name}
          onChange={onChange}
          color="success"
        />
      }
      label={label}
    />
  );
}
