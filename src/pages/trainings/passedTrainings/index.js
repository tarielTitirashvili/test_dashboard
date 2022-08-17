import React from "react";
import { connect } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import { Box } from "@mui/material";
import {
  getPassedTrainingsThunk,
  setPassedTrainingsOnSaveAC,
} from "../../../redux/actions/passedTrainingsActions";
import AddTableRow from "../../../components/addTableRow";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "training",
    headerName: "ტრენინგი",
    flex: 1,
    minWidth: 340,
    editable: false,
  },
  {
    field: "startDate",
    headerName: "დაწყების თარიღი",
    type: "date",
    flex: 0.7,
    minWidth: 120,
    editable: false,
    renderCell: (params) => moment(params.row.startDate).format("DD/MM/YYYY"),
  },
  {
    field: "endDate",
    headerName: "დამთავრების თარიღი",
    type: "date",
    flex: 0.7,
    minWidth: 120,
    editable: false,
    renderCell: (params) => moment(params.row.endDate).format("DD/MM/YYYY"),
  },
  {
    field: "place",
    headerName: "ჩატარების ადგილი",
    flex: 0.7,
    minWidth: 120,
    editable: false,
  },
];

function PassedTrainings(props) {
  const { getPassedTrainingsThunk, passedTrainings, role, setPassedTrainingsOnSaveAC } = props;
  React.useEffect(() => {
    getPassedTrainingsThunk();
  }, []);
  const [row, setRow] = React.useState({
    training: "",
    startDate: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
    endDate: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
    place: "",
  });
  const onRowChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setRow({ ...row, [`${name}`]: value });
    } else {
      const { name, value } = e;
      setRow({
        ...row,
        [`${name}`]: moment(value, "DD/MM/YYYY").format("YYYY-MM-DDThh:mm:ss"),
      });
    }
  };
  const onSave=()=>{
    setPassedTrainingsOnSaveAC({...row, id: passedTrainings[passedTrainings.length-1].id+1})
  }
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box width={"100%"} maxWidth={"1080px"}>
        <AddTableRow
          row={row}
          columns={columns}
          role={role}
          setRow={onRowChange}
          onSave={onSave}
        />
        <DataGrid
          className="MuiDataGrid-virtualScrollerContent--overflowed"
          rows={passedTrainings}
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
    passedTrainings: state.passedTrainings.passedTrainings,
    role: state.auth.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPassedTrainingsThunk() {
      dispatch(getPassedTrainingsThunk());
    },
    setPassedTrainingsOnSaveAC(training) {
      dispatch(setPassedTrainingsOnSaveAC(training));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PassedTrainings);
