import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Signup from "../pages/signup/Signup";
import Signin from "../pages/singin/Signin";
import Instructors from "../pages/instructors/Instructors";
import Dashboard from "../layout/Dashboard";
import ManageUsers from "../pages/manageusers/ManageUsers";
import AddClass from "../pages/addclass/AddClass";


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
        path: '/instructors',
        element: <Instructors />,
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
  }, 
  {
    path: '/dashboard',
    element: <Dashboard/>, 
    children: [
      {
        path: 'manage-users',
        element: <ManageUsers />,
      },
      {
        path: 'add-class',
        element: <AddClass />,
      },
    ]
  }
])