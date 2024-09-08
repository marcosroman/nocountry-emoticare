import MenuIcon from "../../icons/About";
import SpecialtiesIcon from "../../icons/Specialties";
import LoginIcon from "../../icons/LogIn";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Aboutt from "../../icons/About_us";
import Specialties_of from "../../icons/Specialtiess";

function Navbar() {
  return (
    <section>
      <div className="navbar">
        <div className="mobile_icon">
          <img src="src/images/Sin_título-removebg-preview.png" alt="icon" className="icon" />
          <div className="logo_announce">
          <span className="logo_text">EmotiHealth</span>
          <span className="sub_text">Telemedicine</span>
          </div>
          <MenuIcon className="menu_icon"></MenuIcon>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4 hover:text-blue-900 cursor-pointer">
            <Aboutt className="size-9"></Aboutt>
            <span className="text-2xl">About us</span>
          </div>
          <div className="flex items-center gap-4 hover:text-blue-900 cursor-pointer">
            <Specialties_of className="size-9"></Specialties_of>
            <span className="text-2xl">Specialties</span>
          </div>
        </div>
        <div className="login_chart">
          <NavLink to="/login" className="flex rounded-lg items-center gap-2 cursor-pointer hover:text-blue-900">
            <LoginIcon className="size-9"></LoginIcon>
            <p className="text-2xl">Log in</p>
            <NavLink to="/register" className="sign_up text-xl">Sign up</NavLink>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
