import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../button/Button";
import useToast from "../../hooks/useToast";

const SocialLogin = () => {
  const { showToast } = useToast();
  const { googleSignin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignin = () => {
    googleSignin()
      .then((res) => {
        const loggedInUser = res.user;
        navigate(from, { replace: true });
        showToast("User Signed In Successfully!");

        // send user info to the database
        const saveUser = {
          name: loggedInUser.displayName,
          email: loggedInUser.email,
          role: "student",
        };
        axios.post("https://dressx-server.vercel.app/users", saveUser);
      })
      .catch((err) => {
        showToast(err.message);
        console.error(err);
      });
  };

  return (
    <>
      <Button onClick={handleGoogleSignin} colors="transparent" size="full">
        <div className="flex gap-x-2 items-center justify-center">
          <h4 className="font-semibold">Google</h4>
          <FcGoogle className="w-6 h-6" />
        </div>
      </Button>
    </>
  );
};

export default SocialLogin;
