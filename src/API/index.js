import * as axios from "axios";

let instance = axios.create({
  baseURL: "http://192.168.73.213:3000/",
});

export const getPersonDataAPI = async () => {
  return await instance.get("/person");
};
export const getTrainingAPI = async () => {
  return await instance.get("/gettraining");
};

export const getTrailersAPI = async (id) => {
  return await instance.get("/getPassedTrainings");
};

export const getTestResultsAPI = async (id, page) => {
  return await instance.get("getTestResults");
};
