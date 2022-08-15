import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { ADMIN } from "../../redux/constants";
import CloseIcon from "@mui/icons-material/Close";
import modalStyle from "../../assets/modalStyle";
import Controls from "../mainControls";

export default function AddTableRow(props) {
  const { role, columns, setRow, row } = props;
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (role !== ADMIN) return;

  return (
    <Box m={2}>
      <Button onClick={handleOpen} variant="contained">
        {t("add")}
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="p">დამატება</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box display={'block'}>
            {columns.map((column) => {
              const { field, type, headerName } = column;
              if (field === "id") return;
              if (type === "date")
                return (
                  <Controls.DatePicker
                    key={`${field}${headerName}`}
                    value={row[field]}
                    name={field}
                    onChange={setRow}
                  />
                );
              if (!type)
                return (
                  <Controls.Input
                    key={`${field}${headerName}`}
                    value={row[field]}
                    name={field}
                    onChange={setRow}
                  />
                );
            })}
          </Box>
          <Box m={2}>
            <Button variant="contained">save</Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
