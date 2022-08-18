import { call, put, takeLeading } from "redux-saga/effects";
import { getTestResultsAPI } from "../../../../API";
import { GET_TESTS_FROM_API } from "../../../constants";
import { setTestResultsAC } from "../testResultsActions";

export function* getTestResultsFromAPIWorker() {
  const data = yield call(getTestResultsAPI);
  yield put(setTestResultsAC(data.data));
}

export default function* testResultsWatcher() {
  yield takeLeading(GET_TESTS_FROM_API, getTestResultsFromAPIWorker);
}
