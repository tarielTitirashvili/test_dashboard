import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ADMIN } from "../../redux/constants";
import CloseIcon from "@mui/icons-material/Close";
import modalStyle from "../../assets/modalStyle";
import Controls from "../controls";

export default function AddTableRow(props) {
  const { role, columns, setRow, row, onSave } = props;
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (role !== ADMIN) return;

  const onSaveClicked=()=>{
    onSave()
    setOpen(false)
  }

  return (
    <Box m={2}>
      <Button onClick={handleOpen} variant="contained">
        {t("add")}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h6">დამატება</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box>
            {columns.map((column) => {
              const { field, type, headerName } = column;
              if (field === "id") {
                return;
              } else if (type === "date") {
                return (
                  <Controls.DatePicker
                    margin={2}
                    key={`${field}${headerName}`}
                    label={headerName}
                    value={row[field]}
                    name={field}
                    onChange={setRow}
                  />
                );
              } else if (!type || type === "number" || type === "string") {
                return (
                  <Controls.Input
                    margin={2}
                    key={`${field}${headerName}`}
                    label={headerName}
                    value={row[field]}
                    name={field}
                    onChange={setRow}
                  />
                );
              } else {
                return;
              }
            })}
          </Box>
          <Box m={2}>
            <Button onClick={onSaveClicked} variant="contained">
              save
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
