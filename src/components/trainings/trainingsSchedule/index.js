import React from "react";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import { IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import moment from "moment";
import ScheduleText from "../scheduleText";
import { DataGrid } from "@mui/x-data-grid";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  paddingTop: 0,
  fontSize: "0.75rem",
};

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "date",
    headerName: "თარიღი",
    type: "date",
    width: 130,
    editable: false,
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "time",
    headerName: "საათი",
    type: "date",
    width: 130,
    editable: false,
    renderCell: (params) => moment(params.row.date).format("hh:mm"),
  },
  {
    field: "place",
    headerName: "ჩატარების ადგილი",
    width: 130,
    editable: false,
  },
  {
    field: "teacher",
    headerName: "მასწავლებელი",
    width: 250,
    editable: false,
  },
];

export default function Schedule(props) {
  const { schedule, seminar, test, date } = props;
  console.log(props);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <InsertInvitationIcon color="primary" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
            className="MuiDataGrid-virtualScrollerContent--overflowed"
            rows={schedule}
            columns={columns}
            pageSize={15}
            autoHeight
            rowsPerPageOptions={[15]}
            disableSelectionOnClick
          />
        </Box>
      </Modal>
    </div>
  );
}
