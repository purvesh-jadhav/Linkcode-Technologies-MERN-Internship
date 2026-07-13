import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav">
      <a href="#home" className="navLogo">
        Purvesh<span className="gradient-text">.dev</span>
      </a>

      <nav className="navMenu">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#contact" className="btn btn-primary navButtonLink">
          Let's Talk !
        </a>
      </nav>

      <button className="navToggle" aria-label="Navigation menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
