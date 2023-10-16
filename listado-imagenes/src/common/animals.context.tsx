import React from "react";

interface ContextModel {
  selectedCats: any;
  setSelectedCats: (state: any) => void;

  selectedDogs: any;
  setSelectedDogs: (state: any) => void;
}

export const AnimalContext = React.createContext<ContextModel>({
  selectedCats: {},
  setSelectedCats: () => {},

  selectedDogs: {},
  setSelectedDogs: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const AnimalProvider: React.FC<Props> = (props) => {
  const [selectedCats, setSelectedCats] = React.useState<
    ContextModel["selectedCats"]
  >({});
  const [selectedDogs, setSelectedDogs] = React.useState<
    ContextModel["selectedDogs"]
  >({});

  return (
    <AnimalContext.Provider
      value={{ selectedCats, selectedDogs, setSelectedCats, setSelectedDogs }}
    >
      {props.children}
    </AnimalContext.Provider>
  );
};
