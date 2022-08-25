import { call, put, takeLeading } from "redux-saga/effects";
import { getCorpNumberErrorAPI } from "../../../../API";
import changeTimeFormat from "../../../../assets/changeTimeFormat";
import { GET_CORP_NUMBERS_FROM_API_TO_STATE } from "../../../constants";
import { setCorpNumbersFromServerAC } from "../corpNumberActions";

function* CorpNumbers() {
  const licenses = yield call(getCorpNumberErrorAPI);
  const formateLicenses = licenses.data.map((corpNumber) => {
    return {
      ...corpNumber,
      date: changeTimeFormat(corpNumber.date),
    };
  });

  yield put(setCorpNumbersFromServerAC(formateLicenses));
}

export function* getCorpNumbersFromAPIWorker() {
  yield call(CorpNumbers);
}

export default function* corpPhonesWatcher() {
  yield takeLeading(
    GET_CORP_NUMBERS_FROM_API_TO_STATE,
    getCorpNumbersFromAPIWorker
  );
}
