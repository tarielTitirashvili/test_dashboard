import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { getBusinessTripsAC } from "../../../redux/requests/businessTrip/BusinessTripActions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import businessTrip from "../../../DB/businessTrip";
import moment from "moment";
import { useTranslation } from "react-i18next";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "date",
    headerName: "თარიღი",
    flex: 1,
    minWidth: 340,
    editable: false,
  },
  {
    field: "tripGoal",
    headerName: "მივლინების მიზანი",
    flex: 0.7,
    minWidth: 120,
    editable: false,
  },
  {
    field: "startDate",
    headerName: "დაწყების თარიღი",
    type: "date",
    flex: 0.7,
    minWidth: 120,
    editable: false,
    renderCell: (params) => moment(params.row.startDate, "DD/MM/YYYY").format("DD/MM/YYYY"),
  },
  {
    field: "endDate",
    headerName: "დამთავრების თარიღი",
    type: "date",
    flex: 0.7,
    minWidth: 120,
    editable: false,
    renderCell: (params) => moment(params.row.endDate, "DD/MM/YYYY").format("DD/MM/YYYY"),
  },
  {
    field: "status",
    headerName: "სტატუსი",
    flex: 0.7,
    minWidth: 120,
    editable: false,
  },
  {
    field: "details",
    headerName: "დეტალები",
    flex: 0.7,
    minWidth: 120,
    editable: false,
  },
];

function BusinessTrip() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  React.useEffect(() => {
    getBusinessTripsAC();
  }, []);
  return (
    <Box>
      <Typography variant="h6">{t("bankCarDrivingLicense")}</Typography>
      <Box mt={2} mb={2}>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/request/addRequestForBusinessTrip");
          }}
        >
          {t("addRequestForBankCar")}
        </Button>
      </Box>
      <DataGrid
        className="MuiDataGrid-virtualScrollerContent--overflowed"
        rows={businessTrip}
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
    drivingLicenses: state.requests.businessTrip.BusinessTrips,
    loading: state.loading.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBusinessTripsAC() {
      dispatch(getBusinessTripsAC());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BusinessTrip);