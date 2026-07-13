import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contactGrid">
        <div className="reveal is-visible">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-heading">
            Let's build something <span className="gradient-text">great together</span>
          </h2>
          <p className="section-sub" style={{ marginBottom: 40 }}>
            Have a project in mind, an internship opportunity, or just want to
            say hi? My inbox is open.
          </p>

          <ul className="contactInfo">
            <li>
              <span className="contactIcon"><FiMail /></span>
              <div>
                <p className="contactLabel">Email</p>
                <a href="mailto:purveshjadhav29@gmail.com">purveshjadhav29@gmail.com</a>
              </div>
            </li>
            <li>
              <span className="contactIcon"><FiMapPin /></span>
              <div>
                <p className="contactLabel">Location</p>
                <p>Narayangaon, Junnar, Pune, Maharashtra</p>
              </div>
            </li>
          </ul>

          <div className="contactSocials">
            <a href="https://github.com/purvesh-jadhav" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://linkedin.com/in/purvesh-jadhav" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://instagram.com/_purvesh_jadhav" target="_blank" rel="noreferrer" aria-label="Instagram"><FiInstagram /></a>
          </div>
        </div>

        <form className="contactForm reveal is-visible">
          <label>
            Name
            <input type="text" name="name" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" required placeholder="you@email.com" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required placeholder="Tell me about your project..." />
          </label>
          <button type="submit" className="btn btn-primary contactSubmit">
            Send Message <FiSend />
          </button>
        </form>
      </div>
    </section>
  );
}
