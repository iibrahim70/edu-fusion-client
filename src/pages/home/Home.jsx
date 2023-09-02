import Instructors from "../instructors/Instructors";
import Hero from "../../components/hero/Hero";
import Classes from "../classes/Classes";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <main>
      <Hero />
      {/* <Classes /> */}
      {/* <Instructors /> */}
      <Testimonial />
    </main>
  );
};

export default Home;
