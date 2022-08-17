import { spawn } from "redux-saga/effects";
import mainWatcher from "../main/mainSaga";
import passedTrainingsWatcher from "../passedTrainings/passedTrainingsSaga";
import testResultsWatcher from "../testResults/testResultsSaga";
import trainingsWatcher from "../trainings/trainingsSaga";

export default function* rooSaga() {
  yield spawn(mainWatcher);
  yield spawn(trainingsWatcher)
  yield spawn(passedTrainingsWatcher)
  yield spawn(testResultsWatcher)
}
