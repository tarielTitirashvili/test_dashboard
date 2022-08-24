import { Typography } from "@mui/material";
import moment from "moment";
import React from "react";
import { useTranslation } from "react-i18next";
import Controls from "../../../../../components/controls";
import TitleWithText from "../../../../../components/titleWithText";
import TRIP_GOAL from "../../../../../DB/businessTripGoal";

export default function PersonInfo(props) {
  const { basics, tripData, onChange } = props;
  const { fullName, Position, branch, PersonalN } = basics;
  const { t } = useTranslation();

  return (
    <>
      <Typography mb={2} fontWeight={"bolder"} variant="h6">
        {t("businessTrip")}
      </Typography>
      <TitleWithText
        title={t("completionDate")}
        text={`${moment(Date.now()).format("DD/MM/YYYY")}`}
      />
      <TitleWithText title={t("fullName")} text={fullName} />
      <TitleWithText title={t("position")} text={Position} />
      <TitleWithText title={t("office")} text={branch} />
      <TitleWithText title={t("personalN")} text={PersonalN} />
      <Controls.Select
        label={t("tripGoal")}
        name="tripGoal"
        width={"450px"}
        value={tripData.tripGoal}
        onChange={onChange}
        options={TRIP_GOAL}
      />
      <Typography sx={{ color: "red", m: 1 }}>
        საზღვარგარეთ მივლინების შემთხვევაში, გთხოვთ სრულად მიუთითით ის მარშრუტი
        რაც ფრენის დეტალებშია მოცემული
      </Typography>
    </>
  );
}
