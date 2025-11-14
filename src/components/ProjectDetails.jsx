import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowLeft,
  Calendar,
  Users,
  Star,
  Code,
  Database,
  Cloud,
  Wrench,
  Target,
  CheckCircle,
} from "lucide-react";
import { projects } from "../data/projects";

const ProjectDetails = ({ projectId, onBack }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProject = projects.find((p) => p.id === parseInt(projectId));
    setProject(foundProject);
    setLoading(false);
  }, [projectId]);

  if (loading) {
    return (
      <div className="project-details-loading">
        <div className="loader"></div>
        <p>Loading project details...</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-details-error">
        <h2>Project not found</h2>
        <button onClick={onBack} className="btn btn-primary">
          <ArrowLeft size={20} />
          Back to Projects
        </button>
      </div>
    );
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "frontend":
        return <Code size={24} />;
      case "backend":
        return <Database size={24} />;
      case "fullstack":
        return <Cloud size={24} />;
      default:
        return <Wrench size={24} />;
    }
  };

  return (
    <div className="project-details">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="project-details-header"
        >
          <button onClick={onBack} className="back-btn">
            <ArrowLeft size={20} />
            Back to Projects
          </button>

          <div className="project-meta-header">
            <div className="project-category">
              {getCategoryIcon(project.category)}
              <span>{project.category}</span>
            </div>
            {project.featured && (
              <div className="featured-badge">
                <Star size={16} />
                Featured Project
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="project-hero"
        >
          <div className="project-info project-info-full-width">
            <h1>{project.title}</h1>
            <p className="project-description">{project.description}</p>

            <div className="project-stats">
              <div className="stat">
                <Calendar size={20} />
                <span>{project.period}</span>
              </div>
              <div className="stat">
                <Users size={20} />
                <span>{project.teamSize}</span>
              </div>
              <div className="stat">
                <Target size={20} />
                <span>{project.impact}</span>
              </div>
            </div>

            <div className="project-actions">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <ExternalLink size={20} />
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <Github size={20} />
                Source Code
              </a>
            </div>
          </div>
        </motion.div>

        <div className="project-content-detailed">
          <div className="content-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="content-section"
            >
              <h3>Key Features</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>
                    <CheckCircle size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="content-section"
            >
              <h3>Architecture & Tech Stack</h3>
              <div className="architecture-details">
                {Object.entries(project.architecture).map(([key, value]) => (
                  <div key={key} className="arch-item">
                    <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="content-section full-width"
          >
            <h3>Technologies Used</h3>
            <div className="technologies-grid">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="challenges-solutions">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="content-section"
            >
              <h3>Key Challenges</h3>
              <ul className="challenges-list">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>
                    <span className="challenge-icon">⚠️</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="content-section"
            >
              <h3>Solutions Implemented</h3>
              <ul className="solutions-list">
                {project.solutions.map((solution, index) => (
                  <li key={index}>
                    <span className="solution-icon">✅</span>
                    {solution}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
