import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/sociallogin/SocialLogin";
import { useMutation } from "@tanstack/react-query";
import useToast from "../../hooks/useToast";

const Signup = () => {
  const { createUser, updateUserProfile } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password", "");

  const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const image_hosting_Url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const mutation = useMutation(async (user) => {
    try {
      const formData = new FormData();
      formData.append("image", user.picture[0]);

      const res = await fetch(image_hosting_Url, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        const imgUrl = data.data.display_url;
        const { name, email, password } = user;

        const res = await createUser(email, password);
        const newUser = res.user;
        navigate("/");
        showToast("User Created Successfully !");

        await updateUserProfile(name, imgUrl);

        const saveUser = {
          name: newUser.displayName,
          email: newUser.email,
          role: "student",
          gender: user.gender,
          phoneNumber: user.phoneNumber,
          address: user.address,
          picture: imgUrl,
        };

        const response = await fetch("https://dressx-server.vercel.app/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(saveUser),
        });

        const responseData = await response.json();

        if (responseData.insertedId) {
          console.log("User updated successfully");
        }
      }
    } catch (error) {
      console.error(error);
    }
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <main className="flex justify-center items-center my-10 xl:my-20">
      <div className="shadow-xl p-10 w-[90%] md:w-[60%] xl:w-[50%] mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">Name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register("password", {
                required: "Password is required",
                validate: {
                  minLength: (value) =>
                    value.length >= 6 ||
                    "Password must be at least 6 characters long",
                  capitalLetter: (value) =>
                    /[A-Z]/.test(value) ||
                    "Password must contain at least one capital letter",
                  specialCharacter: (value) =>
                    /[!@#$%^&*]/.test(value) ||
                    "Password must contain at least one special character",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Gender</label>
            <select
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register("gender", { required: true })}
            >
              <option>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 text-sm">Gender is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              type="number"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">Number is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Address</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">Address is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Picture</label>
            <input
              className="w-full py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              type="file"
              {...register("picture", { required: true })}
            />
            {errors.picture && (
              <span className="text-red-500 text-sm">Picture is required</span>
            )}
          </div>

          <input
            type="submit"
            className="primary-button w-full"
            value="Submit"
          />
        </form>

        <div className="space-y-3 mt-5 flex flex-col items-center justify-center">
          <p>
            Already Have An Account?{" "}
            <Link to="/signin" className="text-blue-500">
              Signin
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </main>
  );
};

export default Signup;
