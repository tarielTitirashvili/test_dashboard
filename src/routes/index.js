import Insurance from "../pages/additional/insurance";
import IPC from "../pages/additional/IPC";
import PCB from "../pages/additional/PCB";
import Vocation from "../pages/additional/vocation";
import Error404 from "../pages/Error404";
import HRDocs from "../pages/HRDocs";
import Main from "../pages/main";
import MidtermEvaluation from "../pages/midtermEvaluation";
import Requests from "../pages/requests";
import PassedTrainings from "../pages/trainings/passedTrainings";
import TestResults from "../pages/trainings/testResults";
import Trainings from "../pages/trainings/trainings";
import SecretVocation from "../pages/requests/vocation/secretVocation";
import SecretVocationStatistics from "../pages/requests/vocation/secretVocationStatistics";
import VocationCurrentRequests from "../pages/requests/vocation/vocationCurrentRequests";

export const routes = [
  {
    path: "/",
    title: "main",
    component: <Main />,
  },
  {
    path: "/additional",
    title: "additional",
    children: [
      {
        path: "/insurance",
        title: "insurance",
        component: <Insurance />,
      },
      {
        path: "/vocation",
        title: "vocation",
        component: <Vocation />,
      },
      {
        path: "/IPC",
        title: "IPC",
        component: <IPC />,
      },
      {
        path: "/survey",
        title: "survey",
        component: <Vocation />,
      },
      {
        path: "/PCB",
        title: "PCB",
        component: <PCB />,
      },
    ],
  },
  {
    path: "/trainings",
    title: "trainings",
    children: [
      {
        path: "/trainings",
        title: "currentTrainings",
        component: <Trainings />,
      },
      {
        path: "/passedTrainings",
        title: "passedTrainings",
        component: <PassedTrainings />,
      },
      {
        path: "/testResults",
        title: "testResults",
        component: <TestResults />,
      },
    ],
  },
  {
    path: "/request",
    title: "request",
    component: <Requests />,
    secretChildren: [
      {
        path: "/vocation",
        title: "vocation",
        component: <SecretVocation />,
      },
      {
        path: "/vocationStatistics",
        title: "vocationStatistics",
        component: <SecretVocationStatistics />,
      },
      {
        path: "/vocationCurrentRequests",
        title: "vocationCurrentRequests",
        component: <VocationCurrentRequests />,
      },
    ],
  },
  {
    path: "/HRDocs",
    title: "HRDocs",
    component: <HRDocs />,
  },
  {
    path: "/MidtermEvaluation",
    title: "MidtermEvaluation",
    component: <MidtermEvaluation />,
  },
  {
    path: "/Error404",
    title: "Error404",
    component: <Error404 />,
  },
];
