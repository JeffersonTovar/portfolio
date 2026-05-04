import { motion } from "framer-motion";
import { skillGroups } from "../data/skills";

import {
  FaDocker,
  FaPython,
  FaJs,
  FaReact,
  FaNode,
  FaGitAlt,
  FaLinux,
  FaGithub,
  FaGitlab,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaPhp,
  FaUsers
} from "react-icons/fa";

import {
  SiFastapi,
  SiMysql,
  SiPostgresql,
  SiPostman
} from "react-icons/si";

const iconMap = {
  React: <FaReact />,
  JavaScript: <FaJs />,
  HTML5: <FaHtml5 />,
  CSS3: <FaCss3Alt />,
  Bootstrap: <FaBootstrap />,
  jQuery: <FaJs />,

  PHP: <FaPhp />,
  Python: <FaPython />,
  FastAPI: <SiFastapi />,
  REST: <FaNode />,
  SOAP: <FaNode />,
  WebSockets: <FaNode />,

  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql />,

  Docker: <FaDocker />,
  "Docker Compose": <FaDocker />,
  Linux: <FaLinux />,
  Git: <FaGitAlt />,
  GitHub: <FaGithub />,
  GitLab: <FaGitlab />,
  Postman: <SiPostman />,

  Agile: <FaUsers />,
  Scrum: <FaUsers />,
  "Code Reviews": <FaUsers />,
  "Task Planning": <FaUsers />
};

export default function SkillsGrid() {
  return (
    <div className="skills-container">
      {skillGroups.map((group, i) => (
        <motion.div
          key={i}
          className="skills-group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
        >
          <h3>{group.title}</h3>

          <div className="skills-grid">
            {group.skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="icon">
                  {iconMap[skill.name] || "⚙️"}
                </div>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
