import { Cart, NavBar, NavTwoColumnsLayout } from "@/layout";
import { CheckOutContainer } from "@/pods";

export const CheckOutScene = () => {
  return (
    <>
      <NavBar />
      <NavTwoColumnsLayout>
        <Cart />
        <CheckOutContainer />
      </NavTwoColumnsLayout>
    </>
  );
};
