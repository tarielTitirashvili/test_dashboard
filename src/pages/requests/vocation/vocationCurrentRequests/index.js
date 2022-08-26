import React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCurrentRequestsAC,
  setCurrentRequestsAC,
  setNewRequestOnSaveAC,
} from "../../../../redux/requests/vocation/vocationCurrentRequests/vocationCurrentRequestsActions";
import AddTableRow from "../../../../components/addTableRow";
import VOCATION_TYPES from "../../../../DB/vocationTypes";
import Loading from "../../../../components/loading";
import { t } from "i18next";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "date",
    headerName: "თარიღი",
    flex: 0.4,
    minWidth: 70,
    type: "date",
    editable: false,
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "reqType",
    headerName: "მოთხოვნის ტიპი",
    minWidth: 150,
    name: "options",
    options: VOCATION_TYPES,
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
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "endDate",
    headerName: "დასრულების თარიღი",
    flex: 0.4,
    minWidth: 140,
    type: "date",
    editable: false,
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
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
  const {
    role,
    getCurrentRequestsAC,
    vocationCurrentRequests,
    setNewRequestOnSaveAC,
    setCurrentRequestsAC,
    loading,
  } = props;
  
  let navigate = useNavigate();
  const [row, setRow] = React.useState({
    date: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
    reqType: VOCATION_TYPES[0].value,
    startDate: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
    endDate: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
    status: "",
    details: "",
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
    setNewRequestOnSaveAC({
      ...row,
      id: vocationCurrentRequests[vocationCurrentRequests.length - 1].id + 1,
    });
  };

  const onClick = (path) => {
    navigate(path);
  };

  React.useEffect(() => {
    getCurrentRequestsAC();
    return () => setCurrentRequestsAC([]);
  }, []);
  
  if (loading) return <Loading />;
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
      <AddTableRow
        role={role}
        columns={columns}
        row={row}
        setRow={onRowChange}
        onSave={onSave}
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box maxWidth={"1600px"} width={"100%"}>
          <DataGrid
            className="MuiDataGrid-virtualScrollerContent--overflowed"
            rows={vocationCurrentRequests}
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
    vocationCurrentRequests: state.requests.vocation.vocationCurrentRequests,
    loading: state.loading.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentRequestsAC() {
      dispatch(getCurrentRequestsAC());
    },
    setNewRequestOnSaveAC(newRequest) {
      dispatch(setNewRequestOnSaveAC(newRequest));
    },
    setCurrentRequestsAC(vocationCurrentRequests) {
      dispatch(setCurrentRequestsAC(vocationCurrentRequests));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VocationCurrentRequirements);
