import { call, put, takeLeading } from "redux-saga/effects";
import { getPersonDataAPI } from "../../../API";
import {
  GET_DATA_FROM_API,
  SET_CORPORATE_PHONES_DATA,
  SET_USER_DATA_TO_INITIAL_DATA,
} from "../../constants";
import {
  setPersonInfoAC,
  setPersonDataToInitialAC,
  setCorporatePhonesAC,
} from "../mainActions";

export function* getPersonFromAPIWorker() {
  const person = yield call(getPersonDataAPI);
  yield put(setPersonInfoAC(person.data[0]));
}

export function* setPersonDataToInitialWorker() {
  yield put(setPersonDataToInitialAC());
}

export function* setCorporatePhoneWorker(newNumber) {
  yield put(setCorporatePhonesAC());
}

export default function* mainWatcher() {
  console.log('231')
  yield takeLeading(GET_DATA_FROM_API, getPersonFromAPIWorker);
  yield takeLeading(
    SET_USER_DATA_TO_INITIAL_DATA,
    setPersonDataToInitialWorker
  );
  yield takeLeading(SET_CORPORATE_PHONES_DATA, setCorporatePhoneWorker);
}
