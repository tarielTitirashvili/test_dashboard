import Insurance from "../pages/additional/insurance";
import Vocation from "../pages/additional/vocation";
import Error404 from "../pages/Error404";
import Main from "../pages/main";
import Trainings from "../pages/trainings";

export const routes = [
  {
    path: "/main",
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
    ],
  },
  {
    path: "/trainings",
    title: "ტრენინგები",
    children: [
      {
        path: "/passedTrainings",
        title: "გავლილი სემინარები",
        component: <Insurance />,
      },
      {
        path: "/trainingsToPass",
        title: "გასავლელი სემინარები",
        component: <Insurance />,
      },
      {
        path: "/testResults",
        title: "ტესტირების შედეგები",
        component: <Insurance />,
      },
    ],
  },
  {
    path: "/Error404",
    title: "Error404",
    component: <Error404 />,
  },
];
