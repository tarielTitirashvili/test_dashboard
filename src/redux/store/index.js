import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import passedTrainingsReducer from "../reducers/passedTrainingsReducers";
import personReducer from "../reducers/personReducer";
import testsResultsReducer from "../reducers/testResultsReducers";
import trainingsReducer from "../reducers/trainingsReducer";
import authReducer from '../reducers/authReducer'

let reducers = combineReducers({
  trainings: trainingsReducer,
  testsResults: testsResultsReducer,
  passedTrainings: passedTrainingsReducer,
  person: personReducer,
  auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
export default store;
