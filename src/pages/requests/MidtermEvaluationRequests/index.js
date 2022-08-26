import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { connect } from "react-redux";
import { getMidtermEvaluationsAC } from "../../../redux/requests/midtermEvaluation/midtermEvaluationActions";
import FlexContainer from "../../../styledComponents/FlexContainer";
import TableContainer from "../../../styledComponents/TableContainer";

function MidtermEvaluationRequests(props) {
  const columns = [
    { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
    {
      field: "firstName",
      headerName: "სახელი",
      flex: 1,
      minWidth: 140,
      editable: false,
    },
    {
      field: "lastName",
      headerName: "გვარი",
      flex: 0.7,
      minWidth: 120,
      editable: false,
    },
    {
      field: "position",
      headerName: "თანამდებობა",
      flex: 0.7,
      minWidth: 120,
      editable: false,
    },
  ];

  const { drivingLicenses, getMidtermEvaluationsAC } = props;
  React.useEffect(()=>{
    getMidtermEvaluationsAC()
  },[])
  return (
    <FlexContainer>
      <TableContainer>
        <DataGrid
          className="MuiDataGrid-virtualScrollerContent--overflowed"
          rows={drivingLicenses}
          columns={columns}
          pageSize={15}
          autoHeight
          rowsPerPageOptions={[15]}
          disableSelectionOnClick
        />
      </TableContainer>
    </FlexContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    drivingLicenses: state.requests.midtermEvaluation.midtermEvaluations,
    loading: state.loading.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMidtermEvaluationsAC() {
      dispatch(getMidtermEvaluationsAC());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MidtermEvaluationRequests);
