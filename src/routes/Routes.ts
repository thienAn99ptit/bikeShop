import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const CollectionPage = lazy(() => import("../pages/CollectionPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));

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
  {
    element: CollectionPage,
    path: "/collection",
  },
  {
    element: ContactPage,
    path: "/contact",
  },
];

export { privaryRoute };
