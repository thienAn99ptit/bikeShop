import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const ProductPage = lazy(() => import("../pages/ProductPage"));

const privaryRoute: {
  element: React.LazyExoticComponent<() => JSX.Element>;
  path: string;
}[] = [
  {
    element: Home,
    path: "/",
  },
  {
    element: ProductPage,
    path: "/product",
  },
];

export { privaryRoute };
