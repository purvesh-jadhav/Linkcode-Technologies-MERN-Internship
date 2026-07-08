function Footer() {
  return (
    <div className="footer-section">
      <p id="footer-email-text">
        Ready to watch? Enter your email to create or restart your membership.
      </p>

      <div className="footer-email-box">
        <input
          type="text"
          placeholder="Email address"
          id="footer-email"
        />

        <button id="footer-getstarted">
          Get Started &gt;
        </button>
      </div>

      <p id="questions">
        Questions? Call <u>000-800-919-1743</u>
      </p>

      <div className="footer-links">
        <div className="footer-column">
          <a href="#">FAQ</a>
          <a href="#">Investor Relations</a>
          <a href="#">Privacy</a>
          <a href="#">Speed Test</a>
        </div>

        <div className="footer-column">
          <a href="#">Help Centre</a>
          <a href="#">Jobs</a>
          <a href="#">Cookie Preferences</a>
          <a href="#">Legal Notices</a>
        </div>

        <div className="footer-column">
          <a href="#">Account</a>
          <a href="#">Ways to Watch</a>
          <a href="#">Corporate Information</a>
          <a href="#">Only on Netflix</a>
        </div>

        <div className="footer-column">
          <a href="#">Media Centre</a>
          <a href="#">Terms of Use</a>
          <a href="#">Contact Us</a>
        </div>
      </div>

      <select id="footer-language">
        <option>English</option>
        <option>Hindi</option>
        <option>Marathi</option>
      </select>

      <p id="netflix-india">Netflix India</p>
    </div>
  );
}

export default Footer;