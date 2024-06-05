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

export type TSidebarItem =
  | { label: string; path: string; children?: TSidebarItem[] }
  | undefined;
