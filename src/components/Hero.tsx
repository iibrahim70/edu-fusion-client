import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

const Hero = () => {
  return (
    <section className="section-wrapper min-h-[calc(100dvh-64px)] flex flex-col items-center justify-center gap-5 text-center">
      <h1>Empowering Minds, Connecting Learners</h1>
      <p>
        "Empowering Minds, Connecting Learners" - Transform your educational
        journey at EduFusion, where students, tutors, and administrators come
        together to inspire and achieve academic excellence. Join us and be a
        part of a dynamic learning community.
      </p>
      <Link to="/classes" className={buttonVariants()}>
        Get Classes
      </Link>
    </section>
  );
};

export default Hero;
