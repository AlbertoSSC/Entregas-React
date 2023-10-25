import React from "react";
import { DetailListComponent, HeadOrderComponent } from "@/pods";

export const OrderContainer: React.FC = () => {
  return (
    <>
      <div>
        <h1>Orden de pedido</h1>
      </div>
      <HeadOrderComponent />
      <DetailListComponent />
    </>
  );
};
