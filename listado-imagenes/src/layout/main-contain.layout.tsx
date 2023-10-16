import React from "react";

interface Props extends React.PropsWithChildren {}

export const MainTwoColumnsLayout: React.FC<Props> = ({ children }) => {
  return (
    <div id="main-layout" className="twoColumns-layout notCart">
      {children}
    </div>
  );
};
