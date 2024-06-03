import { useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Instructors = () => {
  const { pathname } = useLocation();

  const { isLoading, error, data } = useQuery({
    queryKey: ["instructors"],
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
        Error: {error.message}
      </div>
    );

  return (
    <div
      className={`${pathname === "/" ? "mt-10 xl:mt-20" : "my-10 xl:my-20"}`}
    >
      {pathname === "/" && (
        <SectionTitle
          title="Meet Our Expert Instructors"
          description="Get to know the talented and experienced instructors who will guide you on your fashion design journey. Our team of dedicated professionals brings a wealth of industry knowledge and a passion for teaching. Learn from the best and gain insights that will help you excel in the world of fashion design."
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {data.map((item) => (
          <div key={item._id} className="shadow-xl rounded">
            <figure>
              <img
                className="h-[220px] w-full object-cover"
                src={item?.picture}
                alt="Instructor Image"
              />
            </figure>
            <div className="px-5 space-y-2 py-5">
              <h3 className="text-lg font-medium truncate">{item?.name}</h3>
              <p>Email: {item?.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
