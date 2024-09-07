import MenuIcon from "../../icons/About";
import AboutIcon from "../../icons/About";
import SpecialtiesIcon from "../../icons/Specialties";
import LoginIcon from "../../icons/LogIn";

import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section>
      <div className="flex justify-between px-8">
        <div className="mobile_icon">
          <img src="src\images\preview-icon.png" alt="icon" className="icon" />
          <MenuIcon className="menu_icon"></MenuIcon>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-4 hover:text-blue-500 cursor-pointer">
            <AboutIcon className="size-8"></AboutIcon>
            <span className="text-lg">About us</span>
          </div>
          <div className="flex items-center gap-4 hover:text-blue-500 cursor-pointer">
            <SpecialtiesIcon className="size-8"></SpecialtiesIcon>
            <span className="text-lg">Specialties</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <NavLink to="/register" className="sign_up">Sign up</NavLink>
          <NavLink to="/login" className="flex rounded-lg items-center gap-2 cursor-pointer hover:text-blue-500">
            <LoginIcon className="size-8"></LoginIcon>
            <p>Log in</p>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
