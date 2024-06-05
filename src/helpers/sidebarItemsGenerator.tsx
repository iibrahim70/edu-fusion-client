import { IUserPath, TSidebarItem } from "@/types";

const sidebarItemsGenerator = (items: IUserPath[], role: string) => {
  console.log(items, role);
  const sidebarItems = items?.reduce((acc: TSidebarItem[], item) => {
    if (item?.path && item?.label) {
      acc.push({
        label: item?.label,
        path: `/${role}/dashboard/${item?.path}`,
      });
    }

    if (item?.children) {
      acc.push({
        key: item?.label,
        label: item?.label,
        children: item?.children?.map((child) => {
          if (child.label) {
            return {
              label: child.label,
              path: `/${role}/${child.path}`,
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return sidebarItems;
};

export default sidebarItemsGenerator;
