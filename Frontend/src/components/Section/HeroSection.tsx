import "../../styles/HeroSection.css";
import mental from "../../images/production2Ftreatment2FmentalHealth-removebg-preview.png"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div>
          <img
            src={mental}
            alt="Doctor"
            className="hero-image"
          />
        </div>
        <div>
          <div className="main_text">
            <h2 className="font-bold text-2xl tracking-wider">Emoticare</h2>
            <h1>Citas Rápidas para un cuidado emocional eficaz</h1>
            <p>
              Accede a un cuidado profesional desde la comodidad de tu hogar, cuando lo necesites
            </p>
          </div>
          <div className="section_button">
          <Link to="/login" className="hero-button">
            <p>¡Agenda tu Cita!</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
