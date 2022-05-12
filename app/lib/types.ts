import { ReactNode } from "react";

export type Styles = {
  readonly [key: string]: string;
}


export type WithChildren = {
  children: ReactNode;
}
