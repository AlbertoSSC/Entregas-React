import React from "react";

import { RmListContainer } from "@/pods";
import { AppLayout, CenteredLayout } from "@/layout";

export const RmListScene: React.FC = () => {
  return (
    <CenteredLayout>
      <AppLayout>
        <RmListContainer />
      </AppLayout>
    </CenteredLayout>
  );
};
