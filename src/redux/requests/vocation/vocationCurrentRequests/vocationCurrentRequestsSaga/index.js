import { call, put, takeLeading } from "redux-saga/effects";
import { getVocationCurrentRequestsAPI } from "../../../../../API";
import { GET_VOCATION_REQUESTS_FROM_API_TO_STATE } from "../../../../constants";
import { setCurrentRequestsAC } from "../vocationCurrentRequestsActions";

export function* getVocationRequestsFromAPIWorker() {
  const data = yield call(getVocationCurrentRequestsAPI);
  yield put(setCurrentRequestsAC(data.data));
}

export default function* vocationCurrentRequestsWatcher() {
  yield takeLeading(GET_VOCATION_REQUESTS_FROM_API_TO_STATE, getVocationRequestsFromAPIWorker);
}
