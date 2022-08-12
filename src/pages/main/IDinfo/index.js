import React from "react";
import { Box, Card, Typography } from "@mui/material";
import moment from "moment";
import { useTranslation } from "react-i18next";
import Controls from "../../../components/mainControls";
import { docType } from "../../../DB/docType";

export default function IDInfo(props) {
  const { onChange, identity } = props;
  const localOnchange = (e) => onChange(e, "identity");
  const { documentN, documentType, issuingAgency, releaseDater, validFor } =
    identity;
  const releaseDate = moment(releaseDater, "DD/MM/YYYY").format(
    "YYYY-MM-DDThh:mm:ss"
  );
  const validUntil = moment(validFor, "DD/MM/YYYY").format(
    "YYYY-MM-DDThh:mm:ss"
  );
  const { t } = useTranslation();
  return (
    <Card variant="outlined">
      <Typography m={1} fontSize={"1rem"} fontWeight={"bold"} variant="h3">
        {t("IDCard")}
      </Typography>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Select
          label={t("docType")}
          name="documentType"
          value={documentType}
          onChange={localOnchange}
          options={docType}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Input
          label={t("documentNumber")}
          name="documentN"
          value={documentN}
          onChange={localOnchange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Input
          fullWidth
          label={t("issuingAgency")}
          name="issuingAgency"
          value={issuingAgency}
          onChange={localOnchange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.DatePicker
          fullWidth
          label={t("releaseDate")}
          name="releaseDater"
          value={releaseDate}
          onChange={localOnchange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.DatePicker
          fullWidth
          label={t("validTo")}
          name="validFor"
          value={validUntil}
          onChange={localOnchange}
        />
      </Box>
    </Card>
  );
}
