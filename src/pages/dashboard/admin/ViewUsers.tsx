import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import axios from "axios";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const ViewUsers = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedValue] = useDebounce(searchText, 1000);
  console.log({ searchText });
  console.log({ debouncedValue });

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/users?searchTerm=${debouncedValue}`
      );
      return res?.data?.data;
    },
    enabled: !!debouncedValue || searchText === "", // Enable the query if debouncedValue is not empty or searchText is empty
  });

  useEffect(() => {
    if (debouncedValue !== undefined) {
      refetch();
    }
  }, [debouncedValue, refetch]);

  const handleMakeAdmin = async (user: IUser) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do You Want To Make ${user?.fullName} An Admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Make Admin",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result?.isConfirmed) {
        try {
          await axios.patch(
            `http://localhost:5000/api/v1/users/update-role/${user._id}`,
            {
              role: "admin",
            }
          );
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user?.fullName} Is An Admin Now!`,
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

  const handleMakeTutor = async (user: IUser) => {
    console.log(user);
  };

  const handleMakeUser = async (user: IUser) => {
    console.log(user);
  };

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <main className="space-y-3.5">
      <div className="flex justify-end">
        <Input
          type="text"
          placeholder="Search by Name or Email..."
          className="w-1/4"
          onChange={(e) => {
            setSearchText(e?.target?.value);
          }}
        />
      </div>

      <div className="w-full max-lg:overflow-x-scroll">
        <table className="w-full">
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Profile</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data?.map((item: IUser, index: number) => (
              <tr key={item?._id} className="text-sm">
                <td>{index + 1}</td>

                <td className="flex items-center gap-5">
                  {/* <Avatar img={item?.images[0]} className="size-10" /> */}

                  <div className="flex flex-col items-start gap-1">
                    <p className="whitespace-nowrap">{item?.fullName}</p>
                  </div>
                </td>

                <td>
                  <p>{item?.email}</p>
                </td>

                <td>
                  <p className="capitalize">{item?.role}</p>
                </td>

                <td>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button className="rounded-full" size="sm">
                        Toggle Role
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Student</DropdownMenuItem>
                      <DropdownMenuItem>Tutor</DropdownMenuItem>

                      <DropdownMenuItem onClick={() => handleMakeAdmin(item)}>
                        Admin
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
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
