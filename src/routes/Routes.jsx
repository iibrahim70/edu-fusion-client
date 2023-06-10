import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Signup from "../pages/signup/Signup";
import Signin from "../pages/singin/Signin";
import Instructors from "../pages/instructors/Instructors";
import Dashboard from "../layout/Dashboard";
import ManageUsers from "../pages/dashboard/admin/manageusers/ManageUsers";
import AddClass from "../pages/dashboard/instructor/addclass/AddClass";
import ManageClasses from "../pages/dashboard/admin/manageclasses/ManageClasses";
import MyClasses from "../pages/dashboard/instructor/myclasses/MyClasses";
import Classes from "../pages/classes/Classes";
import PrivateRoute from "./PrivateRoute";


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
        path: '/classes',
        element: <Classes />,
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
    element: <Dashboard />, 
    children: [
      // admin only
      {
        path: 'manage-users',
        element: <ManageUsers />,
      },
      {
        path: 'manage-classes',
        element: <ManageClasses />,
      },

      // instructor only 
      {
        path: 'add-class',
        element: <AddClass />,
      },
      {
        path: 'my-classes',
        element: <MyClasses />,
      },
    ]
  }
])