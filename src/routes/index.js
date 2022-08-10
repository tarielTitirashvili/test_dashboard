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

export const routes = [
  {
    path: "/",
    title: "ძირითადი",
    component: <Main />,
  },
  {
    path: "/additional",
    title: "დამატებითი",
    children: [
      {
        path: "/insurance",
        title: "დაზღვევა",
        component: <Insurance />,
      },
      {
        path: "/vocation",
        title: "დასვენება",
        component: <Vocation />,
      },
      {
        path: "/IPC",
        title: "IPC აქციები",
        component: <IPC />,
      },
      {
        path: "/survey",
        title: "გამოკითხვა",
        component: <Vocation />,
      },
      {
        path: "/PCB",
        title: "PCB კლუბები",
        component: <PCB />,
      },
    ],
  },
  {
    path: "/trainings",
    title: "ტრენინგები",
    children: [
      {
        path: "/trainings",
        title: "მიმდინარე სემინარები",
        component: <Trainings />,
      },
      {
        path: "/passedTrainings",
        title: "გავლილი სემინარები",
        component: <PassedTrainings />,
      },
      {
        path: "/testResults",
        title: "ტესტირების შედეგები",
        component: <TestResults />,
      },
    ],
  },
  {
    path: "/request",
    title: "მოთხოვნები",
    component: <Requests />,
  },
  {
    path: "/HRDocs",
    title: "HR დოკუმენტაცია",
    component: <HRDocs />,
  },
  {
    path: "/MidtermEvaluation",
    title: "შუალედური შეფასება",
    component: <MidtermEvaluation />,
  },
  {
    path: "/Error404",
    title: "Error404",
    component: <Error404 />,
  },
];
