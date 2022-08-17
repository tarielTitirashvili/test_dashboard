import { call, put, takeLeading } from "redux-saga/effects";
import { getTrainingsAPI } from "../../../API";
import {
  GET_TRAININGS_FROM_API,
} from "../../constants";
import { setTrainingsAC } from "../trainingsActions";

export function* getTrainingsFromAPIWorker() {
  const data = yield call(getTrainingsAPI);
  yield put(setTrainingsAC(data.data));
}

export default function* trainingsWatcher() {
  yield takeLeading(GET_TRAININGS_FROM_API, getTrainingsFromAPIWorker);
}
