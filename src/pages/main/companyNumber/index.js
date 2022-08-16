import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Controls from "../../../components/controls";
import CorporateNumberOfRelatives from "./corporateNumberOfRelatives";

export default function CompanyNumber(props) {
  const { title, smallTitle, companyNumber, onChange, role } = props;
  const {
    changeDate,
    limit,
    number,
    serviceGroup,
    corporateNumberOfRelatives,
  } = companyNumber;
  const { t } = useTranslation();

  const localOnchange = (e) => {
    return onChange(e, "companyNumber");
  };
  return (
    <Card sx={{ padding: 2 }} variant="outlined">
      <Typography m={1} fontSize={"1rem"} fontWeight={"bold"} variant="h3">
        {title}
      </Typography>
      <Box pl={4}>
        <Typography m={1} fontSize={"0.75rem"} fontWeight={"bold"} variant="h3">
          {smallTitle}
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"} p={1}>
          <Controls.Input
            label={t("phone")}
            name="number"
            value={number}
            onChange={localOnchange}
          />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} p={1}>
          <Controls.Input
            fullWidth
            label={t("serviceGroup")}
            name="serviceGroup"
            value={serviceGroup}
            onChange={localOnchange}
          />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} p={1}>
          <Controls.Input
            label={t("limit")}
            name="limit"
            value={limit}
            onChange={localOnchange}
          />
        </Box>
        <Box display={"flex"} justifyContent={"space-between"} p={1}>
          <Controls.Input
            label={t("date")}
            name="changeDate"
            value={changeDate}
            onChange={localOnchange}
          />
        </Box>
        <CorporateNumberOfRelatives
          role={role}
          relativesData={corporateNumberOfRelatives}
        />
      </Box>
    </Card>
  );
}
