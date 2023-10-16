import React from "react";

interface Props extends React.PropsWithChildren {}

export const NavTwoColumnsLayout: React.FC<Props> = ({ children }) => {
  return (
    <div id="nav-layout" className="navTwoColumns-layout">
      {children}
    </div>
  );
};
