import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import StudySessionCard from "@/components/StudySessionCard";

const StudySession = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["classes"],
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
    <section className="section-wrapper py-10">
      <StudySessionCard data={data} />
    </section>
  );
};

export default StudySession;
