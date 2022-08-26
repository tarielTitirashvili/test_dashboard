import { Button, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCorpNumbersAC } from "../../../../redux/requests/corpNumber/corpNumberActions";
import Loading from "../../../../components/loading"
import TableContainer from "../../../../styledComponents/TableContainer"
import FlexContainer from "../../../../styledComponents/FlexContainer"
import { t } from "i18next";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "date",
    headerName: "დაწყების თარიღი",
    type: "date",
    flex: 0.7,
    minWidth: 120,
    editable: false,
    renderCell: (params) => moment(params.row.date).format("DD/MM/YYYY"),
  },
  {
    field: "reqType",
    headerName: "მოთხოვნის ტიპი",
    flex: 1,
    minWidth: 340,
    editable: false,
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

function CorpNumber(props) {
  const { corporateNumber, getCorpNumbersAC, loading, role } = props;
  React.useEffect(() => {
    getCorpNumbersAC();
  }, []);
  const navigate = useNavigate();
  if(loading) return <Loading />
  return (
    <>
      <Typography variant="h6">{t("corpPhoneOngoingRequests")}</Typography>
      <FlexContainer margin={"2rem"}>
        <TableContainer>
          <Button
            sx={{ margin: 1 }}
            variant="contained"
            onClick={() => navigate("/request/CorpNumberRequest")}
          >
            {t("request")}
          </Button>
          <DataGrid
            className="MuiDataGrid-virtualScrollerContent--overflowed"
            rows={corporateNumber}
            columns={columns}
            pageSize={15}
            autoHeight
            rowsPerPageOptions={[15]}
            disableSelectionOnClick
          />
        </TableContainer>
      </FlexContainer>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    role: state.auth.role,
    corporateNumber: state.requests.corpNumber.corpNumbers,
    loading: state.loading.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCorpNumbersAC() {
      dispatch(getCorpNumbersAC());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CorpNumber);
