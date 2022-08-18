import { spawn } from "redux-saga/effects";
import mainWatcher from "../main/mainSaga";
import vocationCurrentRequestsWatcher from "../requests/vocation/vocationCurrentRequests/vocationCurrentRequestsSaga";
import vocationStatisticsWatcher from "../requests/vocation/vocationStatistics/vocationStatisticsSaga";
import passedTrainingsWatcher from "../trainings/passedTrainings/passedTrainingsSaga";
import testResultsWatcher from "../trainings/testResults/testResultsSaga";
import trainingsWatcher from "../trainings/trainings/trainingsSaga";

export default function* rooSaga() {
  yield spawn(mainWatcher);
  yield spawn(trainingsWatcher)
  yield spawn(passedTrainingsWatcher)
  yield spawn(testResultsWatcher)
  yield spawn(vocationCurrentRequestsWatcher)
  yield spawn(vocationStatisticsWatcher)
}
