import Experiences from "./pages/Experiences";
import Skills from "./pages/Skills";
import Personal from "./pages/Personal";

export const ROUTES = {
  DASHBOARD: "/",
  PERSONAL: "/personal",
  EXPERIENCES: "/experiences",
  SKILLS: "/skills",
};

export const routes = [
  {
    path: ROUTES.DASHBOARD,
    component: Personal,
    name: "Personal",
    isPublic: true,
  },
  {
    path: ROUTES.PERSONAL,
    component: Personal,
    name: "Personal",
    isPublic: true,
  },
  {
    path: ROUTES.EXPERIENCES,
    component: Experiences,
    name: "Experiences",
    isPublic: true,
  },
  {
    path: ROUTES.SKILLS,
    component: Skills,
    name: "Skills",
    isPublic: false,
  },
];
