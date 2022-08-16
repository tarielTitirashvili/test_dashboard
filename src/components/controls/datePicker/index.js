import React from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Box, TextField, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";

export default function DatePicker(props) {
  const { name, label, value, onChange, margin } = props;
  const onChangeHere = (newDate, name) => {
    const { _d } = newDate;
    const value = moment(_d).format("DD/MM/YYYY");
    return onChange({ name, value });
  };
  return (
    <Box>
      <Typography>{label}</Typography>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <MobileDatePicker
          toolbarPlaceholder={label}
          name={name}
          inputFormat="MM/DD/yyyy"
          value={value}
          onChange={(date) => onChangeHere(date, name)}
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ width: "230px", margin: margin ? margin : "0" }}
              size="small"
            />
          )}
        />
      </LocalizationProvider>
    </Box>
  );
}
