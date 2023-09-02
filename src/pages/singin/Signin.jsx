import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/sociallogin/SocialLogin";
import useToast from "../../hooks/useToast";

const Signin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { Login } = useAuth();
  const { showToast } = useToast();

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (user) => {
    const { email, password } = user;
    Login(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        navigate(from, { replace: true });
        showToast("User Signed In Successfully !");
      })
      .catch((err) => {
        showToast(err.message);
        console.error(err);
      });
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="shadow-xl p-10 w-[90%] md:w-[60%] xl:w-[50%] mx-auto">
        <h2 className="text-center text-4xl font-bold mb-10">Signin</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              className="inputFiedls"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Enter a valid Email</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="inputFiedls"
                {...register("password", { required: true })}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                </button>
              </div>
            </div>

            {errors.password && (
              <span className="text-red-500 text-sm">
                Enter a valid Password
              </span>
            )}
          </div>

          <button type="submit" className="primary-button w-full">
            Signin
          </button>
        </form>

        {/* toggle singup */}
        <div className="space-y-3 mt-5 flex flex-col items-center justify-center">
          <p>
            Don't Have An Account Yet?{" "}
            <Link to="/signup" className="text-blue-500">
              Signup
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </main>
  );
};

export default Signin;
