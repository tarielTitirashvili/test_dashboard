import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { getVocationStatisticsAC } from "../../../redux/requests/drivingLicense/drivingLicenseActions";
import Loading from "../../../components/loading";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { t } = useTranslation();
  React.useEffect(() => {
    getVocationStatisticsAC();
  }, []);

  if (loading) return <Loading width={"100%"} height={"calc(100vh - 112px)"} />;
  return (
    <Box>
      <Typography variant="h6">{t("bankCarDrivingLicense")}</Typography>
      <Box mt={2} mb={2}>
        <Button
          variant="contained"
          onClick={() => {
            navigate("/request/addRequestForCompanyCar");
          }}
        >
          {t("addRequestForBankCar")}
        </Button>
      </Box>
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
    loading: state.loading.loading,
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
