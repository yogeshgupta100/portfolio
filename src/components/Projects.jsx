import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Eye, Users, Calendar, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();
  const projectsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: projectsRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const filters = [
    { id: "all", label: "All Projects", count: projects.length },
    {
      id: "frontend",
      label: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "backend",
      label: "Backend",
      count: projects.filter((p) => p.category === "backend").length,
    },
    {
      id: "fullstack",
      label: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    {
      id: "freelance",
      label: "Freelance",
      count: projects.filter((p) => p.category === "freelance").length,
    },
    {
      id: "personal",
      label: "Personal",
      count: projects.filter((p) => p.category === "personal").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openProjectDetails = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <motion.div className="parallax-bg parallax-bg-projects" style={{ y }} />
      <motion.div
        className="parallax-bg parallax-bg-projects-2"
        style={{ y: y2 }}
      />
      <div className="container" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>My Recent Work</h2>
          <p>Projects</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="project-filters"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
              <span className="filter-count">({filter.count})</span>
            </motion.button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => {
            const cardRef = useRef(null);
            const cardScrollProgress = useScroll({
              target: cardRef,
              offset: ["start end", "center center"],
            }).scrollYProgress;

            const cardY = useTransform(
              cardScrollProgress,
              [0, 1],
              [60 + index * 10, 0]
            );

            return (
              <motion.div
                key={project.id}
                ref={cardRef}
                style={{ y: cardY }}
                className="project-card"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="project-card-header">
                  <div className="project-category-badge">
                    {project.category}
                  </div>
                  <div className="project-links-header">
                    {project.liveUrl !== "#" && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-header"
                        title="Live Demo"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Eye size={18} />
                      </motion.a>
                    )}
                    {project.githubUrl !== "#" && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-header"
                        title="GitHub Repository"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <div className="project-card-content">
                  <div className="project-header">
                    <h3>{project.title}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-meta-info">
                    <span className="project-meta-item">
                      <Calendar size={14} />
                      {project.period}
                    </span>
                    <span className="project-meta-item">
                      <Users size={14} />
                      {project.teamSize}
                    </span>
                  </div>

                  <div className="project-impact">
                    <strong>Impact:</strong> {project.impact}
                  </div>

                  <div className="project-technologies">
                    <h4>Technologies Used:</h4>
                    <div className="tech-tags-container">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="tech-tag"
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="project-actions">
                    <motion.button
                      className="view-details-btn"
                      onClick={() => openProjectDetails(project.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      View Details
                      <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-cta"
        >
          <p>Interested in working together?</p>
          <motion.button
            className="btn btn-primary"
            onClick={() => {
              navigate("/contact");
              // Scroll to top after navigation
              setTimeout(() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }, 100);
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
