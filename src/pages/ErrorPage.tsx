import Lottie from "lottie-react";
import errorAnimation from "../assets/animation/errorpage/2.json";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();
  return (
    <div className="container flex flex-col items-center justify-center">
      <div className="max-w-lg text-center">
        <Lottie animationData={errorAnimation} loop={true} />
        <p className="text-xl font-medium md:text-2xl text-[#212121] -mt-10 mb-10">
          Opps!! {error?.message}
        </p>
        <Link to="/" className="primary-button">
          Back to homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
