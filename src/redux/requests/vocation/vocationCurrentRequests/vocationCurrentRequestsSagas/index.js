import { call, put, takeLeading } from "redux-saga/effects";
import { getVocationCurrentRequestsAPI } from "../../../../../API";
import changeTimeFormat from "../../../../../assets/changeTimeFormat";
import { GET_VOCATION_REQUESTS_FROM_API_TO_STATE } from "../../../../constants";
import { setCurrentRequestsAC } from "../vocationCurrentRequestsActions";

export function* getVocationRequestsFromAPIWorker() {
  const data = yield call(getVocationCurrentRequestsAPI);
  const formateData = data.data.map(training=>{
    return {...training, date: changeTimeFormat(training.date), endDate: changeTimeFormat(training.endDate), startDate: changeTimeFormat(training.startDate) }
  })
  yield put(setCurrentRequestsAC(formateData));
}

export default function* vocationCurrentRequestsWatcher() {
  yield takeLeading(GET_VOCATION_REQUESTS_FROM_API_TO_STATE, getVocationRequestsFromAPIWorker);
}
