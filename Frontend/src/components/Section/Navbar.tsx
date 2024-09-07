import About_us from "../../icons/about";
import LoginIcon from "../../icons/log_in";
import MenuIcon from "../../icons/menu";
import Specialties from "../../icons/specialties";
import "./Navbar.css";

function Navbar() {
  return (
    <section>
      <div className="navbar">
        <div className="mobile_icon">
          <img src="src\images\preview-icon.png" alt="icon" className="icon" />
          <MenuIcon className="menu_icon"></MenuIcon>
        </div>
        <div className="category_span text-cyan-950">
          <About_us></About_us>
          <span>About us</span>
          <Specialties></Specialties>
          <span className="text-cyan-950">Specialties</span>
        </div>
        <div className="login_chart text-cyan-950">
            <LoginIcon></LoginIcon>
          <h1 className="text_btn">Log in</h1>
          <a className="sign_up" href="">Sign up</a>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
