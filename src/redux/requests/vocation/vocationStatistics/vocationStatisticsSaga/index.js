import { call, put, takeLeading, spawn } from "redux-saga/effects";
import { getVocationAPI, getVocationStatisticsAPI } from "../../../../../API";
import changeTimeFormat from "../../../../../assets/changeTimeFormat";
import { GET_VOCATION_STATISTICS_FROM_API } from "../../../../constants";
import {
  setVocationsForVocationStatisticsPageAC,
  setVocationStatisticsAC,
} from "../vocationStatisticsActions";

const lazyPromise = () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const data = await getVocationAPI();
      resolve(data);
    }, 2000);
  });
};

const lazyGetVocationStatisticsAPI = () => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const data = await getVocationStatisticsAPI();
      resolve(data);
    }, 3000);
  });
};

function* vocations() {
  const vocations = yield call(lazyPromise);
  console.log(vocations);
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
  console.log(vocationStatistics);

  yield put(setVocationStatisticsAC(vocationStatistics.data));
}

export function* getVocationStatisticsFromAPIWorker() {
  yield spawn(vocations);
  yield spawn(vocationStatistics);
}

export default function* vocationStatisticsWatcher() {
  yield takeLeading(
    GET_VOCATION_STATISTICS_FROM_API,
    getVocationStatisticsFromAPIWorker
  );
}
