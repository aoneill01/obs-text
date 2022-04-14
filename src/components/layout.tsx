import React, { ReactNode } from "react";
import "./layout.css";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return <main>{children}</main>;
};

export default Layout;
