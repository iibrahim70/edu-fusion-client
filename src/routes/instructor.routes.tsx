import CreateCourse from "@/pages/dashboard/instructor/CreateCourse";
import UploadMaterials from "@/pages/dashboard/instructor/UploadMaterials";
import ViewCourses from "@/pages/dashboard/instructor/ViewCourses";
import ViewMaterials from "@/pages/dashboard/instructor/ViewMaterials";

const instructorPaths = [
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

  {
    label: "Create Course",
    path: "create-course",
    element: <CreateCourse />,
  },
  {
    label: "Upload Materials",
    path: "upload-materials",
    element: <UploadMaterials />,
  },
];

export default instructorPaths;
