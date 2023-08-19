import React from "react";

import { ListContainer } from "@/pods";
import { AppLayout, CenteredLayout } from "@/layout";

export const ListScene: React.FC = () => {
  return (
    <CenteredLayout>
      <AppLayout>
        <ListContainer />
      </AppLayout>
    </CenteredLayout>
  );
};
