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
        <div className="category_span">
          <About_us></About_us>
          <span>About us</span>
          <Specialties></Specialties>
          <span className="text-red-400">Specialties</span>
        </div>
        <div className="login_chart">
            <button className="sign_up">Sign up</button>
            <LoginIcon></LoginIcon>
          <h1 className="text_btn">Log in</h1>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
