import React from "react";

import { EpisodeDetailContainer } from "@/pods";
import { AppLayout, CenteredLayout } from "@/layout";

export const RmDetailEpisodeScene: React.FC = () => {
  return (
    <CenteredLayout>
      <AppLayout>
        <EpisodeDetailContainer />
      </AppLayout>
    </CenteredLayout>
  );
};
