import { useState } from "react";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiMongodb,
  SiFigma,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaJava } from "react-icons/fa";
import { FiLayout, FiSmartphone, FiUsers } from "react-icons/fi";
import "./Skills.css";

const SKILLS = {
  Frontend: [
    { icon: <SiHtml5 />, label: "HTML5", color: "#e34f26" },
    { icon: <SiCss />, label: "CSS3", color: "#2965f1" },
    { icon: <SiJavascript />, label: "JavaScript", color: "#f0db4f" },
    { icon: <SiReact />, label: "React.js", color: "#61dafb" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS", color: "#38bdf8" },
  ],
  Languages: [
    { icon: <SiPython />, label: "Python", color: "#3776ab" },
    { icon: <FaJava />, label: "Java", color: "#e76f00" },
    { icon: <SiCplusplus />, label: "C++", color: "#00599c" },
  ],
  Database: [
    { icon: <SiMysql />, label: "SQL", color: "#4479a1" },
    { icon: <SiMongodb />, label: "NoSQL", color: "#47a248" },
  ],
  "UI / UX": [
    { icon: <SiFigma />, label: "Figma", color: "#a259ff" },
    { icon: <FiLayout />, label: "UI Design", color: "#d97757" },
    { icon: <FiSmartphone />, label: "Responsive Design", color: "#214536" },
    { icon: <FiUsers />, label: "UX Design", color: "#2e5c48" },
  ],
  Tools: [
    { icon: <SiGit />, label: "Git", color: "#f05032" },
    { icon: <SiGithub />, label: "GitHub", color: "#1c1c1a" },
    { icon: <VscVscode />, label: "VS Code", color: "#007acc" },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section id="skills" className="section skills">
      <div className="reveal is-visible">
        <span className="section-tag">What I Work With</span>
        <h2 className="section-heading">
          My <span className="gradient-text">Skills</span> &amp; Toolkit
        </h2>
        <p className="section-sub">
          A growing set of tools and technologies I use to design, build, and
          ship real web experiences.
        </p>
      </div>

      <div className="skillsTabs reveal is-visible">
        <button
          className={`skillsTab ${activeTab === "Frontend" ? "skillsTabActive" : ""}`}
          onClick={() => setActiveTab("Frontend")}
        >
          Frontend
        </button>
        <button
          className={`skillsTab ${activeTab === "Languages" ? "skillsTabActive" : ""}`}
          onClick={() => setActiveTab("Languages")}
        >
          Languages
        </button>
        <button
          className={`skillsTab ${activeTab === "Database" ? "skillsTabActive" : ""}`}
          onClick={() => setActiveTab("Database")}
        >
          Database
        </button>
        <button
          className={`skillsTab ${activeTab === "UI / UX" ? "skillsTabActive" : ""}`}
          onClick={() => setActiveTab("UI / UX")}
        >
          UI / UX
        </button>
        <button
          className={`skillsTab ${activeTab === "Tools" ? "skillsTabActive" : ""}`}
          onClick={() => setActiveTab("Tools")}
        >
          Tools
        </button>
      </div>

      <div className="skillsGrid">
        {SKILLS[activeTab].map((skill, i) => (
          <div
            className="skillsCard"
            key={skill.label}
            style={{ "--accent": skill.color, animationDelay: `${i * 70}ms` }}
          >
            <span className="skillsIcon">{skill.icon}</span>
            <p>{skill.label}</p>
            <span className="skillsGlow" />
          </div>
        ))}
      </div>
    </section>
  );
}
