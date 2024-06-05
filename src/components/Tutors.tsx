import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SectionTitle from "./SectionTitle";

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
    <section className="section-wrapper">
      <SectionTitle
        title="Meet Our Expert Tutors"
        description="Get to know our experienced tutors who will support you on your learning journey."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data?.map((item) => (
          <div key={item._id} className="shadow rounded-md border">
            <img
              className="h-[220px] w-full object-cover rounded-t-md"
              src={item?.picture}
              alt="Tutor Image"
            />

            <div className="p-5 space-y-1.5">
              <h5>{item?.name}</h5>
              <p>{item?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tutors;
