import React from "react";

import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  List,
} from "@mui/material";

import { ProductInfoContext, TotalPriceContext } from "../../pods/order.context";

export interface SimpleDialogProps {
  open: boolean;
  onClose: () => void;
}

export const SimpleDialog: React.FC<SimpleDialogProps> = (props) => {
  const { productInfo } = React.useContext(ProductInfoContext);
  const { totalPrice } = React.useContext(TotalPriceContext);

  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
    window.location.reload();
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle sx={{ textAlign: "center" }}>
        Gracias por confiar en nosotros
      </DialogTitle>
      <DialogContent sx={{ textAlign: "center" }}>
        Aquí tiene el resumen de su pedido
      </DialogContent>
      <List sx={{ m: "0rem 2rem 0rem" }}>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {productInfo.map((p) => (
              <React.Fragment key={p.id}>
                <tr>
                  <td>{p.name}</td>
                  <td>{p.quantity}</td>
                  <td>{p.price}</td>
                </tr>
                <tr>
                  <td colSpan={3}>
                    <Divider />
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        <h4>Total: {totalPrice}€</h4>
      </List>
      <Button variant="outlined" onClick={handleClose}>
        Cerrar
      </Button>
    </Dialog>
  );
};
