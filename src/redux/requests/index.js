import { combineReducers } from "redux";
import vocationCurrentRequestsReducer from "./vocation/vocationCurrentRequests/vocationCurrentRequestsReducer";
import vocationStatisticsReducer from "./vocation/vocationStatistics/vocationStatisticsReducer";

const requestsReducers = combineReducers({
  vocation: vocationCurrentRequestsReducer,
  vocationStatistics: vocationStatisticsReducer,
});

export default requestsReducers;
