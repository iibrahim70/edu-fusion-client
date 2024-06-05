import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
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
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
];

export default mainPaths;
