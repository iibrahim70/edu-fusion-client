import { FieldValues, useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";

const SignupFrom = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <form className="space-y-3.5" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2.5">
        <Label className="font-medium">Full Name</Label>
        <Input {...register("fullName", { required: true })} />
        {errors?.name && (
          <span className="text-red-500 text-sm">Name is required</span>
        )}
      </div>

      <div className="space-y-2.5">
        <Label className="font-medium">Email</Label>
        <Input {...register("email", { required: true })} />
        {errors?.email && (
          <span className="text-red-500 text-sm">Email is required</span>
        )}
      </div>

      <div className="space-y-2.5">
        <Label className="font-medium">Password</Label>
        <Input
          type="password"
          {...register("password", {
            required: "Password is required",
            validate: {
              minLength: (value) =>
                value.length >= 8 ||
                "Password must be at least 6 characters long!",
              capitalLetter: (value) =>
                /[A-Z]/.test(value) ||
                "Password must contain at least one capital letter!",
              specialCharacter: (value) =>
                /[!@#$%^&*]/.test(value) ||
                "Password must contain at least one special character!",
            },
          })}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}
      </div>

      <div className="space-y-2.5">
        <Label className="font-medium">Confirm Password</Label>
        <Input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === password || "Passwords do not match!",
          })}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      <Button type="submit">Signup</Button>
    </form>
  );
};

export default SignupFrom;
