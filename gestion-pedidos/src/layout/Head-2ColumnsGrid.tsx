import React from "react";

interface Props extends React.PropsWithChildren {}

export const TwoColumnsGridLayout: React.FC<Props> = (props) => {
  const { children } = props;
  return <div className="layout-head-container ">{children}</div>;
};
