import CreateNote from "@/pages/dashboard/student/CreateNote";
import ManageNotes from "@/pages/dashboard/student/ManageNotes";
import ViewSessions from "@/pages/dashboard/student/ViewSessions";

const tutorPaths = [
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
];

export default tutorPaths;
