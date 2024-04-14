import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "./utils/constants";
import useOnlineStatus from "./utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  // console.log("Header Called");

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header flex justify-between m-2 bg-blue-100">
      <div>
        <img className="logo w-40 rounded-full m-2 mix-blend-multiply" src={LOGO_URL} />
      </div>
      <div className="nav-container flex items-center ">
        <ul className="flex m-4 p-4 ">
          <li className="px-4 text-lg">
              Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4 cursor-pointer text-lg">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 cursor-pointer text-lg"><Link to="/about">About Us</Link></li>
          <li className="px-4 cursor-pointer text-lg"><Link to="/contact">Contact US</Link></li>
          <li className="px-4 cursor-pointer text-lg"><Link to="/grocery"> Grocery </Link></li>
          <li className="px-4 cursor-pointer text-lg">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
              console.log(btnName);
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
