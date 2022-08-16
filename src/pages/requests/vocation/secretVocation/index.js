import { Box, Button, Paper } from "@mui/material";
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import Controls from "../../../../components/controls";
import PEOPLE_FOR_OPTIONS from "../../../../DB/people";
import { useTranslation } from "react-i18next";
import VOCATION_TYPES from "../../../../DB/vocationTypes";

export default function Vocation() {
  const [request, setRequest] = React.useState({
    reqType: VOCATION_TYPES[0].value,
    startDate: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
    endDate: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
    replPerson: PEOPLE_FOR_OPTIONS[0].value,
    leader: PEOPLE_FOR_OPTIONS[0].value,
    comment: "",
  });
  const onRowChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setRequest({ ...request, [`${name}`]: value });
    } else {
      const { name, value } = e;
      setRequest({
        ...request,
        [`${name}`]: moment(value, "DD/MM/YYYY").format("YYYY-MM-DDThh:mm:ss"),
      });
    }
  };
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Paper elevation={3} sx={{ width: "75%", p: 4 }}>
        <Controls.Select
          label={t("reqType")}
          name="reqType"
          value={request.reqType}
          onChange={onRowChange}
          options={VOCATION_TYPES}
        />
        <Controls.DatePicker
          label={t("startDate")}
          name="startDate"
          value={request.startDate}
          onChange={onRowChange}
        />
        <Controls.DatePicker
          label={t("endDate")}
          name="endDate"
          value={request.endDate}
          onChange={onRowChange}
        />
        <Controls.Select
          label={t("replacementPerson")}
          name="replPerson"
          value={request.replPerson}
          onChange={onRowChange}
          options={PEOPLE_FOR_OPTIONS}
        />
        <Controls.Select
          label={t("leader")}
          name="leader"
          value={request.leader}
          onChange={onRowChange}
          options={PEOPLE_FOR_OPTIONS}
        />
        <Controls.TextArea
          label={t("comment")}
          name="comment"
          value={request.comment}
          onChange={onRowChange}
          options={PEOPLE_FOR_OPTIONS}
        />
        <Box display={"flex"} justifyContent={"space-between"} width={"40%"}>
          <Button
            onClick={() => {
              navigate("/request");
            }}
            variant="contained"
          >
            {t("save")}
          </Button>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            variant="contained"
          >
            {t("back")}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
