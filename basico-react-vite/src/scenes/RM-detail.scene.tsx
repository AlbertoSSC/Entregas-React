import React from "react";

import { CharDetailContainer } from "@/pods";
import { AppLayout, CenteredLayout } from "@/layout";

export const RmDetailScene: React.FC = () => {
  return (
    <CenteredLayout>
      <AppLayout>
        <CharDetailContainer />
      </AppLayout>
    </CenteredLayout>
  );
};
