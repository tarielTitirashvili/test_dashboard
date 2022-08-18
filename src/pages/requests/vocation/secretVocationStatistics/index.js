import React from "react";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@mui/x-data-grid";
import { columnsStatistics, columnsVocations } from "./columns";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Loading from "../../../../components/loading";
import { connect } from "react-redux";
import { getVocationStatisticsAC } from "../../../../redux/requests/vocation/vocationStatistics/vocationStatisticsActions";

function SecretVocationStatistics(props) {
  const { vocations, vocationStatistics, getVocationStatisticsAC } = props;
  const [loading, setLoading] = React.useState(false);
  const { t } = useTranslation();

  React.useEffect(() => {
    getVocationStatisticsAC();
  }, []);
  let navigate = useNavigate();

  if (loading) return <Loading width={"100%"} height={"calc(100vh - 112px)"} />;
  return (
    <Box>
      <Box ml={17}>
        <Typography m={2} variant="h6">
          {t("vocationStatistics")}
        </Typography>
        <Button
          sx={{ m: 2 }}
          variant="contained"
          onClick={() => navigate("/request/vocation")}
        >
          {t("request")}
        </Button>
      </Box>
      <Box m={2} sx={{ display: "flex", justifyContent: "center" }}>
        <Box maxWidth={"1600px"} width={"100%"}>
          <DataGrid
            className="MuiDataGrid-virtualScrollerContent--overflowed"
            rows={vocationStatistics}
            columns={columnsStatistics}
            pageSize={15}
            autoHeight
            rowsPerPageOptions={[15]}
            disableSelectionOnClick
          />
        </Box>
      </Box>
      <Box ml={17}>
        <Typography m={2} variant="h6">
          {t("vocation")}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box maxWidth={"1600px"} width={"100%"}>
          <DataGrid
            className="MuiDataGrid-virtualScrollerContent--overflowed"
            rows={vocations}
            columns={columnsVocations}
            pageSize={15}
            autoHeight
            rowsPerPageOptions={[15]}
            disableSelectionOnClick
          />
        </Box>
      </Box>
    </Box>
  );
}

const mapStateToProps = (state) => {
  return {
    vocations: state.requests.vocationStatistics.vocations,
    vocationStatistics: state.requests.vocationStatistics.vocationStatistics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVocationStatisticsAC() {
      dispatch(getVocationStatisticsAC());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecretVocationStatistics);
