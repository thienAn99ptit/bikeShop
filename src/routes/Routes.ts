import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));

const privaryRoute: {
  element: React.LazyExoticComponent<() => JSX.Element>;
  path: string;
}[] = [
  {
    element: Home,
    path: "/",
  },
];

export { privaryRoute };
