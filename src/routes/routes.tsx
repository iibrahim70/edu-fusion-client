import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/components/layout/MainLayout";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ErrorPage from "@/pages/ErrorPage";
import Home from "@/pages/Home";
import Signin from "@/pages/auth/Signin";
import Signup from "@/pages/auth/Signup";
import Tutors from "@/pages/Tutors";
import StudySession from "@/pages/StudySession";
import ViewSessions from "@/pages/dashboard/student/ViewSessions";
import ManageNotes from "@/pages/dashboard/student/ManageNotes";
import CreateNote from "@/pages/dashboard/student/CreateNote";

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
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      // admin only
      // {
      //   path: "manage-users",
      //   element: <ManageUsers />,
      // },
      // {
      //   path: "manage-classes",
      //   element: <ManageClasses />,
      // },
      // // instructor only
      // {
      //   path: "add-class",
      //   element: <AddClass />,
      // },
      // {
      //   path: "my-classes",
      //   element: <MyClasses />,
      // },
      // for students
      {
        path: "view-sessions",
        element: <ViewSessions />,
      },
      {
        path: "manage-notes",
        element: <ManageNotes />,
      },
      {
        path: "create-note",
        element: <CreateNote />,
      },
    ],
  },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
]);

export default router;
