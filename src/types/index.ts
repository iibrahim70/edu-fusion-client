import { ReactNode } from "react";

export interface IUserPath {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: IUserPath[];
}

export interface IRoute {
  path: string;
  element: ReactNode;
}

export type TSidebarItem =
  | {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
    }
  | undefined;
