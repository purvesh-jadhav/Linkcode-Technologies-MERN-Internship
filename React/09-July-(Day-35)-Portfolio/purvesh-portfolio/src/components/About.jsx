import { FiCode, FiLayout, FiTrendingUp } from "react-icons/fi";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="aboutArea">
        <div className="reveal is-visible">
          <span className="section-tag">Who I Am</span>
          <h2 className="section-heading">
            Turning ideas into <span className="gradient-text">interactive experiences</span>
          </h2>
          <p className="aboutParagraph">
            I'm Purvesh Jadhav, a passionate frontend developer who specializes
            in creating modern, responsive, and interactive web experiences.
            I'm currently pursuing my diploma at Government Polytechnic
            Awasari while working as a Full-Stack MERN Developer Intern at
            LinkCode Technologies.
          </p>
          <p className="aboutParagraph">
            I focus on combining clean code, creative UI design, and smooth
            user interactions to build websites that are visually appealing
            and genuinely user-friendly — with a problem-solving mindset and
            a constant drive to learn modern web technologies.
          </p>

          <div className="aboutStats">
            <div>
              <span className="gradient-text aboutStat">3+</span>
              <p>Live Client Projects</p>
            </div>
            <div>
              <span className="gradient-text aboutStat">2024</span>
              <p>Started Diploma Journey</p>
            </div>
            <div>
              <span className="gradient-text aboutStat">10+</span>
              <p>Tech Skills &amp; Tools</p>
            </div>
          </div>
        </div>

        <div className="aboutCards">
          <div className="aboutCard card" style={{ animationDelay: "0ms" }}>
            <span className="aboutCardIcon" style={{ background: "var(--red)" }}>
              <FiCode />
            </span>
            <h3>Clean, Modern Code</h3>
            <p>I write readable, well-structured code and care about the craft behind every component.</p>
          </div>

          <div className="aboutCard card" style={{ animationDelay: "120ms" }}>
            <span className="aboutCardIcon" style={{ background: "var(--blue)" }}>
              <FiLayout />
            </span>
            <h3>UI/UX Focused</h3>
            <p>Design isn't an afterthought — I build responsive, accessible interfaces people enjoy using.</p>
          </div>

          <div className="aboutCard card" style={{ animationDelay: "240ms" }}>
            <span className="aboutCardIcon" style={{ background: "var(--yellow)" }}>
              <FiTrendingUp />
            </span>
            <h3>Always Learning</h3>
            <p>Diploma student by day, shipping real client projects by night — always leveling up.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
