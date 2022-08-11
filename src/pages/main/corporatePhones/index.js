import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Typography } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "Firstname",
    headerName: "Firstname",
    type: "string",
    flex: 1,
    minWidth: 250,
    editable: true,
  },
  {
    field: "Lastname",
    headerName: "Lastname",
    type: "number",
    flex: 1,
    minWidth: 130,
    editable: false,
  },
  {
    field: "Relation",
    headerName: "Relation",
    type: "string",
    flex: 1,
    minWidth: 500,
    editable: false,
  },
  {
    field: "TaxCode",
    headerName: "TaxCode",
    flex: 1,
    minWidth: 150,
    editable: false,
  },
];

export default function CorporatePhones(props) {
  const { corporatePhonesData } = props;
  return (
    <Card sx={{ padding: 2 }}>
      <Typography mb={2}>CORPORATE_PHONES</Typography>
      <DataGrid
        rows={corporatePhonesData}
        columns={columns}
        pageSize={15}
        autoHeight
        rowsPerPageOptions={[15]}
        disableSelectionOnClick
      />
    </Card>
  );
}
