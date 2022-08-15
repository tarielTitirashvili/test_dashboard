import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    LinearProgress,
    ListItem,
    ListItemText,
    Slide,
  } from "@mui/material";
  import React from "react";
  import { useTranslation } from "react-i18next";
  import { getVocationAPI, getVocationStatisticsAPI } from "../../../API";
  import { Box } from "@mui/system";
  import VOCATION_TYPES from "../../../DB/vocation";

  export default function VocationStatistics() {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [vocation, setVocation] = React.useState([]);
    const [vocationStatistics, setVocationStatistics] = React.useState([]);
    const { t } = useTranslation();
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const getVocationStatistics = async () => {
      const data = await getVocationStatisticsAPI();
      console.log(data);
    };
    const getVocations = async () => {
      const data = await getVocationAPI();
      console.log(data);
    };
  
    React.useEffect(() => {
      getVocationStatistics();
      setTimeout(() => {
        getVocations();
      }, 3000);
    });
  
    return (
      <>
        <ListItem button onClick={handleClickOpen}>
          <ListItemText primary={t("vocation")} />
        </ListItem>
      </>
    );
  }
  