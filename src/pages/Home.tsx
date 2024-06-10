import Hero from "@/components/Hero";
import Courses from "@/components/Courses";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <main className="space-y-10 lg:space-y-20 mb-10 lg:mb-20">
      <Hero />
      <Courses />
      <Instructors />
      <Testimonials />
    </main>
  );
};

export default Home;
