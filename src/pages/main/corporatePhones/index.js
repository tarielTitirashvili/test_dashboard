import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Card, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import moment from "moment";
import AddTableRow from "../../../components/addTableRow";

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
  const { corporatePhonesData, role } = props;
  const { t } = useTranslation();
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
  return (
    <Card sx={{ padding: 2 }}>
      <Typography mb={2}>{t("CORPORATE_PHONES")}</Typography>
      <AddTableRow
        row={row}
        columns={columns}
        role={role}
        setRow={onRowChange}
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
