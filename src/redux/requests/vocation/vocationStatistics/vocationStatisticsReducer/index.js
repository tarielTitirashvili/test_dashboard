import {
  SET_LOADING_STATUS_FOR_VOCATION_STATISTICS,
  SET_NEW_VOCATION_REQUEST_ON_SAVE,
  SET_VOCATIONS_FROM_API_TO_STATE_VOCATION_STATISTICS_PAGE,
  SET_VOCATION_STATISTICS_FROM_API_TO_STATE,
} from "../../../../constants";

const initState = {
  vocationStatistics: [],
  vocations: [],
  loading: false,
};

export default function vocationStatisticsReducer(state = initState, action) {
  switch (action.type) {
    case SET_VOCATION_STATISTICS_FROM_API_TO_STATE:
      return {
        ...state,
        vocationStatistics: action.vocationStatistics,
      };
    case SET_VOCATIONS_FROM_API_TO_STATE_VOCATION_STATISTICS_PAGE:
      return {
        ...state,
        vocations: action.vocations,
      };
    case SET_NEW_VOCATION_REQUEST_ON_SAVE:
      return {
        ...state,
        vocationStatistics: [...state.vocationStatistics, action.newVocation],
      };
    case SET_LOADING_STATUS_FOR_VOCATION_STATISTICS:
      return {
        ...state,
        loading: action.status,
      };
    default:
      return state;
  }
}
