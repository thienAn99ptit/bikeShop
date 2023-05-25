import { Link } from "react-router-dom";
import { Button } from "../button";

function ImageLink() {
  return (
    <Link to={"#"} className="relative overflow-hidden group">
      <img
        src="https://cdn.shopify.com/s/files/1/0055/4021/6920/files/1_983231bc-baec-4050-80d0-1bd121414ab8.png?v=1627387297"
        alt=""
        className="w-full"
      />
      <div className="absolute left-[30px] bottom-[-40px] group-hover:bottom-[30px] ease-in-out duration-500">
        <p className="text-2xl text-white font-medium mb-5">Sporty Shoes</p>
        <Button content="View more" />
      </div>
    </Link>
  );
}

export default ImageLink;
