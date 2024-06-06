import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import toast from "react-hot-toast";

const SigninFrom = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      console.log(data);
      toast.success("Login successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-3.5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2.5">
        <Label className="font-medium">Email</Label>
        <Input type="email" {...register("email", { required: true })} />
        {errors?.name && (
          <span className="text-red-500 text-sm">Enter a valid Email</span>
        )}
      </div>

      <div className="space-y-2.5">
        <Label className="font-medium">Password</Label>
        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
          />

          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
            </button>
          </div>
        </div>

        {errors?.password && (
          <span className="text-red-500 text-sm">Enter a valid Password</span>
        )}
      </div>

      <Button type="submit" className="w-full">
        Signin
      </Button>
    </form>
  );
};

export default SigninFrom;
