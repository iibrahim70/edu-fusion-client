import TutorCard from "@/components/cards/TutorCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Tutors = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["tutors"],
    queryFn: () =>
      axios
        .get("https://dressx-server.vercel.app/instructors")
        .then((res) => res.data),
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error?.message}
      </div>
    );

  return (
    <main className="section-wrapper py-10">
      <TutorCard data={data} />
    </main>
  );
};

export default Tutors;
