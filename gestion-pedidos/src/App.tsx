import "./App.scss";

import {
  ProductInfoProvider,
  TotalPriceProvider,
  OrderContainer,
} from "@/pods";

function App() {
  return (
    <>
      <TotalPriceProvider>
        <ProductInfoProvider>
          <OrderContainer />
        </ProductInfoProvider>
      </TotalPriceProvider>
    </>
  );
}

export default App;
