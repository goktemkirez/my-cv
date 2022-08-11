import Experiences from "./pages/Experiences";
import Personal from "./pages/Personal";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Skills from "./pages/Skills";

export const ROUTES = {
  DASHBOARD: "/",
  EXPERIENCES: "/experiences",
  PERSONAL: "/personal",
  PROJECTS: "/projects",
  PROJECT_DETAIL: "/projects/:id",
  SKILLS: "/skills",
};

export const routes = [
  {
    path: ROUTES.DASHBOARD,
    component: Projects,
    name: "Projects",
    isPublic: true,
  },
  {
    path: ROUTES.EXPERIENCES,
    component: Experiences,
    name: "Experiences",
    isPublic: true,
  },
  {
    path: ROUTES.PERSONAL,
    component: Personal,
    name: "Personal",
    isPublic: true,
  },
  {
    path: ROUTES.PROJECTS,
    component: Projects,
    name: "Projects",
    isPublic: true,
  },
  {
    path: ROUTES.PROJECT_DETAIL,
    component: ProjectDetail,
    name: "Project Detail",
    isPublic: true,
  },
  {
    path: ROUTES.SKILLS,
    component: Skills,
    name: "Skills",
    isPublic: true,
  },
];
