import { call, put, takeLeading } from "redux-saga/effects";
import { getDrivingLicensesAPI } from "../../../../API";
import changeTimeFormat from "../../../../assets/changeTimeFormat";
import { GET_BUSINESS_TRIPS_FROM_API_TO_STATE } from "../../../constants";
import { setDivingLicensesFromServerAC } from "../drivingLicenseActions";

function* drivingLicenses() {
  const licenses = yield call(getDrivingLicensesAPI);
  const formateLicenses = licenses.data.map((vocation) => {
    return {
      ...vocation,
      DateOfIssuance: changeTimeFormat(vocation.DateOfIssuance),
      date: changeTimeFormat(vocation.date),
    };
  });
    yield put(setDivingLicensesFromServerAC(formateLicenses));
}

export function* getDrivingLicenseFromAPIWorker() {
  yield call(drivingLicenses);
}

export default function* drivingLicensesWatcher() {
  yield takeLeading(
    GET_BUSINESS_TRIPS_FROM_API_TO_STATE,
    getDrivingLicenseFromAPIWorker
  );
}
