import React from "react";

import { AppLayout, CenteredLayout } from "@/layout";
import { DetailContainer } from "@/pods";

export const DetailScene: React.FC = () => {
  return (
    <CenteredLayout>
      <AppLayout>
        <DetailContainer />
      </AppLayout>
    </CenteredLayout>
  );
};
