import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="home">
      <div className="navbar">
        <img id="logo-img" src={logo} alt="Netflix" />
      </div>

      <div className="nav-btn">
        <select id="lang-select">
          <option>English</option>
          <option>Hindi</option>
          <option>Marathi</option>
        </select>

        <button id="signin-btn">Sign In</button>
      </div>

      <div className="main-content">
        <h1 id="main-heading">
          Unlimited movies, <br /> shows, and more
        </h1>

        <h3 id="prie-title">
          Starts at ₹149. Cancel at any time.
        </h3>

        <h4 id="email-labling">
          Ready to watch? Enter your email to create or restart your
          membership.
        </h4>

        <div className="email-input-and-start">
          <input
            type="text"
            id="email-input-box"
            placeholder="Email address"
          />

          <button id="getstart-btn">
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;