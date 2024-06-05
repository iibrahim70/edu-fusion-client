import { ReactNode } from "react";

export interface IUserPath {
  label?: string;
  path: string;
  element: ReactNode;
  children?: IUserPath[];
}

export interface IRoute {
  path: string;
  element: ReactNode;
}

export interface ISidebarItem {
  label: string;
  path: string;
  children?: ISidebarItem[];
}
