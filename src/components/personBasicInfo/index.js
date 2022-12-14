import { t } from "i18next";
import moment from "moment";
import React from "react";
import TitleWithText from "../titleWithText";

export default function PersonBasicInfo(props) {
  const { basics } = props;
  const { fullName, Position, branch, PersonalN } = basics;
  return (
    <div>
      
      <TitleWithText
        title={t("completionDate")}
        text={`${moment(Date.now()).format("DD/MM/YYYY")}`}
      />
      <TitleWithText title={t("fullName")} text={fullName} />
      <TitleWithText title={t("position")} text={Position} />
      <TitleWithText title={t("office")} text={branch} />
      <TitleWithText title={t("personalN")} text={PersonalN} />
    </div>
  );
}
