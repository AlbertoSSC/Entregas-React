import React, { Dispatch, SetStateAction } from "react";

interface ContextModel {
  toggleCart: boolean;
  setToggleCart: Dispatch<SetStateAction<boolean>>;
}
export const ToggleCartContext = React.createContext<ContextModel>({
  toggleCart: false,
  setToggleCart: () => {},
});

interface Props extends React.PropsWithChildren {}

export const ToggleCartProvider: React.FC<Props> = ({ children }) => {
  const [toggleCart, setToggleCart] = React.useState(false);

  return (
    <ToggleCartContext.Provider value={{ toggleCart, setToggleCart }}>
      {children}
    </ToggleCartContext.Provider>
  );
};
