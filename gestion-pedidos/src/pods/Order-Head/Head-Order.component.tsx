import React from "react";

import { HeadOrderInfo } from "./Head-OrderInfo";
import { HeadProcessOrder } from "./Head-ProcessOrder";
import { TwoColumnsGridLayout } from "@/layout/Head-2ColumnsGrid";

export const HeadOrderComponent: React.FC = () => {
  return (
    <>
      <TwoColumnsGridLayout>
        <HeadOrderInfo />
        <HeadProcessOrder />
      </TwoColumnsGridLayout>
    </>
  );
};
