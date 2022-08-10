import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Controls from "../../mainControls";
import moment from "moment";
import { countries } from "../../../DB/country";
import { places } from "../../../DB/place";
import { maritalStatus } from "../../../DB/maritalStatus";

export default function PersonMainInfo(props) {
  const { basic, onChange } = props;
  const {
    Citizenship,
    OjCondition,
    PersonalN,
    Position,
    branch,
    corpMail,
    dateOfBirth,
    fullName,
    homes,
    insideN,
    mobile,
    placeOfBirth,
    status,
  } = basic;
  const born = moment(dateOfBirth, "DD/MM/YYYY").format("YYYY-MM-DDThh:mm:ss");
  return (
    <Card variant="outlined">
      <Typography m={1} fontSize={"1rem"} fontWeight={"bold"} variant="h3">
        ძირითადი
      </Typography>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Input
          label="სრული სახელი"
          name="fullName"
          value={fullName}
          onChange={onChange}
        />
        <Controls.Input
          label="სტატუსი"
          name="status"
          value={status}
          onChange={onChange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Input
          fullWidth
          label="ფილიალი"
          name="branch"
          value={branch}
          onChange={onChange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Input
          fullWidth
          label="თანამდებობა"
          name="Position"
          value={Position}
          onChange={onChange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.DatePicker
          label="დაბადების თარიღი"
          name="dateOfBirth"
          value={born}
          onChange={onChange}
        />
        <Controls.Input
          label="სახლის"
          name="homes"
          value={homes}
          onChange={onChange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Select
          label="დაბადების ადგილი"
          name="placeOfBirth"
          value={placeOfBirth}
          onChange={onChange}
          options={places}
        />
        <Controls.Input
          label="მობილური"
          name="mobile"
          value={mobile}
          onChange={onChange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Select
          label="მოქალაქეობა"
          name="Citizenship"
          value={Citizenship}
          onChange={onChange}
          options={countries}
        />
        <Controls.Input
          label="შიდა #"
          name="insideN"
          value={insideN}
          onChange={onChange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Select
          label="ოჯ. მდგომარეობა"
          name="OjCondition"
          value={OjCondition}
          onChange={onChange}
          options={maritalStatus}
        />
        <Controls.Input
          label="შიდა #"
          name="insideN"
          value={insideN}
          onChange={onChange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Input
          label="პირადი #"
          name="PersonalN"
          value={PersonalN}
          onChange={onChange}
        />
        <Controls.Input
          label="პირადი ელ. ფოსტა"
          name="corpMail"
          value={corpMail}
          onChange={onChange}
        />
      </Box>
    </Card>
  );
}
