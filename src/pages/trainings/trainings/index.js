import React from "react";
import { getTrainingsThunk } from "../../../redux/actions/trainingsActions";
import { connect } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import moment from "moment";
import Schedule from "../../../components/trainings/trainingsSchedule";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "seminar",
    seminar: "სემინარები",
    width: 250,
    editable: false,
  },
  {
    field: "test",
    headerName: "ტესტი",
    width: 250,
    editable: false,
  },
  {
    field: "date",
    headerName: "თარიღი",
    type: "date",
    width: 310,
    editable: false,
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "schedule",
    headerName: "განრიგი",
    width: 120,
    type: "actions",
    editable: true,
    renderCell: (params) => {
      return <Schedule {...params.row} />;
    },
  },
  {
    field: "registration",
    headerName: "რეგისტრაცია",
    width: 120,
    type: "boolean",
    editable: false,
  },
  {
    field: "registered",
    headerName: "დარეგისტრირებული",
    width: 160,
    type: "boolean",
    editable: true,
  },
];

function Trainings(props) {
  const { getTrainingsThunk, trainings } = props;

  React.useEffect(() => {
    getTrainingsThunk();
  }, []);
  return (
    <Box>
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
  );
}

const mapStateToProps = (state) => {
  return {
    trainings: state.trainings.trainings,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTrainingsThunk() {
      dispatch(getTrainingsThunk());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Trainings);
