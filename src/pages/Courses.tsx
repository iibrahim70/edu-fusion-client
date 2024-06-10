import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CourseCard from "@/components/cards/CourseCard";

const Courses = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["courses"],
    queryFn: () =>
      axios
        .get("https://dressx-server.vercel.app/approve-classes")
        .then((res) => res?.data),
  });

  if (isLoading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Error: {error?.message}
      </div>
    );

  return (
    <main className="section-wrapper py-10">
      <CourseCard data={data} />
    </main>
  );
};

export default Courses;
