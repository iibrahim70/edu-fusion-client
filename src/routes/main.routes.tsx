import Home from "@/pages/Home";
import StudySession from "@/pages/StudySession";
import Tutors from "@/pages/Tutors";

const mainPaths = [
  {
    path: "/",
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
];

export default mainPaths;
