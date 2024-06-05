import { ReactNode } from "react";
import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  }

  return <Navigate state={{ from: location }} to="/signin" replace></Navigate>;
};

export default PrivateRoute;
