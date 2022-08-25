import { call, put, takeLeading } from "redux-saga/effects";
import { getBusinessTripsAPI, getBusinessTripsErrorAPI } from "../../../../API";
import changeTimeFormat from "../../../../assets/changeTimeFormat";
import { GET_BUSINESS_TRIPS_FROM_API_TO_STATE } from "../../../constants";
import { setBusinessTripsFromServerAC } from "../BusinessTripActions";

function* businessTrip() {
  
  const trips = yield call(getBusinessTripsErrorAPI);
  const formateLicenses = trips.data.map((trip) => {
    return {
      ...trip,
      startDate: changeTimeFormat(trip.startDate),
      endDate: changeTimeFormat(trip.endDate),
      date: changeTimeFormat(trip.date),
    };
  });
  yield put(setBusinessTripsFromServerAC(formateLicenses));
}

export function* getBusinessTripFromAPIWorker() {
  yield call(businessTrip);
}

export default function* businessTripWatcher() {
  // debugger
  yield takeLeading(
    GET_BUSINESS_TRIPS_FROM_API_TO_STATE,
    getBusinessTripFromAPIWorker
  );
}
