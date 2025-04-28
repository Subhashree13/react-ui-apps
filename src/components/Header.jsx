import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  //read data from store
  const cartItems = useSelector((store)=> store.cart.items)
  const [btnState, setBtnState] = useState("logout");
  const handleUserState = () => {
    setBtnState(btnState === "logout" ? "login" : "logout");
  };
  return (
    <div className="header flex justify-between items-center bg-orange-50 ">
      <div className="logo-container m-[30px] w-[100px] h-[100px] cursor-pointer">
        <img
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
          alt="brand-logo"
          href="/"
          className="logo "
        />
      </div>
      <div className="nav-items m-[30px]">
        <ul className="flex gap-2 font-bold text-lg">
        <li className="cursor-pointer hover:underline">
            Online Status : {onlineStatus ? "🟢":"🔴"}
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to="/contactUs">Contact Us</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to="/cart">Cart - ({cartItems?.length} items)</Link>
          </li>
          <li className="cursor-pointer">
            <button
              className="cursor-pointer border-1"
              onClick={handleUserState}
            >
              {btnState}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
