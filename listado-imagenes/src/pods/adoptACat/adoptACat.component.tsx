import React from "react";

import { catInfoToVM, catMockInfo } from "@/pods";
import { AnimalContext, addingBorderToSelection, checkingPet } from "@/common";

export const AdoptACatComponent: React.FC = () => {
  const catListToBeAdopt = catMockInfo.map((catInfo) => catInfoToVM(catInfo));

  const { selectedCats, setSelectedCats } = React.useContext(AnimalContext);

  React.useEffect(() => {
    addingBorderToSelection(selectedCats);
  }, [selectedCats]);

  const noPetsToAdopt = catListToBeAdopt.every((dog) => !dog.toBeAdopted);

  return (
    <>
      <div className="pet-list">
        {noPetsToAdopt && (
          <h3>No tenemos amig@s gatos para adoptar actualmente</h3>
        )}
        {catListToBeAdopt.map((cat) => {
          if (cat.toBeAdopted) {
            return (
              <div key={cat.id} id={cat.id} className="pet-card">
                <div className="pet-card-image">
                  <img src={cat.picUrl} alt={cat.title} />
                </div>
                <h3 className="pet-card-name">{cat.title}</h3>

                <div className="divider-line" />

                <label className="adoptChecker">
                  <input
                    type="checkbox"
                    checked={selectedCats[cat.id] || false}
                    onChange={(event) => checkingPet(event, setSelectedCats)}
                    name="adopt pet"
                    id={cat.id}
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
