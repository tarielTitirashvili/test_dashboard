import React from "react";
import moment from "moment";
import { DataGrid } from "@mui/x-data-grid";
import AddTableRow from "../../../../components/addTableRow";

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
    type: "date",
    flex: 1,
    minWidth: 150,
    editable: false,
    renderCell: (params) => moment(params.row.changeDate).format("DD/MM/YYYY"),
  },
];

export default function CorporateNumberOfRelatives(props) {
  const { relativesData, role, setCorporateNumberOfRelativesAC } = props;
  const [row, setRow] = React.useState({
    fullName: "",
    phoneNumber: "",
    serviceTeam: "",
    changeDate: `${moment(Date.now()).format("YYYY-MM-DDThh:mm:ss")}`,
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
    setCorporateNumberOfRelativesAC({
      ...row,
      id: relativesData[relativesData.length - 1].id + 1,
    });
  };

  return (
    <>
      <AddTableRow
        row={row}
        columns={columns}
        role={role}
        setRow={onRowChange}
        onSave={onSave}
      />
      <DataGrid
        rows={relativesData}
        columns={columns}
        pageSize={15}
        autoHeight
        rowsPerPageOptions={[15]}
        disableSelectionOnClick
      />
    </>
  );
}
