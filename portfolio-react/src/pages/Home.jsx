import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedBackground from "../components/AnimatedBackground";

export default function Home() {
  return (
    <div className="home">

      <AnimatedBackground />

      <motion.div
        className="home-card"
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Jefferson Tovar</h1>

        <h2 className="gradient-text">
          Full Stack Engineer — Backend, React & AI Systems
        </h2>

        <p className="home-description">
          I build end-to-end web systems combining robust backend architectures,
          modern React interfaces, and automation workflows.
          Currently focused on AI-powered integrations and intelligent agents.
        </p>

        <div className="badges">
          <span>Backend</span>
          <span>APIs</span>
          <span>Automation</span>
          <span>AI</span>
        </div>

      </motion.div>

    </div>
  );
}
