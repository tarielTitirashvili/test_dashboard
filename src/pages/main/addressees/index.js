import { Box } from "@mui/system";
import React from "react";
import Controls from "../../../components/mainControls";
import { places } from "../../../DB/place";
import { Card, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Addressees(props) {
  const { title, fullAddress, onChange, objName } = props;
  const localOnchange = (e) => onChange(e, objName);
  const { address, city } = fullAddress;
  const { t } = useTranslation();
  return (
    <Card variant="outlined">
      <Typography m={1} fontSize={"1rem"} fontWeight={"bold"} variant="h3">
        {title}
      </Typography>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Select
          label={t("city")}
          name="city"
          value={city}
          onChange={localOnchange}
          options={places}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Input
          fullWidth
          label={t("address")}
          name="address"
          value={address}
          onChange={localOnchange}
        />
      </Box>
    </Card>
  );
}
