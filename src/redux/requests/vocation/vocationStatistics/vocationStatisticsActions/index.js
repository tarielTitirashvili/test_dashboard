import {
  GET_VOCATION_STATISTICS_FROM_API,
  SET_LOADING_STATUS_FOR_VOCATION_STATISTICS,
  SET_VOCATIONS_FROM_API_TO_STATE_VOCATION_STATISTICS_PAGE,
  SET_VOCATION_STATISTICS_DATE_ON_SAVE,
  SET_VOCATION_STATISTICS_FROM_API_TO_STATE,
} from "../../../../constants";

export const setVocationStatisticsAC = (vocationStatistics) => ({
  type: SET_VOCATION_STATISTICS_FROM_API_TO_STATE,
  vocationStatistics,
});

export const setVocationsForVocationStatisticsPageAC = (vocations) => ({
  type: SET_VOCATIONS_FROM_API_TO_STATE_VOCATION_STATISTICS_PAGE,
  vocations,
});

export const setNewVocationStatisticsOnSaveAC = (newVocation) => ({
  type: SET_VOCATION_STATISTICS_DATE_ON_SAVE,
  newVocation,
});

export const getVocationStatisticsAC = () => ({
  type: GET_VOCATION_STATISTICS_FROM_API,
});

export const setLoadingStatusAC = (status) => ({
  type: SET_LOADING_STATUS_FOR_VOCATION_STATISTICS,
  status
});
