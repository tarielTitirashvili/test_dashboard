import { all, call, spawn } from "redux-saga/effects";
import mainWatcher from "../main/mainSaga";
import businessTripWatcher from "../requests/businessTrip/BusinessTripSagas";
import corpPhonesWatcher from "../requests/corpNumber/corpNumberSagas";
import drivingLicensesWatcher from "../requests/drivingLicense/drivingLicenseSaga";
import vocationCurrentRequestsWatcher from "../requests/vocation/vocationCurrentRequests/vocationCurrentRequestsSaga";
import vocationStatisticsWatcher from "../requests/vocation/vocationStatistics/vocationStatisticsSaga";
import passedTrainingsWatcher from "../trainings/passedTrainings/passedTrainingsSaga";
import testResultsWatcher from "../trainings/testResults/testResultsSaga";
import trainingsWatcher from "../trainings/trainings/trainingsSaga";

export default function* rootSaga() {
  const sagas = [
    mainWatcher,
    trainingsWatcher,
    passedTrainingsWatcher,
    testResultsWatcher,
    vocationCurrentRequestsWatcher,
    vocationStatisticsWatcher,
    drivingLicensesWatcher,
    businessTripWatcher,
    corpPhonesWatcher,
  ];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      })
    )
  );
}
