export const addingBorderToSelection = (selectedPet: { [key: string]: boolean }) => {
    const petCards = document.querySelectorAll(".pet-card");

    petCards.forEach((petCard) => {
      const id = petCard.getAttribute("id");
      if (id && selectedPet[id]) {
        petCard.classList.add("selected-pet");
      } else {
        petCard.classList.remove("selected-pet");
      }
    });
  };
