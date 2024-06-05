import CreateSession from "@/pages/dashboard/tutor/CreateSession";
import UploadMaterials from "@/pages/dashboard/tutor/UploadMaterials";
import ViewMaterials from "@/pages/dashboard/tutor/ViewMaterials";
import ViewNotes from "@/pages/dashboard/tutor/ViewNotes";
import ViewSessions from "@/pages/dashboard/tutor/ViewSessions";

const studentPaths = [
  {
    path: "view-sessions",
    element: <ViewSessions />,
  },
  {
    path: "view-materials",
    element: <ViewMaterials />,
  },
  {
    path: "view-notes",
    element: <ViewNotes />,
  },
  {
    path: "create-session",
    element: <CreateSession />,
  },
  {
    path: "upload-materials",
    element: <UploadMaterials />,
  },
];

export default studentPaths;
