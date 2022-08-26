import { call, put, takeLeading } from "redux-saga/effects";
import { getBusinessTripsErrorAPI } from "../../../../API";
import changeTimeFormat from "../../../../assets/changeTimeFormat";
import { GET_MIDTERM_EVALUATIONS_FROM_API_TO_STATE } from "../../../constants";
import { setMidtermEvaluationsFromServerAC } from "../midtermEvaluationActions";

function* midtermEvaluations() {
  const licenses = yield call(getBusinessTripsErrorAPI);
  const formateLicenses = licenses.data.map((vocation) => {
    return {
      ...vocation,
      DateOfIssuance: changeTimeFormat(vocation.DateOfIssuance),
      date: changeTimeFormat(vocation.date),
    };
  });
    yield put(setMidtermEvaluationsFromServerAC(formateLicenses));
}

export function* getMidtermEvaluationsFromAPIWorker() {
  yield call(midtermEvaluations);
}

export default function* midtermEvaluationsWatcher() {
  yield takeLeading(
    GET_MIDTERM_EVALUATIONS_FROM_API_TO_STATE,
    getMidtermEvaluationsFromAPIWorker
  );
}
