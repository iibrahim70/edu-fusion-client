import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Signin from "@/pages/auth/Signin";
import Signup from "@/pages/auth/Signup";
import Tutors from "@/pages/Tutors";
import StudySession from "@/pages/StudySession";
import routeGenerator from "@/helpers/routesGenerator";
import adminPaths from "./admin.routes";
import tutorPaths from "./tutor.routes";
import studentPaths from "./student.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/study-sessions",
        element: <StudySession />,
      },
      {
        path: "/tutors",
        element: <Tutors />,
      },
    ],
  },

  // dashboard routes
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: routeGenerator(adminPaths),
  },
  {
    path: "/tutor/dashboard",
    element: <DashboardLayout />,
    children: routeGenerator(tutorPaths),
  },
  {
    path: "/student/dashboard",
    element: <DashboardLayout />,
    children: routeGenerator(studentPaths),
  },

  // auth routes
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
]);

export default router;
