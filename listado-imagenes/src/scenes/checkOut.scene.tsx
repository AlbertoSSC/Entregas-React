import { Cart, MainTwoColumnsLayout, NavBar } from "@/layout";
import { CheckOutContainer } from "@/pods";

export const CheckOutScene = () => {
  return (
    <>
      <NavBar />
      <MainTwoColumnsLayout>
        <Cart />
        <CheckOutContainer />
      </MainTwoColumnsLayout>
    </>
  );
};
