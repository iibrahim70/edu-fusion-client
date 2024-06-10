import Lottie from "lottie-react";
import errorAnimation from "../assets/animation/error.json";
import { ErrorResponse, Link, useRouteError } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

const ErrorPage = () => {
  const error = useRouteError() as ErrorResponse;

  return (
    <main className="section-wrapper min-h-screen flex flex-col items-center justify-center space-y-5">
      <Lottie
        animationData={errorAnimation}
        loop={true}
        className="size-[40%]"
      />

      <h4 className="font-medium">Opps!! {error?.data}</h4>

      <Link to="/" className={buttonVariants()}>
        Back to homepage
      </Link>
    </main>
  );
};

export default ErrorPage;
