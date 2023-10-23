import React from "react";

import { Box, Button, LinearProgress, Typography } from "@mui/material";
import { ProductInfoContext, TotalPriceContext } from "@/common";

export const PedidoHead: React.FC = () => {
  const { totalPrice } = React.useContext(TotalPriceContext);

  const [sendButtonDisable, setSendButtonDisable] = React.useState(true);

  const { productInfo } = React.useContext(ProductInfoContext);

  const [progressPercentage, setProgressPercentage] = React.useState(10);

  React.useEffect(() => {
    const calculatingProgressPercentage = () => {
      if (productInfo.length === 0) {
        return 0;
      }
      const percentage100 = productInfo.length;
      const progressPercentage = productInfo.filter(
        (p) => p.state === "Validado"
      );
      return (progressPercentage.length / percentage100) * 100;
    };
    setProgressPercentage(calculatingProgressPercentage());
    setSendButtonDisable(!(calculatingProgressPercentage() === 100));
  }, [productInfo]);

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
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 2 }}>
                  <LinearProgress
                    sx={{ height: "15px", borderRadius: "3px" }}
                    variant="determinate"
                    value={progressPercentage}
                  />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="body1" textAlign="center">{`${Math.round(
                    progressPercentage
                  )}% validado`}</Typography>
                </Box>
              </Box>
              <Button disabled={sendButtonDisable} variant="contained">
                Enviar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
