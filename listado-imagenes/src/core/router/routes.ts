import { generatePath } from "react-router-dom";

interface SwitchRoutes {
  root: string;
  catList: string;
  dogList: string;
  checkOut: string;
  adoptionCompleted: string;
}

export const switchRoutes: SwitchRoutes = {
  root: "/",
  catList: "/catList",
  dogList: "/dogList",
  checkOut: "/checkOut",
  adoptionCompleted: "/adoptionCompleted",
};

export const routes = {
  ...switchRoutes,
};
