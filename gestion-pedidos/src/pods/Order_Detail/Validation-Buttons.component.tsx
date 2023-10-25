import React from "react";

import { Button } from "@mui/material";
import { Action, ProductState, emptyAllCheckboxes } from "@/common";

interface Props {
  productsReduced: ProductState[];
  dispatch: React.Dispatch<Action>;
}

export const ValidationButtons: React.FC<Props> = (props) => {
  const [isEnableValidation, setIsEnableValidation] = React.useState(true);

  React.useEffect(() => {
    const isSomeChecked = props.productsReduced.some((p) => p.isChecked);
    setIsEnableValidation(!isSomeChecked);

  }, [props.productsReduced]);

  const handleIsValidated = () => {
    const quantityWarning = document.getElementById("quantity-warning");

    props.productsReduced.forEach((p) => {
      const quantityInput = document.getElementById(`productQuantity-${p.id}`);
      const tr = document.getElementById(`product-row-${p.id}`);

      if (p.isChecked && p.quantity > 0) {
        props.dispatch({
          type: "SET_STATE",
          id: p.id,
          state: "Validado",
        });

        tr?.classList.add("validated-product");
        quantityInput?.classList.remove("quantityZero");
      } else if (p.isChecked && p.quantity === 0) {
        quantityInput?.classList.add("quantityZero");
        p.isChecked = !p.isChecked;
      }
    });

    const elementeQuantityZero =
      document.getElementsByClassName("quantityZero");
    elementeQuantityZero.length === 0
      ? quantityWarning?.classList.add("hide")
      : quantityWarning?.classList.remove("hide");

    emptyAllCheckboxes();
  };

  const handleIsWaiting = () => {
    props.productsReduced.forEach((p) => {
      if (p.isChecked) {
        props.dispatch({
          type: "SET_STATE",
          id: p.id,
          state: "Pendiente",
        });

        const tr = document.getElementById(`product-row-${p.id}`);
        if (tr) tr.classList.remove("validated-product");
      }
    });

    emptyAllCheckboxes();
  };

  return (
    <>
      <div className="validation-buttons-container">
        <div className="validation-buttons">
          <Button
            variant="outlined"
            className="validation-button"
            disabled={isEnableValidation}
            onClick={handleIsValidated}
          >
            Validar
          </Button>
          <Button
            variant="outlined"
            className="reject-button"
            disabled={isEnableValidation}
            onClick={handleIsWaiting}
          >
            Invalidar
          </Button>
        </div>
        <div id="quantity-warning" className="quantity-warning hide">
          <p>No olvide indicar una cantidad antes de validar los productos</p>
        </div>
      </div>
    </>
  );
};
