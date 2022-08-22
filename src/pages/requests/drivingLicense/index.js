import { Box } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { getVocationStatisticsAC } from "../../../redux/requests/drivingLicense/drivingLicenseActions";
import Loading from "../../../components/loading";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
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
    field: "docN",
    headerName: "საბუთის #",
    flex: 1,
    minWidth: 340,
    editable: false,
  },
  {
    field: "DateOfIssuance",
    headerName: "გაცემის თარიღი",
    type: "date",
    flex: 0.7,
    minWidth: 120,
    editable: false,
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "status",
    headerName: "სტატუსი",
    flex: 0.7,
    minWidth: 120,
    editable: false,
  },
];

function DrivingLicense(props) {
  const { getVocationStatisticsAC, drivingLicenses, loading } = props;
  console.log(drivingLicenses, loading);
  React.useEffect(() => {
    getVocationStatisticsAC();
  }, []);

  if (loading) return <Loading />;
  return (
    <Box>
      <DataGrid
        className="MuiDataGrid-virtualScrollerContent--overflowed"
        rows={drivingLicenses}
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
    role: state.auth.role,
    drivingLicenses: state.requests.drivingLicense.drivingLicenses,
    loading: state.requests.vocationStatistics.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getVocationStatisticsAC() {
      dispatch(getVocationStatisticsAC());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrivingLicense);
