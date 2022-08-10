import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import passedTrainingsReducer from "../reducers/passedTrainingsReducers";
import mainReducer from "../reducers/mainReducer";
import testsResultsReducer from "../reducers/testResultsReducers";
import trainingsReducer from "../reducers/trainingsReducer";
import authReducer from "../reducers/authReducer";

let reducers = combineReducers({
  trainings: trainingsReducer,
  testsResults: testsResultsReducer,
  passedTrainings: passedTrainingsReducer,
  main: mainReducer,
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
