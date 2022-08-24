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
import errorReducer from "../error/errorReducer";
import { setErrorAC } from "../error/errorActions";

let reducers = combineReducers({
  trainings: trainingsReducer,
  testsResults: testsResultsReducer,
  passedTrainings: passedTrainingsReducer,
  main: mainReducer,
  auth: authReducer,
  requests: requestsReducers,
  loading: loadingStatus,
  error: errorReducer
});

var queue = [];

const monitor = (effect) => {
  if (effect.effect.payload.fn) {
    if (!effect.effect.payload.fn.prototype) {
      queue.push(effect.effectId);
      if (queue.length > 0) {
        store.dispatch(setGlobalLoadingStatusAC(true));
      }
    }
  }
};

const resolved = (effectId, eff) => {
  if (queue.includes(effectId)) {
    queue = queue.filter((id) => id !== effectId);
    if (queue.length === 0) {
      store.dispatch(setGlobalLoadingStatusAC(false));
    }
  }
};

const rejected = (effectId, effect) => {
  // console.log("rejected", effectId, effect);
  if (queue.includes(effectId)) {
    queue = queue.filter((id) => id !== effectId);
    store.dispatch(setErrorAC(effect.response.data.message))
    // console.log(queue);
    // console.log(effect.response.data.message);
    if (queue.length === 0) {
      store.dispatch(setGlobalLoadingStatusAC(false));
    }
  }
};

const sagaMiddleWare = createSagaMiddleware({
  sagaMonitor: {
    effectTriggered: monitor,
    effectResolved: resolved,
    effectRejected: rejected,
  },
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);

sagaMiddleWare.run(rootSaga);
export default store;
