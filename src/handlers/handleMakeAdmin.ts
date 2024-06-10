import { IUser } from "@/types";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export const handleMakeAdmin = async (
  user: IUser,
  updateUserRole: (arg: { userId: string; role: string }) => Promise<any>
) => {
  Swal.fire({
    title: "Are you sure?",
    text: `Make ${user?.fullName} an Admin?`,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Make Admin",
    cancelButtonText: "Cancel",
  }).then(async (result) => {
    if (result?.isConfirmed) {
      try {
        await updateUserRole({ userId: user._id, role: "admin" });
        toast.success(`${user?.fullName} is now an Admin!`);
      } catch (error) {
        console.error("Error updating user role:", error);
        toast.error("Failed to update role. Try again.");
      }
    }
  });
};
