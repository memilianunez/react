import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <nav>
                <h1>
                    <Link to="/">Vivero Arte Verde</Link>
                </h1>

                <ul>
                    <li>
                        <NavLink to="/category/plants">Plantas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/plantpot">Macetas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category/ground">Tierra</NavLink>
                    </li>
                </ul>
            </nav>

            <div>
                <CartWidget />
            </div>
        </div>
    );
};

export default Navbar;
