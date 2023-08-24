import React from "react";
import { LocationComponent, LocationVM } from "@/pods";

export const LocationContainer: React.FC<{ locationListSliced: LocationVM[] }> = (props) => {
  const { locationListSliced } = props;

  return !locationListSliced ? (
    <h4>Loading...</h4>
  ) : (
    <>
      <LocationComponent locationListSliced={locationListSliced} />
    </>
  );
};
