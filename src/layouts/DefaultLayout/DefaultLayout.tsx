import { ReactNode } from "react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";

interface DefaultLayoutProp {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProp) {
  return (
    <div>
      <Header />
      <Banner />
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
