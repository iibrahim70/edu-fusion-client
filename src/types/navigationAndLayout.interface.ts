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

export type TBarItem =
  | { label: string; path: string; children?: TBarItem[] }
  | undefined;
