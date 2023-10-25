export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
}

export const productStock: Product[] = [
  { id: 1, name: "Producto número 1", price: 150, stock: 15 },
  { id: 2, name: "Producto número 2", price: 50, stock: 10 },
  { id: 3, name: "Producto número 3", price: 100, stock: 8 },
  { id: 4, name: "Producto número 4", price: 200, stock: 5 },
  // { id: 5, name: "Producto número 5", price: 250, stock: 2 },
  // { id: 6, name: "Producto número 6", price: 300, stock: 11 },
  // { id: 7, name: "Producto número 7", price: 350, stock: 6 },
  // { id: 8, name: "Producto número 8", price: 400, stock: 25 },
];

const formatedDate = new Date().toISOString().split("T")[0];
export const clientInfo = {
  orderNumber: "orNum1235Fd554-34es",
  clientName: "Organization & Co",
  orderDate: formatedDate,
};
