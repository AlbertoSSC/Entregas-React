import "./App.scss";

import {
  DisplayValidatedTextProvider,
  IsCheckedProvider,
  TotalPriceProvider,
} from "@/common";
import { PedidoContainer } from "@/pods";

function App() {
  return (
    <>
      <TotalPriceProvider>
        <IsCheckedProvider>
          <DisplayValidatedTextProvider>
            <PedidoContainer />
          </DisplayValidatedTextProvider>
        </IsCheckedProvider>
      </TotalPriceProvider>
    </>
  );
}

export default App;
