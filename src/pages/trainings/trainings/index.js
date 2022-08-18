import React from "react";
import { connect } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import moment from "moment";
import Schedule from "./trainingsSchedule";
import { getTrainingsAC } from "../../../redux/trainings/trainings/trainingsActions";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "seminar",
    seminar: "სემინარები",
    minWidth: 250,
    flex: 1,
    editable: false,
  },
  {
    field: "test",
    headerName: "ტესტი",
    flex: 1,
    minWidth: 320,
    editable: false,
  },
  {
    field: "date",
    headerName: "თარიღი",
    type: "date",
    flex: 0.4,
    minWidth: 100,
    editable: false,
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "schedule",
    headerName: "განრიგი",
    flex: 0.4,
    minWidth: 80,
    type: "actions",
    editable: false,
    renderCell: (params) => <Schedule {...params.row} />,
  },
  {
    field: "registration",
    headerName: "რეგისტრაცია",
    flex: 0.4,
    minWidth: 90,
    type: "boolean",
    editable: false,
  },
  {
    field: "registered",
    headerName: "დარეგისტრირებული",
    flex: 0.4,
    minWidth: 140,
    type: "boolean",
    editable: true,
  },
];

function Trainings(props) {
  const { trainings, getTrainingsAC } = props;
  React.useEffect(() => {
    getTrainingsAC();
  }, []);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box maxWidth={"1600px"} width={"100%"}>
        <DataGrid
          className="MuiDataGrid-virtualScrollerContent--overflowed"
          rows={trainings}
          columns={columns}
          pageSize={15}
          autoHeight
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
        />
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    trainings: state.trainings.trainings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrainingsAC() {
      dispatch(getTrainingsAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainings);
