import React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import {
  getTestsThunk,
  setNewTestOnSaveAC,
} from "../../../redux/actions/testResultsActions";
import AddTableRow from "../../../components/addTableRow";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "test",
    headerName: "ტესტირება",
    flex: 1,
    minWidth: 340,
    editable: false,
  },
  {
    field: "date",
    headerName: "თარიღი",
    type: "date",
    flex: 0.7,
    minWidth: 120,
    editable: false,
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "testResult",
    headerName: "ტესტირების შედეგი",
    flex: 0.7,
    minWidth: 120,
    editable: false,
  },
];

function TestResults(props) {
  const { setNewTestOnSaveAC, getTestsThunk, tests, role } = props;
  React.useEffect(() => {
    getTestsThunk();
  }, []);
  const [row, setRow] = React.useState({
    test: "",
    date: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
    testResult: "",
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

  const onSave = () => {
    setNewTestOnSaveAC({ ...row, id: tests[tests.length - 1].id+1 });
  };
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box maxWidth={"1600px"} width={"100%"}>
        <AddTableRow
          row={row}
          columns={columns}
          role={role}
          setRow={onRowChange}
          onSave={onSave}
        />
        <DataGrid
          className="MuiDataGrid-virtualScrollerContent--overflowed"
          rows={tests}
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
    tests: state.testsResults.tests,
    role: state.auth.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTestsThunk() {
      dispatch(getTestsThunk());
    },
    setNewTestOnSaveAC(newTest) {
      dispatch(setNewTestOnSaveAC(newTest));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResults);
