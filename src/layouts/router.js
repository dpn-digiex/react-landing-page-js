import { createBrowserRouter } from "react-router-dom";
import { ROUTES_APP } from "@constants";
import { ErrorPage, HomePage, PageOne, PageTwo } from "@pages";

import PublicLayout from "./public";

const router = createBrowserRouter([
  {
    id: "public",
    path: ROUTES_APP.ROOT,
    Component: PublicLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: ROUTES_APP.PAGE_ONE,
        Component: PageOne,
      },
      {
        path: ROUTES_APP.PAGE_TWO,
        Component: PageTwo,
      },
    ],
  },
]);

export default router;
