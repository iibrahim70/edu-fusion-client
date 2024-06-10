import { useQuery } from "@tanstack/react-query";
import InstructorCard from "@/components/cards/InstructorCard";
import axios from "axios";

const Instructors = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["instructors"],
    queryFn: () =>
      axios
        .get("https://dressx-server.vercel.app/instructors")
        .then((res) => res.data),
  });

  if (isLoading)
    return (
      <main className="flex items-center justify-center min-h-screen">
        Loading...
      </main>
    );

  if (error)
    return (
      <main className="flex items-center justify-center min-h-screen">
        Error: {error?.message}
      </main>
    );

  return (
    <main className="section-wrapper py-10">
      <InstructorCard data={data} />
    </main>
  );
};

export default Instructors;
