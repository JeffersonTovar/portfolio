import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="project-type">{project.type}</div>

      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <div className="project-stack">{project.stack}</div>

      <div className="project-links">
        <a href={project.github} target="_blank">
          GitHub →
        </a>
      </div>
    </motion.div>
  );
}
