import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export default function CheckBox(props) {
  const labels = { inputProps: { "aria-label": "Checkbox demo" } };

  const { label, onChange, value } = props;

  return (
    <FormControlLabel
      control={
        <Checkbox
          {...labels}
          checked={value}
          onChange={onChange}
          color="success"
        />
      }
      label={label}
    />
  );
}
