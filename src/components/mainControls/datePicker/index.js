import React from "react";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from 'moment'

export default function DatePicker(props) {
  const { name, label, value, onChange } = props;
  const onChangeHere = (newDate, name) => {
    const { _d } = newDate;
    const value = moment(_d).format("DD/MM/YYYY");
    return onChange({target:{name, value}});
  };
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <MobileDatePicker
        label={label}
        name={name}
        inputFormat="MM/DD/yyyy"
        value={value}
        onChange={(date)=>onChangeHere(date, name)}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
}
