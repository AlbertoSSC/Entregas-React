import { Cart, MainTwoColumnsLayout, NavBar } from "@/layout";
import { AdoptACatContainer } from "@/pods";

export const CatScene = () => {
  return (
    <>
      <NavBar />
      <MainTwoColumnsLayout>
        <AdoptACatContainer />
        <Cart />
      </MainTwoColumnsLayout>
    </>
  );
};
