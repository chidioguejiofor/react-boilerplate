import UnprotectedPages from "./UnprotectedPages";
import { convertRoutesToComponents } from "helpers/pageParser";
import ProtectedPages from "./ProtectedPages";

const ENTRY_PAGES: PageType[] = [
  {
    path: "/user",
    component: ProtectedPages,
    exact: false,
  },
  {
    path: "/",
    component: UnprotectedPages,
    exact: false,
  },
];

const Pages = () => {
  return convertRoutesToComponents(ENTRY_PAGES);
};

export default Pages;
