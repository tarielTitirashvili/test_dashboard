import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import passedTrainingsReducer from "../trainings/passedTrainings/passedTrainingsReducers";
import mainReducer from "../main/mainReducer";
import testsResultsReducer from "../trainings/testResults/testResultsReducers";
import trainingsReducer from "../trainings/trainings/trainingsReducer";
import authReducer from "../auth/authReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../rootSaga/rootSaga";
import requestsReducers from "../requests";
import loadingStatus from "../loading/loadingReducer";
import { setGlobalLoadingStatusAC } from "../loading/loadingActions";

const effectMiddleware = (next) => (effect) => {
  if (effect.payload.fn) {
    if (!effect.payload.fn.prototype) {
      console.log(effect.payload.fn.prototype);
      console.log(effect);
      store.dispatch(setGlobalLoadingStatusAC(true));
    }
  } else if (effect.payload.action) {
    if (Object.keys(effect.payload.action).length > 1) {
      console.log(Object.keys(effect.payload.action).length > 1);
      console.log("false", effect.payload);
      store.dispatch(setGlobalLoadingStatusAC(false));
    }
  }

  return next(effect);
};

let reducers = combineReducers({
  trainings: trainingsReducer,
  testsResults: testsResultsReducer,
  passedTrainings: passedTrainingsReducer,
  main: mainReducer,
  auth: authReducer,
  requests: requestsReducers,
  loading: loadingStatus,
});

const sagaMiddleWare = createSagaMiddleware({
  effectMiddlewares: [effectMiddleware],
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);
export default store;
