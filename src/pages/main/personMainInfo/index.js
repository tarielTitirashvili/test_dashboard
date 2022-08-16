import React from "react";
import { Card, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import moment from "moment";
import { countries } from "../../../DB/country";
import { places } from "../../../DB/place";
import Controls from "../../../components/controls";
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
    personalMail,
  } = basic;
  const { t } = useTranslation();
  const localOnchange = (e) => onChange(e, "basic");

  const born = moment(dateOfBirth, "DD/MM/YYYY").format("YYYY-MM-DDThh:mm:ss");
  return (
    <Card sx={{ padding: 2 }} variant="outlined">
      <Typography m={1} fontSize={"1rem"} fontWeight={"bold"} variant="h3">
        {t("main")}
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        p={1}
      >
        <Controls.Input
          label={t("fullName")}
          name="fullName"
          value={fullName}
          onChange={localOnchange}
        />
        <Controls.Input
          label={t("status")}
          name="status"
          value={status}
          onChange={localOnchange}
        />
      </Box>
      <Box p={1}>
        <Controls.Input
          fullWidth
          label={t("office")}
          name="branch"
          value={branch}
          onChange={localOnchange}
        />
      </Box>
      <Box p={1}>
        <Controls.Input
          fullWidth
          label={t("position")}
          name="Position"
          value={Position}
          onChange={localOnchange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.DatePicker
          label={t("dateOfBirth")}
          name="dateOfBirth"
          value={born}
          onChange={localOnchange}
        />
        <Controls.Input
          label={t("homePhone")}
          name="homes"
          value={homes}
          onChange={localOnchange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Select
          label={t("birthPlace")}
          name="placeOfBirth"
          value={placeOfBirth}
          onChange={localOnchange}
          options={places}
        />
        <Controls.Input
          label={t("mobilePhone")}
          name="mobile"
          value={mobile}
          onChange={localOnchange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Select
          label={t("citizenship")}
          name="Citizenship"
          value={Citizenship}
          onChange={localOnchange}
          options={countries}
        />
        <Controls.Input
          label={t("insideN")}
          name="insideN"
          value={insideN}
          onChange={localOnchange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Select
          label={t("maritalStatus")}
          name="OjCondition"
          value={OjCondition}
          onChange={localOnchange}
          options={maritalStatus}
        />
        <Controls.Input
          label={t("companyMail")}
          name="corpMail"
          value={corpMail}
          onChange={localOnchange}
        />
      </Box>
      <Box display={"flex"} justifyContent={"space-between"} p={1}>
        <Controls.Input
          label={t("personalN")}
          name="PersonalN"
          value={PersonalN}
          onChange={localOnchange}
        />
        <Controls.Input
          label={t("personalMail")}
          name="personalMail"
          value={personalMail}
          onChange={localOnchange}
        />
      </Box>
    </Card>
  );
}
