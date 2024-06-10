import { Button } from "@/components/ui/button";
import data from "../../../../public/data.json";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const ManageNotes = () => {
  return (
    <main className="w-full max-lg:overflow-x-scroll">
      <table className="w-full">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Title</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item, index: number) => (
            <tr key={item?.id} className="text-sm">
              <td>{index + 1}</td>

              <td>
                <p>{item?.title}</p>
              </td>

              <td>
                <p>{item?.priority}</p>
              </td>

              <td>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="rounded-full" size="sm">
                      Manage
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Update</DropdownMenuItem>

                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default ManageNotes;
