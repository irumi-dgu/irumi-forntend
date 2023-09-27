import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import App from "./App";

import Main from "./pages/main/Main";
import Fortune from "./pages/fortune/Fortune";
import FortuneLotus from "./pages/fortune/FortuneLotus";
import MyDetail from "./pages/fortune/MyDetail";
import IrumiWrite from "./pages/irumiWrite/IrumiWrite";
import IrumiView from "./pages/irumiView/Irumi";
import NotFound from "./NotFound";
import Lanterns from "./pages/lanterns/Lanterns";
import LanternsSearch from "./pages/lanterns/LanternsSearch";
import Intro from "./pages/intro/Irumi";
import About from "./pages/About/AboutUs";
import AboutUs from "./pages/About/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/intro",
        element: <Intro />
      },
      {
        path: "",
        element: <Main />
      },
      {
        path: "lanterns",
        element: <Lanterns />
      },
      {
        path: "lanternsSearch",
        element: <LanternsSearch />
      },
      {
        path: "fortune/:detailId",
        element: <Fortune />
      },
      {
        path: "fortuneLotus/:detailId",
        element: <FortuneLotus />
      },
      {
        path: "myDetail/:detailId",
        element: <MyDetail />
      },
      {
        path: "irumiWrite",
        element: <IrumiWrite />
      },
      {
        path: "irumi/:detailId",
        element: <IrumiView />
      },
      {
        path: "/about",
        element: <AboutUs />
      }
    ],
    errorElement: <NotFound />
  }
]);

export default router;
