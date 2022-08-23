import { combineReducers } from "redux";
import vocationCurrentRequestsReducer from "./vocation/vocationCurrentRequests/vocationCurrentRequestsReducer";
import vocationStatisticsReducer from "./vocation/vocationStatistics/vocationStatisticsReducer";
import drivingLicenseReducer from './drivingLicense/drivingLicenseReducer'
import businessTripReducer from "./businessTrip/businessTripReducer";

const requestsReducers = combineReducers({
  vocation: vocationCurrentRequestsReducer,
  vocationStatistics: vocationStatisticsReducer,
  drivingLicense: drivingLicenseReducer,
  businessTrip: businessTripReducer
});

export default requestsReducers;
