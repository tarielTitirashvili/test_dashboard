import { call, put, takeLeading } from "redux-saga/effects";
import { getPassedTrainingsAPI } from "../../../../API";
import { GET_PASSED_TRAININGS_FROM_API } from "../../../constants";
import { setPassedTrainingsAC } from "../passedTrainingsActions";

export function* getTrainingsFromAPIWorker() {
  const data = yield call(getPassedTrainingsAPI);
  yield put(setPassedTrainingsAC(data.data));
}

export default function* passedTrainingsWatcher() {
  yield takeLeading(GET_PASSED_TRAININGS_FROM_API, getTrainingsFromAPIWorker);
}
