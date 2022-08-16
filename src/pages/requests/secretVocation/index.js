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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Vocation() {
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
  };
  const getVocations = async () => {
    const data = await getVocationAPI();
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
      >
        {loading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        )}
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          {/* <Controls.DatePicker
            label={t("vocationType")}
            name="vocationType"
            value={born}
            onChange={localOnchange}
          /> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
