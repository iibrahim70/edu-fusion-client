import ViewUsers from "@/pages/dashboard/admin/ViewUsers";
import ViewSessions from "@/pages/dashboard/admin/ViewSessions";
import ViewMaterials from "@/pages/dashboard/admin/ViewMaterials";

const adminPaths = [
  {
    path: "view-users",
    element: <ViewUsers />,
  },
  {
    path: "view-sessions",
    element: <ViewSessions />,
  },
  {
    path: "view-materials",
    element: <ViewMaterials />,
  },
];

export default adminPaths;
