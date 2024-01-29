import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import MainLayout from "../comps/layouts/MainLayout/MainLayout";

export const appRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: "random",
        element: <p className=""></p>,
      },
    ],
  },

  //Unprotected routes
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
];
