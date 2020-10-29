import { LANDING_PAGE, ABOUT_PAGE } from "pages/paths";
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import { convertRoutesToComponents } from "helpers/pageParser";

const UNPROTECTED_PAGES: PageType[] = [
  {
    path: ABOUT_PAGE,
    component: AboutPage,
    exact: true,
  },
  {
    path: LANDING_PAGE,
    component: LandingPage,
    exact: true,
  },
];

const Pages = () => {
  return convertRoutesToComponents(UNPROTECTED_PAGES);
};

export default Pages;
