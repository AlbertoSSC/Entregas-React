// PedidoList.tsx
import React from "react";

import { Divider } from "@mui/material";

import {
  DisplayValidatedTextContext,
  IsCheckedContext,
  Product,
  TotalPriceContext,
  productStock,
} from "@/common";

import { ValidationButtons } from "@/pods";

const iva = 0.21;

export const PedidoDetail: React.FC = () => {
  const { setTotalPrice } = React.useContext(TotalPriceContext);
  const { isChecked, setIsChecked } = React.useContext(IsCheckedContext);
  const [productValidation, setProductValidation] = React.useState<{
    [id: number]: string;
  }>({});
  const { displayValidatedText } = React.useContext(
    DisplayValidatedTextContext
  );

  const [products, setProduct] = React.useState(productStock);

  const [isEditing, setIsEditing] = React.useState(-1);
  const [priceInputValue, setPriceInputValue] = React.useState(0);

  const [productQuantity, setProductQuantity] = React.useState<{
    [id: number]: number;
  }>({});

  const [subtotalPrice, setSubotalPrice] = React.useState(0.0);

  React.useEffect(() => {
    const totalPrice = products.reduce(
      (total, product) =>
        total + product.price * (productQuantity[product.id] || 0),
      0
    );
    console.log(productQuantity, totalPrice);

    setSubotalPrice(totalPrice);
    setTotalPrice(totalPrice * (iva + 1));
  }, [productQuantity, products]);

  const updatingQuantity = (value: string, product: Product) => {
    const updatedQuantity: { [key: number]: number } = {
      ...productQuantity,
    };
    updatedQuantity[product.id] = parseFloat(value);
    return updatedQuantity;
  };

  const handleEditClick = (productId: number) => {
    setIsEditing(productId);
  };

  const handleAcceptClick = (product: Product) => {
    setIsEditing(-1);
    setProduct((prevProduct) =>
      prevProduct.map((p) =>
        p.id === product.id ? { ...p, price: priceInputValue } : p
      )
    );
  };

  const handleCheckedProduct = (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: number
  ) => {
    const inputChecked = event.target.checked;

    const updatedValidation = { ...productValidation };
    updatedValidation[productId] = inputChecked ? "Validado" : "Pendiente";

    setProductValidation(updatedValidation);

    console.log("Producto ID:", productId);
    console.log("Input Checked:", inputChecked);

    if (isChecked.length !== 0) {
      setIsChecked((prevIsChecked) => {
        const indexIsChecked = prevIsChecked.findIndex(
          (p) => p.id === productId
        );

        if (indexIsChecked !== -1) {
          const updatedIsChecked = [...prevIsChecked];
          updatedIsChecked[indexIsChecked] = {
            id: productId,
            checked: inputChecked,
          };
          return updatedIsChecked;
        } else {
          return [...prevIsChecked, { id: productId, checked: inputChecked }];
        }
      });
    } else {
      setIsChecked([{ id: productId, checked: inputChecked }]);
    }
    console.log("Esta cheado el producto " + productId + ": " + inputChecked);
  };
  console.log("Estado isChecked después de la actualización:", isChecked);

  const renderValidationText = (id: number): string => {
    const validationFromProduct = productValidation[id] || "Pendiente";
    return isChecked.some((p) => p.checked && p.id === id)
      ? displayValidatedText
      : validationFromProduct;
  };
  return (
    <>
      <h3>LISTA DE PRODUCTOS</h3>
      <ValidationButtons />

      <table>
        <thead>
          <tr>
            <th>Selección</th>
            <th>Estado</th>
            <th>Id</th>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>

        <tbody>
          {/* mapper START*/}
          {products.map((product) => (
            <React.Fragment key={product.id}>
              <tr key={product.id}>
                <td>
                  <input
                    type="checkbox"
                    onChange={(e) => handleCheckedProduct(e, product.id)}
                  />
                </td>

                <td>{renderValidationText(product.id)}</td>

                <td className="productId">{product.id}</td>
                <td>{product.name}</td>
                <td className="quantity-input-cell">
                  <span>En stock: {product.stock} </span>
                  <input
                    min={0}
                    type="number"
                    name="productQuantity"
                    id={`productQuantity-${product.id}`}
                    defaultValue={0}
                    onChange={(e) => {
                      setProductQuantity(
                        updatingQuantity(e.target.value, product)
                      );
                    }}
                  />
                </td>
                <td>
                  {isEditing === product.id ? (
                    <div key={product.id} className="price-editing-input">
                      <input
                        min={0}
                        type="number"
                        id="price"
                        step="0.01"
                        defaultValue={product.price}
                        onChange={(e) =>
                          setPriceInputValue(parseFloat(e.target.value))
                        }
                      />
                      <button
                        id="accept-price"
                        onClick={() => handleAcceptClick(product)}
                      >
                        Aceptar
                      </button>
                      <button
                        id="cancel-price"
                        onClick={() => setIsEditing(-1)}
                      >
                        Cancelar
                      </button>
                    </div>
                  ) : (
                    <div className="price-cell">
                      <span style={{ display: "inline" }}>
                        {product.price.toFixed(2)} €
                      </span>

                      <button
                        id="price-edit-button"
                        style={{
                          marginLeft: "0.5rem",
                          display:
                            isEditing === product.id ? "none" : "inline-block",
                        }}
                        onClick={() => handleEditClick(product.id)}
                      >
                        &#9998; Editar
                      </button>
                    </div>
                  )}
                </td>
              </tr>

              <tr>
                <td colSpan={6}>
                  <Divider
                    sx={{ backgroundColor: "#555", width: "98%" }}
                    variant="middle"
                  />
                </td>
              </tr>
            </React.Fragment>
          ))}

          {/* mapper END */}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={5}></td>
            <td className="subtotal-cell">
              Subtotal: {subtotalPrice.toFixed(2)} €
            </td>
          </tr>
          <tr>
            <td colSpan={5}></td>
            <td className="subtotal-cell">
              IVA: {(parseFloat(subtotalPrice.toFixed(2)) * iva).toFixed(2)} €
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
