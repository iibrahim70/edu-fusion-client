import Hero from "@/components/Hero";
import StudySession from "@/components/StudySession";
import Instructors from "./Instructors";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <main className="space-y-10 lg:space-y-20">
      <Hero />
      <StudySession />
      <Instructors />
      <Testimonial />
    </main>
  );
};

export default Home;
