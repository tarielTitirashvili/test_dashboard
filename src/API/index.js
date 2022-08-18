import * as axios from "axios";

let instance = axios.create({
  baseURL: "http://192.168.73.213:3000/",
});

export const getPersonDataAPI = async () => {
  return await instance.get("/person");
};
export const getTrainingsAPI = async () => {
  return await instance.get("/gettraining");
};

export const getPassedTrainingsAPI = async () => {
  return await instance.get("/getPassedTrainings");
};

export const getTestResultsAPI = async () => {
  return await instance.get("getTestResults");
};
export const getVocationAPI = async () => {
  return await instance.get("getVocation");
};
export const getVocationStatisticsAPI = async () => {
  return await instance.get("getVocationStatistics");
};
export const getVocationCurrentRequestsAPI = async () => {
  return await instance.get("getLeaveCurrentRequirements");
};