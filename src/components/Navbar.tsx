import { NavLink } from "react-router-dom";
import Button from "./ui/Button";
import { useSelector } from "react-redux";
import { cartSelector } from "../app/features/cart/cartSlice";

const Navbar = () => {
  const { cartItems } = useSelector(cartSelector);
  return (
    <nav className="max-w-4xl mx-auto mt-7 mb-20 px-3 py-5 rounded-md border-slate-400 border">
      <ul className="flex items-center justify-between">
        <li className="text-black duration-200 font-semibold text-lg">
          <NavLink to="/">Home</NavLink>
        </li>

        <div className="flex items-center text-indigo-600 space-x-2">
          <li className="duration-200 text-lg">
            <NavLink to="/pricing">Pricing</NavLink>
          </li>
          <li className="duration-200 text-lg">
            <NavLink to="/features">Features</NavLink>
          </li>
          <li className="duration-200 text-lg">
            <NavLink to="/cart">{`Cart(${cartItems.length})`}</NavLink>
          </li>
          <Button className="cursor-pointer" size={"sm"}>
            Logout
          </Button>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
