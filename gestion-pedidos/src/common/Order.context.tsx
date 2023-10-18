import React from "react";

interface TotalPriceContextModel {
  totalPrice: number;
  setTotalPrice: (totalPrice: number) => void;
}

export const TotalPriceContext = React.createContext<TotalPriceContextModel>({
  totalPrice: 0,
  setTotalPrice: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const TotalPriceProvider: React.FC<Props> = (props) => {
  const [totalPrice, setTotalPrice] =
    React.useState<TotalPriceContextModel["totalPrice"]>(0);

  return (
    <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      {props.children}
    </TotalPriceContext.Provider>
  );
};

////

interface IsCheckedContextModel {
  isChecked: { id: number; checked: boolean }[];
  setIsChecked: React.Dispatch<
    React.SetStateAction<{ id: number; checked: boolean }[]>
  >;
}

export const IsCheckedContext = React.createContext<IsCheckedContextModel>({
  isChecked: [{ id: 0, checked: false }],
  setIsChecked: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const IsCheckedProvider: React.FC<Props> = (props) => {
  const [isChecked, setIsChecked] = React.useState<
    IsCheckedContextModel["isChecked"]
  >([{ id: 0, checked: false }]);

  return (
    <IsCheckedContext.Provider value={{ isChecked, setIsChecked }}>
      {props.children}
    </IsCheckedContext.Provider>
  );
};

//

interface DisplayValidatedTextContextModel {
  displayValidatedText: string;
  setDisplayValidatedText: React.Dispatch<React.SetStateAction<string>>;
}

export const DisplayValidatedTextContext =
  React.createContext<DisplayValidatedTextContextModel>({
    displayValidatedText: "Pendiente",
    setDisplayValidatedText: () => {},
  });

interface Props {
  children: React.ReactNode;
}

export const DisplayValidatedTextProvider: React.FC<Props> = (props) => {
  const [displayValidatedText, setDisplayValidatedText] =
    React.useState<DisplayValidatedTextContextModel["displayValidatedText"]>(
      "PendienteContexto"
    );

  return (
    <DisplayValidatedTextContext.Provider
      value={{ displayValidatedText, setDisplayValidatedText }}
    >
      {props.children}
    </DisplayValidatedTextContext.Provider>
  );
};
