import { cva } from "class-variance-authority";
import clsx from "clsx";

export const buttonVariants = cva(
  "inline-block text-center rounded transition duration-300 ease-in-out font-medium",
  {
    variants: {
      colors: {
        primary: "bg-pink hover:bg-pink/90 text-white active:scale-105",
        secondary: "bg-blue hover:bg-blue/90 text-white active:scale-105",
        transparent:
          "bg-transparent hover:bg-black/10 border border-black text-black active:scale-105",
        disabled: "bg-[#ddd] text-white cursor-not-allowed",
      },
      size: {
        default: "py-3 px-6",
        full: "py-3 w-full",
        small: "py-2 px-4",
      },
    },
    defaultVariants: {
      colors: "primary",
      size: "default",
    },
  }
);
const Button = ({ onClick, type, colors, size, children }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(buttonVariants({ colors, size }))}
    >
      {children}
    </button>
  );
};

export default Button;
