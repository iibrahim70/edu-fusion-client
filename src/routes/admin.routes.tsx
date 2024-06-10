import ViewUsers from "@/pages/dashboard/admin/ViewUsers";
import ViewCourses from "@/pages/dashboard/admin/ViewCourses";
import ViewMaterials from "@/pages/dashboard/admin/ViewMaterials";

const adminPaths = [
  {
    label: "View Users",
    path: "view-users",
    element: <ViewUsers />,
  },
  {
    label: "View Courses",
    path: "view-courses",
    element: <ViewCourses />,
  },
  {
    label: "View Materials",
    path: "view-materials",
    element: <ViewMaterials />,
  },
];

export default adminPaths;
