import React from "react";
import { connect } from "react-redux";
import { getTestsThunk } from "../../../redux/actions/testResultsActions";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";

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
  const { getTestsThunk, tests } = props;
  React.useEffect(() => {
    getTestsThunk();
  }, []);
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box maxWidth={"1600px"} width={"100%"}>
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTestsThunk() {
      dispatch(getTestsThunk());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestResults);
