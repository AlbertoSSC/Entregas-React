import { productStock } from "./Product-MockStock";
import { ProductState, mappedMockProducts } from "./Product.mapper";

export const initialState: ProductState[] = mappedMockProducts(productStock);

export type Action =
  | { type: "SET_QUANTITY"; id: number; quantity: number }
  | { type: "SET_STATE"; id: number; state: string }
  | { type: "IS_CHECKED"; id: number; isChecked: boolean }
  | { type: "SET_PRICE"; id: number; price: number };

export const productReducer = (
  prod: ProductState[],
  action: Action
): ProductState[] => {
  switch (action.type) {
    case "SET_QUANTITY": {
      return prod.map((p) => {
        if (p.id === action.id) {
          p.quantity = action.quantity;
        }
        return p;
      });
    }
    case "SET_STATE": {
      return prod.map((p) => {
        if (p.id === action.id) {
          (p.state = action.state), (p.isChecked = false);
        }
        return p;
      });
    }
    case "IS_CHECKED": {
      return prod.map((p) => {
        if (p.id === action.id) {
          p.isChecked = action.isChecked;
        }
        return p;
      });
    }
    case "SET_PRICE": {
      return prod.map((p) => {
        if (p.id === action.id) {
          p.price = action.price;
        }
        return p;
      });
    }
    default: {
      throw Error("Invalid action type");
    }
  }
};
