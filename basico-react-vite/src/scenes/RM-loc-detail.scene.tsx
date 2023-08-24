import React from "react";

import { LocationDetailContainer } from "@/pods";
import { AppLayout, CenteredLayout } from "@/layout";

export const RmDetailLocationScene: React.FC = () => {
  return (
    <CenteredLayout>
      <AppLayout>
        <LocationDetailContainer />
      </AppLayout>
    </CenteredLayout>
  );
};
