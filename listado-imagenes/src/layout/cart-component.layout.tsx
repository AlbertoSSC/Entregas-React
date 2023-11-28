import React from "react";

import { Divider } from "@mui/material";

import { AnimalContext } from "@/common";
import { catMockInfo, dogMockInfo } from "@/pods";

interface Props extends React.PropsWithChildren {}

export const Cart: React.FC<Props> = (props) => {
  const { children } = props;

  const { selectedCats, setSelectedCats, selectedDogs, setSelectedDogs } =
    React.useContext(AnimalContext);

  const selectedAnimals = { ...selectedCats, ...selectedDogs };

  const removeAnimal = (id: string, isCat: boolean) => {
    const setSelectedAnimals = isCat ? setSelectedCats : setSelectedDogs;
    setSelectedAnimals((prevSelectedAnimals) => {
      const newSelectedAnimals = { ...prevSelectedAnimals };
      delete newSelectedAnimals[id];
      return newSelectedAnimals;
    });
  };

  return (
    <React.Fragment>
      <div id="cart" className="cart hide">
        {!selectedAnimals ||
        Object.values(selectedAnimals).every((animal) => !animal) ? (
          <i>
            <p className="basket-text" style={{ color: "darkGrey" }}></p>
          </i>
        ) : (
          Object.keys(selectedAnimals).map((selectAnimal) => {
            const selectedInfo =
              catMockInfo.find((cat) => cat.id === selectAnimal) ||
              dogMockInfo.find((dog) => dog.id === selectAnimal);

            if (selectedInfo) {
              return (
                <React.Fragment key={selectAnimal}>
                  <div className="cart-item">
                    <div className="cart-pet-info">
                      <img
                        src={selectedInfo.picUrl}
                        alt="adopting animal image"
                      />
                      <button
                        type="button"
                        className="delete-button"
                        onClick={() => {
                          removeAnimal(
                            selectAnimal,
                            !!selectedCats[selectAnimal]
                          );
                        }}
                        aria-label="delete-button"
                      >
                        <span></span>
                      </button>
                    </div>
                    <p>{selectedInfo.title}</p>
                    <Divider style={{ backgroundColor: "lightgray" }} />
                  </div>
                </React.Fragment>
              );
            } else {
              return null;
            }
          })
        )}

        <button
          className="cart-clear"
          onClick={() => {
            setSelectedCats({});
            setSelectedDogs({});
          }}
        >
          Borrar selección
        </button>
      </div>
      {children}
    </React.Fragment>
  );
};
