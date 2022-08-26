import { Typography } from "@mui/material";
import { t } from "i18next";
import React from "react";
import Controls from "../../../../../components/controls";
import PersonBasicInfo from "../../../../../components/personBasicInfo";
import TRIP_GOAL from "../../../../../DB/businessTripGoal";

export default function PersonInfo(props) {
  const { basics, tripData, onChange } = props;
  const { fullName, Position, branch, PersonalN } = basics;

  return (
    <>
      <Typography mb={2} fontWeight={"bolder"} variant="h6">
        {t("businessTrip")}
      </Typography>
      <PersonBasicInfo basics={basics} />

      <Controls.Select
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
