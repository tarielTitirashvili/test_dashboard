import { combineReducers } from "redux";
import vocationCurrentRequestsReducer from "./vocation/vocationCurrentRequests/vocationCurrentRequestsReducer";

const requestsReducers = combineReducers({
  vocation: vocationCurrentRequestsReducer,
});

export default requestsReducers;
