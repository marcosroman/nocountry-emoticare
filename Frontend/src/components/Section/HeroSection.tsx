import "./Header.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div>
          <img
            src="src/images/doctor-preview.png"
            alt="Doctor"
            className="hero-image"
          />
        </div>
        <div>
          <div className="main_text">
            <h2>Urgent Care</h2>
            <h1>Quick and Easy Online Consultations</h1>
            <p>
              Access professional healthcare from the comfort of your home,
              anytime, anywhere.
            </p>
          </div>
          <div className="section_button">
          <button>
            <p>Start your Consultation</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
