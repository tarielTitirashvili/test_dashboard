import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import passedTrainingsReducer from "../trainings/passedTrainings/passedTrainingsReducers";
import mainReducer from "../main/mainReducer";
import testsResultsReducer from "../trainings/testResults/testResultsReducers";
import trainingsReducer from "../trainings/trainings/trainingsReducer";
import authReducer from "../auth/authReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../rootSaga/rootSaga";
import requestsReducers from "../requests";

let reducers = combineReducers({
  trainings: trainingsReducer,
  testsResults: testsResultsReducer,
  passedTrainings: passedTrainingsReducer,
  main: mainReducer,
  auth: authReducer,
  requests: requestsReducers,
});

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);
export default store;
