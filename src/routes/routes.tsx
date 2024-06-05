import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Signin from "@/pages/auth/Signin";
import Signup from "@/pages/auth/Signup";
import Tutors from "@/pages/Tutors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tutors",
        element: <Tutors />,
      },
      //     {
      //       path: "/instructors",
      //       element: <Instructors />,
      //     },

      //   ],
      // },
      // {
      //   path: "/dashboard",
      //   element: <Dashboard />,
      //   children: [
      //     // admin only
      //     {
      //       path: "manage-users",
      //       element: <ManageUsers />,
      //     },
      //     {
      //       path: "manage-classes",
      //       element: <ManageClasses />,
      //     },

      //     // instructor only
      //     {
      //       path: "add-class",
      //       element: <AddClass />,
      //     },
      //     {
      //       path: "my-classes",
      //       element: <MyClasses />,
      //     },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
]);

export default router;
