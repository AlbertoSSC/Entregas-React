import React from "react";
import { ProductState } from "../common";

interface Props {
  children: React.ReactNode;
}

/////////////////////////// TOTAL PRICE

interface TotalPriceContextModel {
  totalPrice: number;
  setTotalPrice: (totalPrice: number) => void;
}

export const TotalPriceContext = React.createContext<TotalPriceContextModel>({
  totalPrice: 0,
  setTotalPrice: () => {},
});

export const TotalPriceProvider: React.FC<Props> = (props) => {
  const [totalPrice, setTotalPrice] =
    React.useState<TotalPriceContextModel["totalPrice"]>(0);

  return (
    <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
      {props.children}
    </TotalPriceContext.Provider>
  );
};

/////////////////////////// PRODUCT INFO

interface ProductInfoContextModel {
  productInfo: ProductState[];
  setProductInfo: React.Dispatch<React.SetStateAction<ProductState[]>>;
}

export const ProductInfoContext = React.createContext<ProductInfoContextModel>({
  productInfo: [],
  setProductInfo: () => [],
});

export const ProductInfoProvider: React.FC<Props> = (props) => {
  const [productInfo, setProductInfo] = React.useState<ProductState[]>([]);

  return (
    <ProductInfoContext.Provider value={{ productInfo, setProductInfo }}>
      {props.children}
    </ProductInfoContext.Provider>
  );
};