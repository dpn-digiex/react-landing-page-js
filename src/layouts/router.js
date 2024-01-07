import { createBrowserRouter } from "react-router-dom";
import { ROUTES_APP } from "@constants";
import {
  ContactPage,
  ErrorPage,
  HomePage,
  MaintainingPage,
  ProjectPage,
  ServicesPage,
  TemplatePage,
} from "@pages";

import PublicLayout from "./public";

export const PAGES_NAVIGATION = [
  {
    index: true,
    pageId: "introduction-page",
    path: ROUTES_APP.ROOT,
    title: "Giới thiệu",
    Component: HomePage,
  },
  {
    pageId: "introduction-page",
    path: ROUTES_APP.INTRO_PAGE,
    title: "Giới thiệu",
    Component: HomePage,
  },
  {
    pageId: "project-page",
    path: ROUTES_APP.PROJECT_PAGE,
    title: "Dự án",
    Component: ProjectPage,
  },
  {
    pageId: "templates-page",
    path: ROUTES_APP.TEMPLATES_PAGE,
    title: "Mẫu thiết kế",
    Component: TemplatePage,
  },
  {
    pageId: "services-page",
    path: ROUTES_APP.SERVICES_PAGE,
    title: "Dịch vụ",
    Component: ServicesPage,
  },
  {
    pageId: "maintaining-page",
    path: ROUTES_APP.MAINTAINING_PAGE,
    title: "Bảo trì",
    Component: MaintainingPage,
  },
  {
    pageId: "contact-page",
    path: ROUTES_APP.CONTACT_PAGE,
    title: "Liên hệ",
    Component: ContactPage,
  },
];

const router = createBrowserRouter([
  {
    id: "public",
    path: ROUTES_APP.ROOT,
    Component: PublicLayout,
    ErrorBoundary: ErrorPage,
    children: PAGES_NAVIGATION,
  },
]);

export default router;
