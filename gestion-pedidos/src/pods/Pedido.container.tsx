// App.tsx
import React from "react";
import { PedidoDetail, PedidoHead } from "@/pods";

export const PedidoContainer: React.FC = () => {
  return (
    <>
      <div>
        <h1>Pedido</h1>
      </div>
      <PedidoHead />
      <PedidoDetail />
    </>
  );
};
