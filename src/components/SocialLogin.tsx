import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "@/hooks/useAuth";
import useToast from "@/hooks/useToast";

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
    <div className="pt-1 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-5">
        <button
          onClick={handleGoogleSignin}
          className="flex gap-x-1.5 items-center justify-center"
        >
          <FcGoogle className="size-6" />
          <p className="font-semibold">Google</p>
        </button>

        <button
          onClick={handleGoogleSignin}
          className="flex gap-x-1.5 items-center justify-center"
        >
          <FaGithub className="size-6" />
          <p className="font-semibold">Github</p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
