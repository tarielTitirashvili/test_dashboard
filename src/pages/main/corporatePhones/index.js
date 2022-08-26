import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Typography } from "@mui/material";
import AddTableRow from "../../../components/addTableRow";
import { t } from "i18next";

const columns = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "Firstname",
    headerName: "Firstname",
    type: "string",
    flex: 1,
    minWidth: 100,
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
    minWidth: 450,
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
  const { corporatePhonesData, role, setCorporatePhonesAC } = props;
  const [row, setRow] = React.useState({
    Firstname: "",
    Lastname: "",
    Relation: "",
    TaxCode: "",
  });
  const onRowChange = (e) => {
    if (e.target) {
      const { name, value } = e.target;
      setRow({ ...row, [`${name}`]: value });
    } else {
      const { name, value } = e;
      setRow({
        ...row,
        [`${name}`]: value,
      });
    }
  };
  const onSave=()=>{
    setCorporatePhonesAC({...row, id: corporatePhonesData[corporatePhonesData.length-1].id+1})
  }
  return (
    <Card sx={{ padding: 2 }}>
      <Typography mb={2}>{t("CORPORATE_PHONES")}</Typography>
      <AddTableRow
        row={row}
        columns={columns}
        role={role}
        setRow={onRowChange}
        onSave = {onSave}
      />
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
