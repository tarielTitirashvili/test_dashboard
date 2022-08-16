import moment from "moment";

export const columnsStatistics = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "year",
    headerName: "წელი",
    flex: 0.5,
    minWidth: 70,
    editable: false,
  },
  {
    field: "all",
    headerName: "სრული",
    type: "number",
    minWidth: 150,
    flex: 0.5,
    editable: false,
  },
  {
    field: "used",
    headerName: "გამოყენებული",
    type: "number",
    flex: 0.5,
    minWidth: 120,
    editable: false,
  },
  {
    field: "remaining",
    headerName: "დარჩენილი",
    flex: 0.5,
    minWidth: 140,
    type: "number",
    editable: false,
  },
  {
    field: "AdditionalHoursBilled",
    headerName: "დარიცხული დამატებითი საათები",
    flex: 0.8,

    minWidth: 160,
    type: "date",
    editable: false,
  },
  {
    field: "AdditionalHoursUsed",
    headerName: "გამოყენებული დამატებითი საათები",
    flex: 0.8,
    minWidth: 160,
    type: "string",
    editable: true,
  },  {
    field: "AdditionalHoursRemaining",
    headerName: "დარჩენილი დამატებითი საათები",
    flex: 0.8,

    minWidth: 160,
    type: "date",
    editable: false,
  },
];

export const columnsVocations = [
  { field: "id", headerName: "ID", width: 90, editable: false, hide: true },
  {
    field: "vocationType",
    headerName: "შვებულების ტიპი",
    flex: 0.7,
    minWidth: 70,
    type: "string",
    editable: false,
  },
  {
    field: "start",
    headerName: "დაწყება",
    type: "date",
    minWidth: 150,
    flex: 0.5,
    editable: false,
    renderCell: (params) =>
    moment(params.row.start, "DD/MM/YYYY").format("DD/MM/YYYY"),
  },
  {
    field: "end",
    headerName: "დამთავრება",
    type: "date",
    flex: 0.4,
    minWidth: 120,
    editable: false,
    renderCell: (params) =>
      moment(params.row.end, "DD/MM/YYYY").format("DD/MM/YYYY"),
  },
  {
    field: "usedDays",
    headerName: "გამოყენებული დღეები",
    flex: 0.4,
    minWidth: 140,
    type: "date",
    editable: false,
  },
];
