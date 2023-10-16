import React from "react";

import { dogInfoToVM, dogMockInfo } from "@/pods";
import { AnimalContext, addingBorderToSelection, checkingPet } from "@/common";

export const AdoptADogComponent: React.FC = () => {
  const dogListToBeAdopt = dogMockInfo.map((dogInfo) => dogInfoToVM(dogInfo));

  const { selectedDogs, setSelectedDogs } = React.useContext(AnimalContext);

  React.useEffect(() => {
    addingBorderToSelection(selectedDogs);
  }, [selectedDogs]);

  const noPetsToAdopt = dogListToBeAdopt.every((dog) => !dog.toBeAdopted);

  return (
    <>
      <div className="pet-list">
        {noPetsToAdopt && (
          <h3>No tenemos amig@s perros para adoptar actualmente</h3>
        )}

        {dogListToBeAdopt.map((dog) => {
          if (dog.toBeAdopted) {
            return (
              <div key={dog.id} id={dog.id} className="pet-card">
                <div className="pet-card-image">
                  <img src={dog.picUrl} alt={dog.title} />
                </div>
                <h3 className="pet-card-name">{dog.title}</h3>

                <div className="divider-line"/>

                <label className="adoptChecker">
                  <input
                    type="checkbox"
                    checked={selectedDogs[dog.id] || false}
                    onChange={(event) => checkingPet(event, setSelectedDogs)}
                    name="adopt pet"
                    id={dog.id}
                  />
                  <span>Adoptar</span>
                </label>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
};
