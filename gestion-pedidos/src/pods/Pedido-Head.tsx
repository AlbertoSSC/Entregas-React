import React from "react";

import { Button } from "@mui/material";
import { TotalPriceContext } from "@/common";

export const PedidoHead: React.FC = () => {
  const { totalPrice } = React.useContext(TotalPriceContext);
  return (
    <>
      <div className="head-container">
        <div className="layout-head-container">
          <div className="inputs-head-container">
            <div id="headOrderNumber" className="head-inputs">
              <span>Número de pedido</span>
              <input
                id="inputOrderNumber"
                name="inputOrderNumber"
                type="text"
              />
            </div>
            <div id="headClient" className="head-inputs">
              <span>Cliente</span>
              <input id="inputClient" name="inputClient" type="text" />
            </div>
            <div id="headDate" className="head-inputs">
              <span>Fecha</span>
              <input id="inputDate" name="inputDate" type="date" />
            </div>
          </div>

          <div className="process-order">
            <div className="order-total-price">
              <span>TOTAL : </span>
              <div className="totalPrice">
                <h1>{totalPrice.toFixed(2)}</h1>
                <span>€</span>
              </div>
            </div>

            <div id="orderState" className="orderState">
              <span>X % </span>
              <Button variant="contained">Enviar</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
