export const checkingPet = (
  event: React.ChangeEvent<HTMLInputElement>,
  setSelectedPet: React.Dispatch<any>
) => {
  const id = event.target.id;

  setSelectedPet((prevSelectedDogs) => {
    const updatedSelection = { ...prevSelectedDogs };
    updatedSelection[id] = !updatedSelection[id];

    if (!updatedSelection[id]) {
      delete updatedSelection[id];
    }

    return updatedSelection;
  });
};
