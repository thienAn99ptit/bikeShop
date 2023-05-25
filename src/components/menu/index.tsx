import MenuItem from "./MenuItem";

function Menu() {
  return (
    <ul className="flex gap-x-5">
      <MenuItem text="Sports" to="#" />
      <MenuItem text="Category" to="#" />
      <MenuItem text="Collection" to="#" />
      <MenuItem text="About Us" to="#" />
    </ul>
  );
}

export default Menu;
