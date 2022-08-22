import { call, put, takeLeading } from "redux-saga/effects";
import { getDrivingLicensesAPI } from "../../../../API";
import changeTimeFormat from "../../../../assets/changeTimeFormat";
import { GET_DRIVING_LICENSE_FROM_API_TO_STATE } from "../../../constants";
import { setLoadingStatusAC } from "../../vocation/vocationStatistics/vocationStatisticsActions";
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
    console.log(formateLicenses);
    yield put(setDivingLicensesFromServerAC(formateLicenses));
}

export function* getDrivingLicenseFromAPIWorker() {
  yield put(setLoadingStatusAC(true));
  yield call(drivingLicenses);
  yield put(setLoadingStatusAC(false));
}

export default function* drivingLicensesWatcher() {
  yield takeLeading(
    GET_DRIVING_LICENSE_FROM_API_TO_STATE,
    getDrivingLicenseFromAPIWorker
  );
}
