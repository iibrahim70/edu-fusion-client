import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import axios from "axios";

const ViewUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get("https://dressx-server.vercel.app/users");
      return res.data;
    },
  });

  const handleMakeAdmin = async (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do You Want To Make ${user.name} An Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Admin!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.patch(`/users/admin/${user._id}`);
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} Is An Admin Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          // Handle error
          console.error(error);
        }
      }
    });
  };

  const handleMakeInstructor = async (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do You Want To Make ${user.name} An Instructor?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Instructor!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosSecure.patch(`/users/instructor/${user._id}`);
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} Is An Instructor Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        } catch (error) {
          // Handle error
          console.error(error);
        }
      }
    });
  };

  if (isLoading) return <span className="loading loading-dots loading-md" />;

  return <main>View Users</main>;
};

export default ViewUsers;
