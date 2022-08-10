import { Box, Card, Typography } from "@mui/material";
import React from "react";
import { docType } from "../../../DB/docType";
import Controls from "../../mainControls";
import moment from "moment";

export default function IDInfo(props) {
  const { onChange, identity } = props;
  const { documentN, documentType, issuingAgency, releaseDater, validFor } =
    identity;
  const releaseDate = moment(releaseDater, "DD/MM/YYYY").format(
    "YYYY-MM-DDThh:mm:ss"
  );
  const validUntil = moment(validFor, "DD/MM/YYYY").format(
    "YYYY-MM-DDThh:mm:ss"
  );
  return (
    <Card variant="outlined">
      <Typography m={1} fontSize={"1rem"} fontWeight={"bold"} variant="h3">
        პირადობა
      </Typography>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Select
          label="საბუთის ტიპი"
          name="documentType"
          value={documentType}
          onChange={onChange}
          options={docType}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Input
          label="საბუთის #"
          name="documentN"
          value={documentN}
          onChange={onChange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Input
          fullWidth
          label="გამცემი ორგანო"
          name="issuingAgency"
          value={issuingAgency}
          onChange={onChange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.DatePicker
          fullWidth
          label="გაცემის თარიღი"
          name="releaseDater"
          value={releaseDate}
          onChange={onChange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.DatePicker
          fullWidth
          label="ძალაშია"
          name="validFor"
          value={validUntil}
          onChange={onChange}
        />
      </Box>
    </Card>
  );
}