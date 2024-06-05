import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ViewUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
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

  const isButtonDisabled = (role) => {
    return role === "admin" || role === "instructor";
  };

  return (
    <main className="py-20">
      <h1 className="text-center pb-20">All Users: {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="capitalize">{user.role}</td>
                <td>
                  {!isButtonDisabled(user.role) ? (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="primary-button"
                    >
                      Instructor
                    </button>
                  ) : (
                    <button className="disabled-button">Instructor</button>
                  )}
                </td>
                <td>
                  {!isButtonDisabled(user.role) ? (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="primary-button"
                    >
                      Admin
                    </button>
                  ) : (
                    <button className="disabled-button">Admin</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ViewUsers;
