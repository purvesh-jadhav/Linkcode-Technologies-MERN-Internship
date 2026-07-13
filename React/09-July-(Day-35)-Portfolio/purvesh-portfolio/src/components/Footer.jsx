import { FiArrowUp } from "react-icons/fi";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Built by <span className="gradient-text">Purvesh Jadhav</span> · © {new Date().getFullYear()}
      </p>
      <a href="#home" className="footerLink" aria-label="Back to top">
        <FiArrowUp />
      </a>
    </footer>
  );
}
