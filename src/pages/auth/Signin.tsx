import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "@/components/SocialLogin";
import useToast from "@/hooks/useToast";
import SigninFrom from "@/components/forms/SigninFrom";

const Signin = () => {
  const { Login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (user) => {
    Login(user.email, user.password)
      .then((res) => {
        navigate(from, { replace: true });
        showToast("User Signed In Successfully !");
      })
      .catch((err) => {
        showToast(err.message);
        console.error(err);
      });
  };

  return (
    <main className="min-h-screen flex justify-center items-center">
      <div className="shadow rounded-md border p-8 w-full max-w-md mx-auto space-y-3.5">
        <h3 className="text-center">Signin</h3>
        <SigninFrom />

        <SocialLogin />

        <div className="flex items-center gap-x-1.5">
          <p>Don't Have An Account Yet?</p>
          <Link to="/signup" className="text-blue-500">
            Signup
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Signin;
