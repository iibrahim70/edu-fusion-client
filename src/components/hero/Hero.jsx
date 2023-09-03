import Lottie from "lottie-react";
import heroAnimation from "../../assets/animation/hero/1.json";
import { Link } from "react-router-dom";
import { buttonVariants } from "../button/Button";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row gap-10">
      <div className="flex-1 flex items-center">
        <div className="space-y-5">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Creating Trends, Inspiring Dreams
          </h1>
          <p>
            "Inspiring Trends, Creating Dreams" - Unleash your creative
            potential at our fashion design school, where we inspire the latest
            trends and help turn your dreams into reality. Join us and be part
            of shaping the future of fashion.
          </p>
          <Link to="/classes" className={buttonVariants()}>
            Get Classes
          </Link>
        </div>
      </div>

      <div className="flex-1">
        <Lottie animationData={heroAnimation} loop={true} />
      </div>
    </section>
  );
};

export default Hero;
