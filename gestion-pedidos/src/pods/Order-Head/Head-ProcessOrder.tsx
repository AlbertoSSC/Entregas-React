import React from "react";

import { Button } from "@mui/material";

import { ProgressBar, SimpleDialog, fetchingDataClient } from "@/common";
import { ProductInfoContext, TotalPriceContext } from "@/pods";

export const HeadProcessOrder: React.FC = () => {
  fetchingDataClient();

  const { totalPrice } = React.useContext(TotalPriceContext);
  const { productInfo } = React.useContext(ProductInfoContext);

  const [sendButtonDisable, setSendButtonDisable] = React.useState(true);
  const [progressPercentage, setProgressPercentage] = React.useState(100);
  const [open, setOpen] = React.useState(false);

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="head-container">
        <div className="process-order">
          <div className="order-total-price">
            <span>TOTAL : </span>
            <div className="totalPrice">
              <h1>{totalPrice.toFixed(2)}</h1>
              <span>€</span>
            </div>
          </div>

          <div id="orderState" className="orderState">
            <ProgressBar progressPercentage={progressPercentage} />

            <Button
              disabled={sendButtonDisable}
              variant="contained"
              onClick={handleClickOpen}
            >
              Enviar
            </Button>
            <SimpleDialog open={open} onClose={handleClose} />
          </div>
        </div>
      </div>
    </>
  );
};
