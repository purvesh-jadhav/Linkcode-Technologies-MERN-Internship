import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiCode } from "react-icons/fi";
import { SiReact, SiJavascript, SiPython } from "react-icons/si";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroText">
        <p className="heroSmall reveal is-visible">
          Frontend Developer &amp; Diploma Student
        </p>

        <h1 className="heroHeading reveal is-visible">
          Hi, I'm <span className="gradient-text">Purvesh Jadhav</span>
          <br />
          I build clean, interactive
          <br />
          web experiences.
        </h1>

        <p className="heroParagraph reveal is-visible">
          I specialize in crafting modern, responsive websites where thoughtful
          UI design meets solid engineering — from React interfaces to the
          small details that make a site feel alive.
        </p>

        <div className="heroButtons reveal is-visible">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>

        <div className="heroIcons reveal is-visible">
          <a href="https://github.com/purvesh-jadhav" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href="https://linkedin.com/in/purvesh-jadhav" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href="mailto:purveshjadhav29@gmail.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="heroImage reveal is-visible" data-reveal data-delay="120">
        <div className="heroDecor heroCircle" />
        <div className="heroDecor heroTriangle" />

        <div className="heroCard">
          <FiCode className="heroIcon" aria-hidden="true" />
        </div>

        <div className="heroTag heroTag1">
          <SiReact />
        </div>
        <div className="heroTag heroTag2">
          <SiJavascript />
        </div>
        <div className="heroTag heroTag3">
          <SiPython />
        </div>
      </div>

      <a href="#about" className="heroScroll" aria-label="Scroll to About section">
        <FiArrowDown />
      </a>
    </section>
  );
}
