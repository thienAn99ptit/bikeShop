import { ReactNode } from "react";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface DefaultLayoutProp {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProp) {
  return (
    <div>
      <Header />
      <Banner />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
