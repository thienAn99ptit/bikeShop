
import { Link } from "react-router-dom";

interface MenuProps{
    text: string,
    to: string,
}

function MenuItem({text,to = "#"}:MenuProps) {
    return (
        <li className="relative text-white text-sm font-normal cursor-pointer">
            <Link to={to}>{text}</Link>
        </li>
    );
}

export default MenuItem;