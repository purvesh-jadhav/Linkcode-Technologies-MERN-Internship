import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="reveal is-visible">
        <span className="section-tag">Selected Work</span>
        <h2 className="section-heading">
          Projects I've <span className="gradient-text">Shipped</span>
        </h2>
        <p className="section-sub">
          A few live, client-delivered projects where I turned a brief into a
          working, deployed product.
        </p>
      </div>

      <div className="projectsList">
        <article className="project projectBlue card" style={{ animationDelay: "0ms" }}>
          <div className="projectPreview">
            <div className="projectMark">SA</div>
          </div>

          <div className="projectBody">
            <span className="projectCategory">Business Website</span>
            <h3>Shree Anand K Thorat Construction</h3>
            <p>A professional construction company website built to showcase services, company info, and completed projects with a clean, business-oriented layout.</p>

            <div className="projectTags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Responsive Design</span>
            </div>

            <div className="projectLinks">
              <a href="https://shreeanandkthoratconstruction.netlify.app" target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo <FiArrowUpRight />
              </a>
              <a href="https://github.com/purvesh-jadhav" target="_blank" rel="noreferrer" className="btn btn-outline">
                <FiGithub /> Code
              </a>
            </div>
          </div>
        </article>

        <article className="project projectRed card" style={{ animationDelay: "120ms" }}>
          <div className="projectPreview">
            <div className="projectMark">VT</div>
          </div>

          <div className="projectBody">
            <span className="projectCategory">Creative Portfolio</span>
            <h3>Vibhuti Thorat — Video Editor Portfolio</h3>
            <p>A creative portfolio for a video editor, built around strong visual presentation, modern layouts, and an engaging browsing experience.</p>

            <div className="projectTags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Animations</span>
            </div>

            <div className="projectLinks">
              <a href="https://vibhutithorat.netlify.app" target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo <FiArrowUpRight />
              </a>
              <a href="https://github.com/purvesh-jadhav" target="_blank" rel="noreferrer" className="btn btn-outline">
                <FiGithub /> Code
              </a>
            </div>
          </div>
        </article>

        <article className="project projectYellow card" style={{ animationDelay: "240ms" }}>
          <div className="projectPreview">
            <div className="projectMark">WA</div>
          </div>

          <div className="projectBody">
            <span className="projectCategory">Web Application</span>
            <h3>Weather Application</h3>
            <p>A weather app delivering real-time conditions through a clean, responsive interface, focused on live API integration and dynamic data handling.</p>

            <div className="projectTags">
              <span>React.js</span>
              <span>JavaScript</span>
              <span>CSS</span>
              <span>API Integration</span>
            </div>

            <div className="projectLinks">
              <a href="http://weather-app-2.purvesh.online/" target="_blank" rel="noreferrer" className="btn btn-primary">
                Live Demo <FiArrowUpRight />
              </a>
              <a href="https://github.com/purvesh-jadhav" target="_blank" rel="noreferrer" className="btn btn-outline">
                <FiGithub /> Code
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
