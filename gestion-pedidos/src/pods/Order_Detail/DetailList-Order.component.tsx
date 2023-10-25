import React from "react";

import { Divider } from "@mui/material";

import {
  initialState,
  productReducer,
  Action,
  ProductInfoContext,
  TotalPriceContext,
  ValidationButtons,
} from "@/pods";
import { Product } from "@/common";

export const DetailListComponent: React.FC = () => {
  const IVA = 0.21;

  const [productsReduced, dispatch] = React.useReducer(
    productReducer,
    initialState
  );
  const dispatchAction = (action: Action) => {
    dispatch(action);
  };

  const { setTotalPrice } = React.useContext(TotalPriceContext);
  const { setProductInfo } = React.useContext(ProductInfoContext);

  const [isEditing, setIsEditing] = React.useState(-1);
  const [priceInputValue, setPriceInputValue] = React.useState(0);
  const [subtotalPrice, setSubotalPrice] = React.useState(0.0);

  React.useEffect(() => {
    const total = productsReduced.reduce(
      (total, p) => total + p.price * (p.quantity || 0),
      0
    );
    setSubotalPrice(total);
    setTotalPrice(total + total * IVA);

    setProductInfo(productsReduced);

    productsReduced.forEach((p) => {
      const inputQuantity = document.getElementById(`productQuantity-${p.id}`);

      p.quantity > 0
        ? inputQuantity?.classList.add("quantityOn")
        : inputQuantity?.classList.remove("quantityOn");

      if (p.state === "Validado" && p.quantity === 0) {
        p.state = "Pendiente";

        const tr = document.getElementById(`product-row-${p.id}`);
        if (tr) tr.classList.remove("validated-product");
      }
    });
  }, [productsReduced, setProductInfo, setTotalPrice]);

  const setNewQuantity = (productId: number, newQuantity: number) => {
    dispatch({
      type: "SET_QUANTITY",
      id: productId,
      quantity: newQuantity,
    });
  };

  const handleEditPrice = (productId: number) => {
    setIsEditing(productId);
  };

  const handleAcceptNewPrice = (product: Product) => {
    setIsEditing(-1);
    dispatch({
      type: "SET_PRICE",
      id: product.id,
      price: priceInputValue,
    });
  };

  const handleCheckedProduct = (
    event: React.ChangeEvent<HTMLInputElement>,
    productId: number
  ) => {
    const inputChecked = event.target.checked;
    dispatch({
      type: "IS_CHECKED",
      id: productId,
      isChecked: inputChecked,
    });
  };

  return (
    <>
      <h3>LISTA DE PRODUCTOS</h3>
      <ValidationButtons
        productsReduced={productsReduced}
        dispatch={dispatchAction}
      />

      <table>
        <thead className="table-header">
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
          {productsReduced.map((product) => (
            <React.Fragment key={product.id}>
              <tr id={`product-row-${product.id}`} className="">
                <td>
                  <input
                    name="product"
                    value={`inputProductID-${product.id}`}
                    type="checkbox"
                    id="checkbox-input"
                    className=""
                    onChange={(e) => handleCheckedProduct(e, product.id)}
                  />
                </td>

                <td>{product.state}</td>

                <td className="productId">{product.id}</td>
                <td>{product.name}</td>
                <td className="quantity-input-cell">
                  <span>En stock: {product.stock} </span>
                  <input
                    min={0}
                    max={product.stock}
                    type="number"
                    name="productQuantity"
                    className=""
                    id={`productQuantity-${product.id}`}
                    defaultValue={productsReduced[product.id]?.quantity || 0}
                    onChange={(e) => {
                      setNewQuantity(product.id, parseInt(e.target.value));
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
                        onClick={() => handleAcceptNewPrice(product)}
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
                        onClick={() => handleEditPrice(product.id)}
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
              IVA: {(parseFloat(subtotalPrice.toFixed(2)) * IVA).toFixed(2)} €
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
