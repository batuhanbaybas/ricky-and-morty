import React from "react";

type ILayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ILayoutProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default layout;
