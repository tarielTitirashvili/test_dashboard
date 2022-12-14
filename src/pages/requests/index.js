import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import { t } from "i18next";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Requests() {
  let navigate = useNavigate();
  const onclick = (path) => {
    navigate(path);
  };
  return (
    <Card>
      <Typography m={2} variant="h5">
        {t("requestAdd")}
      </Typography>
      <Typography m={2} variant="h6">
        {t("requestType")}
      </Typography>
      <List component="nav" aria-label="mailbox folders">
        <ListItem
          onClick={() => {
            onclick("/request/IPC");
          }}
          button
        >
          <ListItemText primary={t("IPC")} />
        </ListItem>
        <Divider />
        <ListItem
          onClick={() => {
            onclick("/request/vocationCurrentRequests");
          }}
          button
        >
          <ListItemText primary={t("vocation")} />
        </ListItem>
        <Divider />
        <ListItem
          onClick={() => {
            onclick("/request/businessTrip");
          }}
          button
        >
          <ListItemText primary={t("businessTrip")} />
        </ListItem>
        <Divider />
        <ListItem
          button
          onClick={() => {
            onclick("/request/corpNumber");
          }}
        >
          <ListItemText primary={t("CORPORATE_PHONES")} />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary={t("visitCard")} />
        </ListItem>
        <Divider />
        <ListItem
          onClick={() => {
            onclick("/request/midtermEvaluation");
          }}
          button
        >
          <ListItemText primary={t("intermediateEvaluation")} />
        </ListItem>
        <Divider />
        <ListItem
          onClick={() => {
            onclick("/request/drivingLicense");
          }}
          button
        >
          <ListItemText primary={t("drivingLicense")} />
        </ListItem>
      </List>
    </Card>
  );
}
