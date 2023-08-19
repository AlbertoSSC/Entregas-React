import { generatePath } from "react-router-dom";

interface switchRoutes {
  root: string;
  list: string;
  detail: string;
  rm_list: string;
  rm_char_detail: string;
}

export const switchRoutes: switchRoutes = {
  root: "/",
  list: "/list",
  detail: "/detail/:id",
  rm_list: "/rm_list",
  rm_char_detail: "/rm_char_detail/:id",
};

interface Routes extends Omit<switchRoutes, "detail" | "rm_char_detail"> {
  detail?: (id: string) => string;
  rm_char_detail?: (id: string) => string;
}

export const routes: Routes = {
  ...switchRoutes,
  detail: (id) => generatePath(switchRoutes.detail, { id }),
  rm_char_detail: (id) => generatePath(switchRoutes.rm_char_detail, { id }),
};
