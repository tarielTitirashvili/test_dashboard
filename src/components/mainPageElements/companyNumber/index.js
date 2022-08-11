import { Box, Card, Typography } from "@mui/material";
import React from "react";
import Controls from "../../mainControls";

export default function CompanyNumber(props) {
  const { title, smallTitle, companyNumber, onChange } = props;
  const { changeDate, limit, number, serviceGroup } = companyNumber;
  const localOnchange = (e) =>{
    return onChange(e, "companyNumber")
  }
  return (
    <Card variant="outlined">
      <Typography m={2} fontSize={"1rem"} fontWeight={"bold"} variant="h3">
        {title}
      </Typography>
      <Box pl={4}>
        <Typography m={1} fontSize={"0.75rem"} fontWeight={"bold"} variant="h3">
          {smallTitle}
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"} p={1}>
          <Controls.Input
            label="ტელეფონი"
            name="number"
            value={number}
            onChange={localOnchange}
          />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} p={1}>
          <Controls.Input
            fullWidth
            label="მომსახურების ჯგუფი	"
            name="serviceGroup"
            value={serviceGroup}
            onChange={localOnchange}
          />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} p={1}>
          <Controls.Input
            label="ლიმიტი"
            name="limit"
            value={limit}
            onChange={localOnchange}
          />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} p={1}>
          <Controls.Input
            label="თარიღი"
            name="changeDate"
            value={changeDate}
            onChange={localOnchange}
          />
        </Box>
      </Box>
    </Card>
  );
}
