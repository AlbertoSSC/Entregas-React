import { Product } from ".";

export interface ProductState {
  id: number;
  name: string;
  price: number;
  stock: number;

  quantity: number;
  state: string;
  isChecked: boolean;
}

export const mappedMockProducts = (productStock: Product[]): ProductState[] => {
  return productStock.map((p) => {
    return {
      id: p.id,
      name: p.name,
      price: p.price,
      stock: p.stock,
      quantity: 0,
      state: "Pendiente",
      isChecked: false,
    };
  });
};
