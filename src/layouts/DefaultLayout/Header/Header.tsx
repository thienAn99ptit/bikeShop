import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button } from "../../../components/button";
import Menu from "../../../components/menu";

function Header() {
  return (
    <header className="bg-primary">
      <div className="container flex justify-between items-center py-4 border-b  border-[#ffffff1a] border-solid sm:py-6">
        <div className="flex gap-x-4 items-end">
          <AlignLeftOutlined style={{ fontSize: "20px", color: "#fff" }} />
          <span>
            <SearchOutlined style={{ fontSize: "22px", color: "#fff" }} />
          </span>
        </div>
        <p className="text-white text-sm font-semibold hidden sm:block">
          Email :
          <Link to="#" className="font-medium">
            info@example.com
          </Link>
        </p>
        <Link to={"/"}>
          <img
            className="max-w-full w-[146px]"
            src="https://cdn.shopify.com/s/files/1/0055/4021/6920/files/logo_53c1a5e9-3cf8-4d26-84a5-9ab0220f3825_large.png?v=1627454183"
          />
        </Link>
        <div className="flex gap-x-4">
          <span className="hidden sm:block">
            <SearchOutlined style={{ fontSize: "20px", color: "#fff" }} />
          </span>
          <span>
            <UserOutlined style={{ fontSize: "22px", color: "#fff" }} />
          </span>
          <span>
            <ShoppingCartOutlined style={{ fontSize: "22px", color: "#fff" }} />
          </span>
        </div>
      </div>
      <div className="container py-3 justify-between items-center hidden sm:flex ">
        <Menu />
        <Button content="Special Offer" className="uppercase" />
      </div>
    </header>
  );
}

export default Header;
