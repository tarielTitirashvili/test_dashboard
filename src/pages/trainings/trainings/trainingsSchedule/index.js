import React from "react";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import { IconButton, Typography, Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";
import ScheduleText from "../scheduleText";
import modalStyle from "../../../../assets/modalStyle";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "date",
    headerName: "თარიღი",
    flex: 0.3,
    type: "date",
    maxWidth: 150,
    editable: false,
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "time",
    headerName: "საათი",
    type: "date",
    flex: 0.3,
    width: 130,
    editable: false,
    sortable: false,
    renderCell: (params) => moment(params.row.date).format("hh:mm"),
  },
  {
    field: "place",
    headerName: "ჩატარების ადგილი",
    flex: 1,
    width: 180,
    editable: false,
  },
  {
    field: "teacher",
    headerName: "მასწავლებელი",
    flex: 1,
    width: 250,
    editable: false,
  },
];

export default function Schedule(props) {
  let { schedule, seminar, test, date } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (!schedule) schedule = [];

  return (
    <>
      <IconButton onClick={handleOpen}>
        <InsertInvitationIcon color="primary" />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="p">განრიგი</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <ScheduleText title={"სემინარი"} value={seminar} />
          <ScheduleText title={"ტესტირება"} value={test} />
          <ScheduleText
            title={"გამოცდის თარიღი"}
            value={moment(date).format("DD/MM/YYYY")}
          />
          <DataGrid
            rows={schedule}
            columns={columns}
            pageSize={15}
            autoHeight
            rowsPerPageOptions={[15]}
            disableSelectionOnClick
          />
        </Box>
      </Modal>
    </>
  );
}
