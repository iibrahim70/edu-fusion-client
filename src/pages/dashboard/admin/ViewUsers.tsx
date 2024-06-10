import {
  useGetUsersQuery,
  useUpdateUserRoleMutation,
} from "@/redux/services/userApi";
import { Button } from "@/components/ui/button";
import { IUser } from "@/types";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useDebounce } from "use-debounce";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  handleMakeStudent,
  handleMakeAdmin,
  handleMakeInstructor,
} from "@/handlers";

const ViewUsers = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [debouncedValue] = useDebounce(searchText, 1000);

  const [updateUserRole] = useUpdateUserRoleMutation();
  const { isLoading, error, data } = useGetUsersQuery({
    searchTerm: debouncedValue,
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
        Error...
      </div>
    );

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
            {data?.data?.map((item: IUser, index: number) => (
              <tr key={item?._id} className="text-sm">
                <td>{index + 1}</td>

                <td className="flex items-center gap-5">
                  <Avatar className="size-14">
                    <AvatarImage
                      src={item?.avatar}
                      alt={item?.fullName}
                      className="object-cover"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>

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
                        Action
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem
                        onClick={() => handleMakeStudent(item, updateUserRole)}
                      >
                        Student
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        onClick={() =>
                          handleMakeInstructor(item, updateUserRole)
                        }
                      >
                        Instructor
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        onClick={() => handleMakeAdmin(item, updateUserRole)}
                      >
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
