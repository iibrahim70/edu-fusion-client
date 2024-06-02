import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import ActiveLink from "../../hooks/ActiveLink";

const Navbar = () => {
  const { user, Logout } = useAuth();

  const handleLogout = () => {
    Logout()
      .then(() => {})
      .catch((err) => console.log(err));
  };

  const navItems = (
    <div className="space-x-5 text-base font-medium">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/instructors">Instructors</ActiveLink>
      <ActiveLink to="/classes">Classes</ActiveLink>
      {user && <ActiveLink to="/dashboard">Dashboard</ActiveLink>}
    </div>
  );

  const navItemsMobile = (
    <>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/instructors">Instructors</ActiveLink>
      <ActiveLink to="/classes">Classes</ActiveLink>
      {user && <ActiveLink to="/dashboard">Dashboard</ActiveLink>}
    </>
  );

  return (
    <>
      <div className="navbar w-[90%] mx-auto p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-20"
            >
              {navItemsMobile}
            </ul>
          </div>
          <a className="text-xl font-bold">Dressx</a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="Profile" />
                </div>
              </label>
              <div className="mt-4 p-5 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 space-y-2 font-medium text-base z-20">
                <Link onClick={handleLogout}>Logout</Link>
              </div>
            </div>
          ) : (
            <Link className="primary-button" to="/signin">
              Signin
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
