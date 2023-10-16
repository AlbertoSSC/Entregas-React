import { Cart, MainTwoColumnsLayout, NavBar } from "@/layout";
import { AdoptADogContainer } from "@/pods";

export const DogScene = () => {
  return (
    <>
      <NavBar />
      <MainTwoColumnsLayout>
        <AdoptADogContainer />
        <Cart />
      </MainTwoColumnsLayout>
    </>
  );
};
