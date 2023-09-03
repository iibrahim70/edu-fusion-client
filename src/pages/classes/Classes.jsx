import { useQuery } from "@tanstack/react-query";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useAuth from "../../hooks/useAuth";
import useToast from "../../hooks/useToast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import axios from "axios";
import SectionTitle from "../../components/sectiontitle/SectionTitle";

const Classes = () => {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();

  const { isLoading, error, data } = useQuery(["classes"], () =>
    axios
      .get("https://dressx-server.vercel.app/approve-classes")
      .then((res) => res.data)
  );

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
            className={`shadow-xl ${
              item.availableSeats === 0 ? "bg-red-500" : ""
            }`}
          >
            <figure>
              <img
                className="h-[90%] w-full"
                src={item?.imageUrl}
                alt="Classes"
              />
            </figure>
            <div className="px-5 space-y-2 py-5">
              <h2>{item?.className}</h2>
              <h4>{item?.instructorName}</h4>
              <p>Seats: {item?.availableSeats}</p>
              <p>Price: ${item?.price}</p>
              {isAdmin || isInstructor || item.availableSeats === 0 ? (
                <button className="disabled-button" disabled>
                  Select
                </button>
              ) : (
                <button
                  onClick={() => handleSelect(item)}
                  className="primary-button"
                >
                  Select
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
