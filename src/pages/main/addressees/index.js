import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Controls from "../../../components/controls";
import places from "../../../DB/place";

export default function Addressees(props) {
  const { title, fullAddress, onChange, objName } = props;
  const localOnchange = (e) => onChange(e, objName);
  const { address, city } = fullAddress;
  const { t } = useTranslation();
  return (
    <Card sx={{ padding: 2 }} variant="outlined">
      <Typography m={1} fontSize={"1rem"} fontWeight={"bold"} variant="h3">
        {title}
      </Typography>
      <Box p={1}>
        <Controls.Select
          label={t("city")}
          name="city"
          value={city}
          onChange={localOnchange}
          options={places}
        />
      </Box>
      <Box p={1}>
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
