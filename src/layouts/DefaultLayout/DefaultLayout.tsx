import Banner from "./Banner/Banner";
import Header from "./Header/Header";

interface DefaultLayoutProp {
  children: any;
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
