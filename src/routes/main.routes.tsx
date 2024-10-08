import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Home from "@/pages/Home";
import Courses from "@/pages/Courses";
import Tutors from "@/pages/Instructors";

const mainPaths = [
  {
    label: "Home",
    path: "/",
    element: <Home />,
  },
  {
    label: "Courses",
    path: "/courses",
    element: <Courses />,
  },
  {
    label: "Instructors",
    path: "/instructors",
    element: <Tutors />,
  },
  {
    label: "About Us",
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    label: "Contact Us",
    path: "/contact-us",
    element: <ContactUs />,
  },
];

export default mainPaths;
