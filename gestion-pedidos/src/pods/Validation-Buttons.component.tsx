import React from "react";

import { Button } from "@mui/material";
import { Action, ProductState } from "@/common";

interface Props {
  productsReduced: ProductState[];
  dispatch: React.Dispatch<Action>;
}

export const ValidationButtons: React.FC<Props> = (props) => {
  const [isEnableValidation, setIsEnableValidation] = React.useState(true);

  React.useEffect(() => {
    const isSomeChecked = props.productsReduced.some((p: ProductState) => {
      return p.isChecked;
    });
    setIsEnableValidation(!isSomeChecked);

    const isQuantityZero = () => {
      props.productsReduced.map((p) => {
        if (p.state === "Validado" && p.quantity === 0) {
          p.state = "Pendiente";

          const tr = document.getElementById(`product-row-${p.id}`);
          if (tr) tr.classList.remove("validated-product");
        }
      });
    };
    isQuantityZero();
  }, [props.productsReduced]);

  const handleIsValidated = () => {
    const quantityWarning = document.getElementById("quantity-warning");

    props.productsReduced.map((p) => {
      const tr = document.getElementById(`product-row-${p.id}`);
      const quantityInput = document.getElementById(`productQuantity-${p.id}`);

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

    props.productsReduced.some((p) => p.quantity === 0)
      ? quantityWarning?.classList.remove("hide")
      : quantityWarning?.classList.add("hide");

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      const inputElement = checkbox as HTMLInputElement;
      inputElement.checked = false;
    });
  };

  const handleIsWaiting = () => {
    props.productsReduced.map((p) => {
      if (p.isChecked) {
        props.dispatch({
          type: "SET_STATE",
          id: p.id,
          state: "Pendiente",
        });

        const tr = document.getElementById(`product-row-${p.id}`);
        if (tr) tr.classList.remove("validated-product");
      }
      return p;
    });

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      const inputElement = checkbox as HTMLInputElement;
      inputElement.checked = false;
    });
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
