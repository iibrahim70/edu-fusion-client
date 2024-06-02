import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/sociallogin/SocialLogin";
import useToast from "../../hooks/useToast";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Button from "../../components/button/Button";

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

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.picture[0]);

      const imageUrl = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_TOKEN
      }`;

      // Upload image to image hosting service using Axios
      const imageResponse = await axios.post(imageUrl, formData);

      if (imageResponse.data.success) {
        const imgUrl = imageResponse.data.data.display_url;
        const { name, email, password, gender, phoneNumber, address } = data;

        // Create user using authentication system
        await createUser(email, password);
        navigate("/");
        showToast("User Created Successfully!");

        // Update user profile with the image URL
        await updateUserProfile(name, imgUrl);

        const saveUser = {
          name: name,
          email: email,
          role: "student",
          gender: gender,
          phoneNumber: phoneNumber,
          address: address,
          picture: imgUrl,
        };

        // Send user data to your server using Axios
        axios.post("https://dressx-server.vercel.app/users", saveUser);
      }
    } catch (error) {
      showToast(error.message);
      console.error(error);
    }
  };

  return (
    <main className="flex justify-center items-center my-10 xl:my-20">
      <div className="shadow-xl p-10 w-[90%] md:w-[60%] xl:w-[50%] mx-auto">
        <h2 className="text-center text-4xl font-bold mb-10">Signup</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              className="inputFiedls"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">Name is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              className="inputFiedls"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">Email is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <PhoneInput
              international
              defaultCountry="BD"
              placeholder="Phone Number"
              className="inputFiedls"
              {...register("phoneNumber", { required: true })}
            />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">
                Phone number is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="inputFiedls"
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
              className="inputFiedls"
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
              className="inputFiedls"
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
            <label className="block mb-1 font-medium">Address</label>
            <input
              className="inputFiedls"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">Address is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Picture</label>
            <input
              type="file"
              accept="image/*"
              {...register("picture", { required: true })}
            />
            {errors.picture && (
              <span className="text-red-500 text-sm">Picture is required</span>
            )}
          </div>

          <Button type="submit" colors="secondary" size="full">
            Signup
          </Button>
        </form>

        <div className="space-y-4 mt-4 flex flex-col items-center justify-center">
          <SocialLogin />
          <p>
            Already Have An Account?{" "}
            <Link to="/signin" className="text-red-500">
              Signin
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Signup;
