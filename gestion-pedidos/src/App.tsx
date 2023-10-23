import "./App.scss";

import { TotalPriceProvider, ProductInfoProvider } from "@/common";
import { PedidoContainer } from "@/pods";

function App() {
  return (
    <>
      <TotalPriceProvider>
        <ProductInfoProvider>
          <PedidoContainer />
        </ProductInfoProvider>
      </TotalPriceProvider>
    </>
  );
}

export default App;
