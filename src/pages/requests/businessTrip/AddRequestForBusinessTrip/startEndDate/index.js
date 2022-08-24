import { Box, Card } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import Controls from "../../../../../components/controls";
import PEOPLE_FOR_OPTIONS from "../../../../../DB/people";
import TRANSPORT from "../../../../../DB/transport";

export default function StartEndDate(props) {
  const { tripData, onChange, onChangeCheckBox } = props;
  const { t } = useTranslation();
  return (
    <Card elevation={3} sx={{ p: 3, m: 2 }}>
      <Box display={"flex"} width={"70%"} justifyContent={"space-between"}>
        <Controls.DatePicker
          label={t("startDate")}
          value={tripData.startDate}
          withHours={tripData.peekHours}
          name={"startDate"}
          onChange={onChange}
        />
        <Controls.CheckBox
          margin={2}
          label={t("peekHours")}
          name={"peekHours"}
          value={tripData.peekHours}
          onChange={onChangeCheckBox}
        />
      </Box>
      <Box display={"flex"} width={"70%"} justifyContent={"space-between"}>
        <Controls.DatePicker
          label={t("endDate")}
          value={tripData.endData}
          name={"endData"}
          withHours={tripData.peekHours}
          onChange={onChange}
        />
        <Controls.Select
          label={t("substitutePerson")}
          name="substitutePerson"
          value={tripData.substitutePerson}
          onChange={onChange}
          options={PEOPLE_FOR_OPTIONS}
        />
      </Box>
      <Box display={"flex"} width={"70%"} justifyContent={"space-between"}>
        <Controls.Select
          label={t("transport")}
          name="transport"
          value={tripData.transport}
          onChange={onChange}
          options={TRANSPORT}
        />
        <Controls.Select
          label={t("head")}
          name="head"
          value={tripData.head}
          onChange={onChange}
          options={PEOPLE_FOR_OPTIONS}
        />
      </Box>
      <Box>
        <Controls.TextArea
          label={t("comment")}
          name="comment"
          value={tripData.comment}
          onChange={onChange}
        />
      </Box>
    </Card>
  );
}
