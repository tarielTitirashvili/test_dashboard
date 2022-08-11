import React from "react";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "fullName",
    headerName: "სახელი, გვარი",
    type: "string",
    flex: 1,
    minWidth: 250,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "ტელეფონი",
    type: "number",
    flex: 1,
    minWidth: 150,
    editable: false,
  },
  {
    field: "serviceTeam",
    headerName: "მომსახურების ჯგუფი",
    type: "string",
    flex: 1,
    minWidth: 500,
    editable: false,
  },
  {
    field: "changeDate",
    headerName: "ცვლილების თარიღი",
    flex: 1,
    minWidth: 150,
    editable: false,
    renderCell: (params) => moment(params.row.changeDate).format("DD/MM/YYYY"),
  },
];

export default function CorporateNumberOfRelatives(props) {
  const { relativesData } = props;
  return (
    <DataGrid
      rows={relativesData}
      columns={columns}
      pageSize={15}
      autoHeight
      rowsPerPageOptions={[15]}
      disableSelectionOnClick
    />
  );
}