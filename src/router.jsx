import { createBrowserRouter } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import App from "./App";

import Main from "./pages/main/Main";
import Fortune from "./pages/fortune/Fortune";
import IrumiWrite from "./pages/irumiWrite/IrumiWrite";
import IrumiView from "./pages/irumiView/Irumi";
import NotFound from "./NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />
      },
      {
        path: "fortune",
        element: <Fortune />
      },
      {
        path: "irumiWrite",
        element: <IrumiWrite />
      },
      {
        path: "irumiView",
        element: <IrumiView />
      }
    ],
    errorElement: <NotFound />,
  }
]);

export default router;
