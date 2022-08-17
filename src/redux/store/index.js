import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import passedTrainingsReducer from "../passedTrainings/passedTrainingsReducers";
import mainReducer from "../main/mainReducer";
import testsResultsReducer from "../testResults/testResultsReducers";
import trainingsReducer from "../trainings/trainingsReducer";
import authReducer from "../auth/authReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from '../rootSaga/rootSaga'

let reducers = combineReducers({
  trainings: trainingsReducer,
  testsResults: testsResultsReducer,
  passedTrainings: passedTrainingsReducer,
  main: mainReducer,
  auth: authReducer,
});

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga)
export default store;

