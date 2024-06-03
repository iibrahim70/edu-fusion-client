import { useQuery } from "@tanstack/react-query";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";
import useToast from "../hooks/useToast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import axios from "axios";
import SectionTitle from "../components/sectiontitle/SectionTitle";
import Button from "../components/button/Button";
import { BsFillPeopleFill } from "react-icons/bs";

const Classes = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();

  const { isLoading, error, data } = useQuery({
    queryKey: ["classes"],
    queryFn: () =>
      axios
        .get("https://dressx-server.vercel.app/approve-classes")
        .then((res) => res.data),
  });

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

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

  const handleSelect = (item) => {
    if (user) {
      const orderItem = {
        classId: item._id,
        userEmail: user.email,
        userName: user.displayName,
        availableSeats: item.availableSeats,
        price: item.price,
        imageUrl: item.imageUrl,
        enrollStudent: item.enrollStudent,
      };
      axiosSecure
        .post("https://dressx-server.vercel.app/carts", orderItem)
        .then(() => {
          showToast("Add To Cart Successfully!");
        })
        .catch((error) => {
          console.error(error);
          showToast(error.message);
        });
    } else {
      navigate("/signin", { state: { from: location } });
    }
  };

  return (
    <div
      className={`${pathname === "/" ? "mt-10 xl:mt-20" : "my-10 xl:my-20"}`}
    >
      {pathname === "/" && (
        <SectionTitle
          title="Discover the World of Fashion Design"
          description="Welcome to our fashion design school, where creativity meets craftsmanship. Explore our curated selection of classes tailored to inspire and nurture your passion for fashion. From the fundamentals to advanced techniques, our courses cater to all skill levels. Join us on a journey of style, innovation, and skill development in the world of fashion design."
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {data.map((item) => (
          <div
            key={item._id}
            className={`${item.availableSeats === 0 ? "bg-red-500" : ""}`}
          >
            <div className="pb-3 text-right">
              <span className="bg-blue/90 p-2 rounded-xl text-white text-sm">
                {item?.className}
              </span>
            </div>

            <div className="shadow-xl rounded">
              <img
                className="h-[250px] w-full rounded"
                src={item?.imageUrl}
                alt="Classes"
              />
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-medium">{item?.instructorName}</h3>
                <p className="flex items-center gap-2">
                  <BsFillPeopleFill />
                  {item?.availableSeats}
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold">${item?.price}</p>
                  {isAdmin || isInstructor || item.availableSeats === 0 ? (
                    <Button colors="disabled" size="small">
                      Select
                    </Button>
                  ) : (
                    <Button onClick={() => handleSelect(item)} size="small">
                      Select
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
