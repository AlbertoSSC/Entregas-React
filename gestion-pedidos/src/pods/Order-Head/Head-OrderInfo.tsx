import React from "react";

import { fetchingDataClient } from "@/common";

export const HeadOrderInfo: React.FC = () => {
  fetchingDataClient();

  return (
    <>
      <div className="head-container">
        <div className="inputs-head-container">
          <div id="headOrderNumber" className="head-inputs">
            <span>Número de pedido</span>
            <input id="inputOrderNumber" name="inputOrderNumber" type="text" />
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
      </div>
    </>
  );
};
