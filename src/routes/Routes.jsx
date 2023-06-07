import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Signup from "../pages/signup/Signup";
import Signin from "../pages/singin/Signin";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/signin',
        element: <Signin />,
      },
    ]
  }
])