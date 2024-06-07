import CreateNote from "@/pages/dashboard/student/CreateNote";
import CreateTestimonial from "@/pages/dashboard/student/CreateTestimonial";
import ManageNotes from "@/pages/dashboard/student/ManageNotes";
import ViewSessions from "@/pages/dashboard/student/ViewSessions";

const studentPaths = [
  {
    label: "View Sessions",
    path: "view-sessions",
    element: <ViewSessions />,
  },
  {
    label: "Manage Notes",
    path: "manage-notes",
    element: <ManageNotes />,
  },
  {
    label: "Create Note",
    path: "create-note",
    element: <CreateNote />,
  },
  {
    label: "Create Testimonial",
    path: "create-testimonial",
    element: <CreateTestimonial />,
  },
];

export default studentPaths;
