import React from "react";
import { DetailListComponent, HeadOrderComponent } from "@/pods";

export const OrderContainer: React.FC = () => {
  return (
    <>
      <div className="title-order">
        <h1>Orden de pedido</h1>
        <span>Debe VALIDAR toda la lista de productos para porceder a su envío</span>
      </div>
      <HeadOrderComponent />
      <DetailListComponent />
    </>
  );
};
