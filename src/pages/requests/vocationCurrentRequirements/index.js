import React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { getVocationCurrentRequirementsAPI } from "../../../API";
import { useTranslation } from "react-i18next";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "date",
    headerName: "თარიღი",
    flex: 0.4,
    minWidth: 70,
    type: "date",
    editable: false,
    renderCell: (params) =>
      moment(params.row.date, "DD/MM/YYYY").format("DD/MM/YYYY"),
  },
  {
    field: "reqType",
    headerName: "მოთხოვნის ტიპი",
    minWidth: 150,
    flex: 1,
    editable: false,
  },
  {
    field: "startDate",
    headerName: "დაწყების თარიღი",
    type: "date",
    flex: 0.4,
    minWidth: 120,
    editable: false,
    renderCell: (params) =>
      moment(params.row.date, "DD/MM/YYYY").format("DD/MM/YYYY"),
  },
  {
    field: "endDate",
    headerName: "დასრულების თარიღი",
    flex: 0.4,
    minWidth: 140,
    type: "date",
    editable: false,
    renderCell: (params) =>
      moment(params.row.date, "DD/MM/YYYY").format("DD/MM/YYYY"),
  },
  {
    field: "status",
    headerName: "სტატუსი",
    flex: 0.6,
    minWidth: 160,
    type: "string",
    editable: false,
  },
  {
    field: "details",
    headerName: "რედაქტირება / დეტალები",
    flex: 1,
    minWidth: 160,
    type: "string",
    editable: true,
  },
];

function VocationCurrentRequirements(props) {
  const { role } = props;
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const serverDate = await getVocationCurrentRequirementsAPI();
    setData(serverDate.data);
  };
  let navigate = useNavigate();
  const { t } = useTranslation();

  const onClick = (path) => {
    navigate(path, { replace: true });
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", m: 3 }}>
        <Button
          onClick={() => {
            onClick("/request/vocation");
          }}
          variant="contained"
        >
          {t("AddRequest")}
        </Button>
        <Button
          onClick={() => {
            onClick("/request/vocationStatistics");
          }}
          variant="contained"
        >
          {t("vocationStatistics")}
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box maxWidth={"1600px"} width={"100%"}>
          <DataGrid
            className="MuiDataGrid-virtualScrollerContent--overflowed"
            rows={data}
            columns={columns}
            pageSize={15}
            autoHeight
            rowsPerPageOptions={[15]}
            disableSelectionOnClick
          />
        </Box>
      </Box>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
  };
};

export default connect(mapStateToProps)(VocationCurrentRequirements);
