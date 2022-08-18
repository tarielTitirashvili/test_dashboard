import moment from "moment";

export default function changeTimeFormat(date) {
  return moment(date, "DD/MM/YYYY").format("YYYY-MM-DDThh:mm:ss");
}
