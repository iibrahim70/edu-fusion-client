import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin";
// import useToast from "@/hooks/useToast";
import axios from "axios";
import { Button } from "@/components/ui/button";
import useToast from "@/hooks/useToast";
import SignupFrom from "@/components/forms/SignupFrom";

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
      <div className="shadow-md rounded-md border p-8 w-full max-w-md mx-auto space-y-5">
        <h3 className="text-center">Signup</h3>
        <SignupFrom />

        <div className="flex flex-col items-center justify-center">
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
