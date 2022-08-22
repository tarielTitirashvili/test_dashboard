import * as axios from "axios";

axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log('s')
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

let instance = axios.create({
  baseURL: "http://192.168.73.213:3000/",
})
 
// console.log(axios.Axios.prototype)
const as = axios.Axios
// console.log(as)


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

export const getDrivingLicensesAPI = async () => {
  return await instance.get("getCarDrivingLicense");
};
