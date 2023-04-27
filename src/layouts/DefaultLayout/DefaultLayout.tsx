import Header from "./Header/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header></Header>
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
