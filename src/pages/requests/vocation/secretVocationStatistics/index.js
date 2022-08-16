import React from "react";
import { useTranslation } from "react-i18next";
import { getVocationAPI, getVocationStatisticsAPI } from "../../../../API";
import { DataGrid } from "@mui/x-data-grid";
import { columnsStatistics, columnsVocations } from "./columns";
import { useNavigate } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Loading from "../../../../components/loading";

export default function SecretVocationStatistics() {
  const [loading, setLoading] = React.useState(true);
  const [vocation, setVocation] = React.useState([]);
  const [vocationStatistics, setVocationStatistics] = React.useState([]);
  const { t } = useTranslation();

  const lazyPromise = () => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const data = await getVocationAPI();
        resolve(data);
      }, 100);
    });
  };

  React.useEffect(() => {
    Promise.all([lazyPromise(), getVocationStatisticsAPI()]).then((values) => {
      setVocation(values[0].data);
      setVocationStatistics(values[1].data);
      setLoading(false);
      console.log(values)
    });
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
          onClick={() => navigate("/request/vocation", { replace: true })}
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
            rows={vocation}
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