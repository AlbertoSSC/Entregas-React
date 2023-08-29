import React from "react";

import { DetailContainer } from "@/pods";
import { AppLayout, CenteredLayout } from "@/layout";

export const DetailScene: React.FC = () => {
  return (
    <CenteredLayout>
      <AppLayout>
        <DetailContainer />
      </AppLayout>
    </CenteredLayout>
  );
};
