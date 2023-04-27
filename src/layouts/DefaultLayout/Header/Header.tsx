import {
  SearchOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Image } from "antd";
import { Link } from "react-router-dom";
import { Button } from "../../../components/button";

function Header() {
  return (
    <header className="bg-primary">
      <div className="container flex justify-between items-center py-6 border-b  border-[#ffffff1a] border-solid">
        <p className="text-white text-sm font-semibold">
          Email :
          <Link to="#" className="font-medium">
            info@example.com
          </Link>
        </p>
        <div>
          <Image
            className="max-w-full w-[146px]"
            src="https://cdn.shopify.com/s/files/1/0055/4021/6920/files/logo_53c1a5e9-3cf8-4d26-84a5-9ab0220f3825_large.png?v=1627454183"
          />
        </div>
        <div className="flex gap-x-4">
          <span>
            <SearchOutlined style={{ fontSize: "20px", color: "#fff" }} />
          </span>
          <span>
            <UserOutlined style={{ fontSize: "20px", color: "#fff" }} />
          </span>
          <span>
            <ShoppingCartOutlined style={{ fontSize: "20px", color: "#fff" }} />
          </span>
        </div>
      </div>
      <div className="container py-3 flex justify-between items-center ">
        <ul className="flex gap-x-2">
          <li className="text-white text-sm font-normal cursor-pointer">
            <Link to={"#"}>Sport</Link>
          </li>
          <li className="text-white text-sm font-normal cursor-pointer">
            <Link to={"#"}>Category</Link>
          </li>
          <li className="text-white text-sm font-normal cursor-pointer">
            <Link to={"#"}>Collection</Link>
          </li>
          <li className="text-white text-sm font-normal cursor-pointer">
            <Link to={"#"}>Included</Link>
          </li>
        </ul>
        <Button content="Special Offer" className="uppercase" />
      </div>
    </header>
  );
}

export default Header;
