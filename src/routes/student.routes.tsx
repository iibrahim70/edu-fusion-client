import CreateNote from "@/pages/dashboard/student/CreateNote";
import CreateTestimonial from "@/pages/dashboard/student/CreateTestimonial";
import ManageNotes from "@/pages/dashboard/student/ManageNotes";
import ViewCourses from "@/pages/dashboard/student/ViewCourses";

const studentPaths = [
  {
    label: "View Courses",
    path: "view-courses",
    element: <ViewCourses />,
  },
  {
    label: "Manage Notes",
    path: "manage-notes",
    element: <ManageNotes />,
  },
  {
    label: "Create Testimonial",
    path: "create-testimonial",
    element: <CreateTestimonial />,
  },
  {
    label: "Create Note",
    path: "create-note",
    element: <CreateNote />,
  },
];

export default studentPaths;
