import { all, call, put, takeLeading } from "redux-saga/effects";
import { getVocationAPI, getVocationStatisticsAPI } from "../../../../../API";
import changeTimeFormat from "../../../../../assets/changeTimeFormat";
import { GET_VOCATION_STATISTICS_FROM_API } from "../../../../constants";
import {
  setLoadingStatus,
  setVocationsForVocationStatisticsPageAC,
  setVocationStatisticsAC,
} from "../vocationStatisticsActions";

const lazyPromise = () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const data = await getVocationAPI();
      resolve(data);
    }, 4000);
  });
};

const lazyGetVocationStatisticsAPI = () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const data = await getVocationStatisticsAPI();
      resolve(data);
    }, 5000);
  });
};

function* vocations() {
  const vocations = yield call(lazyPromise);
  const formateValidations = vocations.data.map((vocation) => {
    return {
      ...vocation,
      start: changeTimeFormat(vocation.start),
      end: changeTimeFormat(vocation.end),
    };
  });
  yield put(setVocationsForVocationStatisticsPageAC(formateValidations));
}

function* vocationStatistics() {
  const vocationStatistics = yield call(lazyGetVocationStatisticsAPI);
  yield put(setVocationStatisticsAC(vocationStatistics.data));
}

export function* getVocationStatisticsFromAPIWorker() {
  yield put(setLoadingStatus(true));
  yield all([call(vocations), call(vocationStatistics)]);
  yield put(setLoadingStatus(false));
}

export default function* vocationStatisticsWatcher() {
  yield takeLeading(
    GET_VOCATION_STATISTICS_FROM_API,
    getVocationStatisticsFromAPIWorker
  );
}
