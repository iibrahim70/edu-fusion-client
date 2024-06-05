import Lottie from "lottie-react";
import errorAnimation from "../assets/animation/errorpage/2.json";
import { Link, useRouteError } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <main className="section-wrapper flex flex-col items-center justify-center space-y-5">
      <Lottie animationData={errorAnimation} loop={true} />

      <h4 className="font-medium">Opps!! {error?.message}</h4>

      <Link to="/" className={buttonVariants()}>
        Back to homepage
      </Link>
    </main>
  );
};

export default ErrorPage;
