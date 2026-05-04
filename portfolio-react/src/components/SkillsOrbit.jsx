import { skillGroups } from "../data/skills";

import {
  FaDocker,
  FaPython,
  FaJs,
  FaReact,
  FaGitAlt,
  FaLinux,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp
} from "react-icons/fa";

import {
  SiFastapi,
  SiMysql,
  SiPostgresql
} from "react-icons/si";

// 🔥 ICONOS (solo visual)
const icons = [
  <FaReact />,
  <FaJs />,
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaBootstrap />,
  <FaPhp />,
  <FaPython />,
  <SiFastapi />,
  <SiMysql />,
  <SiPostgresql />,
  <FaDocker />,
  <FaGitAlt />,
  <FaLinux />,
  <FaGithub />
];

export default function SkillsOrbit() {
  return (
    <div className="orbit-wrapper">
      {/* 🔥 CENTRO */}
      <div className="orbit-center">
        <span>Skills</span>
      </div>

      {/* 🔥 ORBITA */}
      <div className="orbit">
        {icons.map((icon, i) => {
          const angle = (360 / icons.length) * i;

          return (
            <div
              key={i}
              className="orbit-icon"
              style={{
                transform: `
                  rotate(${angle}deg)
                  translate(140px)
                  rotate(-${angle}deg)
                `
              }}
            >
              {icon}
            </div>
          );
        })}
      </div>
    </div>
  );
}
