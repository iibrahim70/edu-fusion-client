import { Link, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import { FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";
import { HiHome } from "react-icons/hi";
import { BsBookHalf, BsFillBookmarkPlusFill } from "react-icons/bs";
import { MdOutlinePayment } from "react-icons/md";

const Dashboard = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isInstructor, isInstructorLoading] = useInstructor();

  if (isAdminLoading || isInstructorLoading)
    return (
      <div className="flex justify-center">
        {" "}
        <span className="loading loading-dots loading-md" />{" "}
      </div>
    );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side bg-red-300">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content drawer-li">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <Link to="/dashboard/manage-users">
                  <FaUsers />
                  Manage Users
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manage-classes">
                  <SiGoogleclassroom />
                  Manage Classes
                </Link>
              </li>
              <hr className="w-[90%] mx-auto my-5 border-black" />
              <li>
                <Link to="/">
                  <HiHome />
                  Home
                </Link>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <Link to="/dashboard/add-class">
                  <BsBookHalf />
                  Add Class
                </Link>
              </li>
              <li>
                <Link to="/dashboard/my-classes">
                  <SiGoogleclassroom />
                  My Classes
                </Link>
              </li>
              <hr className="w-[90%] mx-auto my-5 border-black" />
              <li>
                <Link to="/">
                  <HiHome />
                  Home
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link>
                  <BsFillBookmarkPlusFill />
                  Selected Classes
                </Link>
              </li>
              <li>
                <Link>
                  <BsBookHalf />
                  Enrolled Classes
                </Link>
              </li>
              <li>
                <Link>
                  <MdOutlinePayment />
                  Payment
                </Link>
              </li>
              <hr className="w-[90%] mx-auto my-5 border-black" />
              <li>
                <Link to="/">
                  <HiHome />
                  Home
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
