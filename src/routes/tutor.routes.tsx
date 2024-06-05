import CreateSession from "@/pages/dashboard/tutor/CreateSession";
import UploadMaterials from "@/pages/dashboard/tutor/UploadMaterials";
import ViewMaterials from "@/pages/dashboard/tutor/ViewMaterials";
import ViewNotes from "@/pages/dashboard/tutor/ViewNotes";
import ViewSessions from "@/pages/dashboard/tutor/ViewSessions";

const tutorPaths = [
  {
    label: "View Sessions",
    path: "view-sessions",
    element: <ViewSessions />,
  },
  {
    label: "View Materials",
    path: "view-materials",
    element: <ViewMaterials />,
  },
  {
    label: "View Notes",
    path: "view-notes",
    element: <ViewNotes />,
  },
  {
    label: "Create Session",
    path: "create-session",
    element: <CreateSession />,
  },
  {
    label: "Upload Materials",
    path: "upload-materials",
    element: <UploadMaterials />,
  },
];

export default tutorPaths;
