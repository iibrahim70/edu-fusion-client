import Hero from "@/components/Hero";
import StudySession from "@/components/StudySession";
import Tutors from "@/components/Tutors";
import Testimonial from "@/components/Testimonial";

const Home = () => {
  return (
    <main className="space-y-10 lg:space-y-20">
      <Hero />
      <StudySession />
      <Tutors />
      <Testimonial />
    </main>
  );
};

export default Home;
