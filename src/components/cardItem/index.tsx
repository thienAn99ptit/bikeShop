import { Link } from "react-router-dom";
import { IconEyes, IconHearth, IconBuy } from "../icons";

function CardItem() {
  return (
    <div>
      <Link to={"/product"} className="relative pt-[100%]">
        <span className="absolute top-[10px] left-[10px] flex justify-center items-center w-10 h-5 md:h-10 rounded md:rounded-full bg-greenColor text-white text-[10px] font-semibold z-10">
          Sale
        </span>
        <div className="overflow-hidden mb-2">
          <img
            src="https://cdn.shopify.com/s/files/1/0055/4021/6920/products/12_9fe37704-28fd-40fd-8f04-c21f06852eaf.jpg?v=1627367011"
            alt=""
            className="w-full h-auto object-cover hover:scale-125 transition-all ease-linear"
            loading="lazy"
          />
        </div>
        <p className="text-primaryTxt text-sm md:text-base">Cyclocress Bike1</p>
      </Link>
      <div className="flex justify-between items-center">
        <span className="text-lg text-secondary font-medium">$63.000</span>
        <ul className="flex gap-x-1 list-none">
          <li className="flex justify-center items-center p-1 w-[28px] h-[28px] bg-secondary rounded cursor-pointer hover:bg-black transition-colors ease-linear">
            <IconEyes color="#fff" />
          </li>
          <li className="flex justify-center items-center p-1 w-[28px] h-[28px] bg-secondary rounded cursor-pointer hover:bg-black">
            <IconHearth color="#fff" />
          </li>
          <li className="flex justify-center items-center p-1 w-[28px] h-[28px] bg-secondary rounded cursor-pointer hover:bg-black">
            <IconBuy color="#fff" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CardItem;
