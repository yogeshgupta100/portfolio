import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Users,
  Calendar,
  Star,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const navigate = useNavigate();

  const projects = [
    {
      id: 1,
      title: "Scout - Talent Management Platform",
      description:
        "Developed a comprehensive talent management system with candidate tracking, interview scheduling, and performance analytics. Built scalable backend APIs and intuitive frontend dashboard for HR teams.",
      shortDescription:
        "Talent management system with candidate tracking and analytics",
      image:
        "https://via.placeholder.com/400x250/1e3a8a/ffffff?text=Scout+Platform",
      category: "backend",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "Socket.IO",
        "AWS",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      period: "04/2025 – Present",
      impact: "Streamlined hiring process by 50%",
      teamSize: "4 developers",
      challenges: [
        "Real-time candidate tracking",
        "Complex interview scheduling",
        "Performance analytics",
      ],
      solutions: [
        "Implemented WebSocket for real-time updates",
        "Built intelligent scheduling algorithm",
        "Created comprehensive analytics dashboard",
      ],
    },
    {
      id: 2,
      title: "Infinite Locus Website",
      description:
        "Developed and completed the company's website using Next.js, TypeScript, and Tailwind CSS, ensuring full responsiveness and seamless server-side API handling via Strapi.",
      shortDescription: "Company website with Next.js and TypeScript",
      image:
        "https://via.placeholder.com/400x250/10b981/ffffff?text=Infinite+Locus",
      category: "frontend",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Strapi"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      period: "08/2024 – 10/2024",
      impact: "Improved page load speed by 60%",
      teamSize: "2 developers",
      challenges: [
        "SEO optimization",
        "Mobile responsiveness",
        "Content management",
      ],
      solutions: [
        "Implemented SSR for better SEO",
        "Used Tailwind for responsive design",
        "Integrated Strapi CMS",
      ],
    },
    {
      id: 3,
      title: "Supertails Internal Dashboard",
      description:
        "Contributed to post-order features like return/cancel workflows and delivery partner tracking on a React + Node.js stack. Improved state syncing using Redux Toolkit, and implemented tab-level sync with redux-state-sync.",
      shortDescription: "Internal dashboard for order management and tracking",
      image:
        "https://via.placeholder.com/400x250/f59e0b/ffffff?text=Supertails+Dashboard",
      category: "fullstack",
      technologies: [
        "React",
        "Node.js",
        "Redux Toolkit",
        "redux-state-sync",
        "Socket.IO",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "02/2025 – 04/2025",
      impact: "Reduced order processing time by 30%",
      teamSize: "4 developers",
      challenges: [
        "Complex state management",
        "Real-time updates",
        "Cross-tab synchronization",
      ],
      solutions: [
        "Implemented Redux Toolkit",
        "Used Socket.IO for real-time",
        "Added redux-state-sync",
      ],
    },
    {
      id: 4,
      title: "Housemate - Roommate Matching App",
      description:
        "Built a roommate-matching app with user profiles, property listings, and messaging. Integrated Firebase for real-time chat and Context API for state management.",
      shortDescription: "Roommate matching app with real-time messaging",
      image: "https://via.placeholder.com/400x250/8b5cf6/ffffff?text=Housemate",
      category: "freelance",
      technologies: ["React", "Firebase", "Context API", "Material-UI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "09/2023 – 11/2023",
      impact: "Successfully matched 200+ roommates",
      teamSize: "Solo project",
      challenges: [
        "Real-time messaging",
        "User matching algorithm",
        "Payment integration",
      ],
      solutions: [
        "Used Firebase Realtime Database",
        "Implemented preference-based matching",
        "Integrated Stripe payments",
      ],
    },
    {
      id: 5,
      title: "Lilaan Handicrafts - E-commerce",
      description:
        "Developed an e-commerce site with Stripe integration for secure payments. Built responsive UI and backend product management using MongoDB.",
      shortDescription: "E-commerce platform with Stripe payments",
      image:
        "https://via.placeholder.com/400x250/ef4444/ffffff?text=Lilaan+Handicrafts",
      category: "freelance",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "12/2023 – 01/2024",
      impact: "Increased sales by 150%",
      teamSize: "Solo project",
      challenges: [
        "Payment security",
        "Inventory management",
        "Order tracking",
      ],
      solutions: [
        "Implemented Stripe webhooks",
        "Built admin dashboard",
        "Added order status tracking",
      ],
    },
    {
      id: 6,
      title: "Mini-Redis Server",
      description:
        "Built a simplified Redis server with async networking using Tokio. Implemented pub/sub, connection handling, and graceful shutdown.",
      shortDescription: "Simplified Redis server implementation in Rust",
      image:
        "https://via.placeholder.com/400x250/06b6d4/ffffff?text=Mini-Redis",
      category: "personal",
      technologies: ["Rust", "Tokio", "Async", "Network programming"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "04/2024 – 05/2024",
      impact: "Educational project for learning Rust",
      teamSize: "Solo project",
      challenges: [
        "Async programming",
        "Network protocols",
        "Memory management",
      ],
      solutions: [
        "Used Tokio runtime",
        "Implemented RESP protocol",
        "Proper error handling",
      ],
    },
    {
      id: 7,
      title: "Chit Chat - Real-time Chat",
      description:
        "Developed real-time chat rooms with presence indicators and message history. Used Socket.IO for WebSocket communication and MongoDB for storage.",
      shortDescription: "Real-time chat application with presence indicators",
      image: "https://via.placeholder.com/400x250/ec4899/ffffff?text=Chit+Chat",
      category: "personal",
      technologies: ["Node.js", "Socket.IO", "Express", "MongoDB", "React"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "05/2024 – 06/2024",
      impact: "Supports 100+ concurrent users",
      teamSize: "Solo project",
      challenges: [
        "Real-time messaging",
        "User presence",
        "Message persistence",
      ],
      solutions: [
        "Socket.IO for real-time",
        "Heartbeat mechanism",
        "MongoDB for storage",
      ],
    },
  ];

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

  const nextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
    );
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
  };

  const openProjectDetails = (projectId) => {
    // Navigate to project details page using React Router
    navigate(`/project/${projectId}`);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      nextProject();
    }, 5000); // Change project every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoScrolling, currentIndex, filteredProjects.length]);

  // Reset current index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => setIsAutoScrolling(false);
  const handleMouseLeave = () => setIsAutoScrolling(true);

  return (
    <section id="projects" className="projects">
      <div className="container">
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
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${
                activeFilter === filter.id ? "active" : ""
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
              <span className="filter-count">({filter.count})</span>
            </button>
          ))}
        </motion.div>

        <div
          className="projects-carousel-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button
            className="carousel-nav-btn prev-btn"
            onClick={prevProject}
            aria-label="Previous project"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="projects-carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="project-card-small"
              >
                <div className="project-image">
                  <img
                    src={filteredProjects[currentIndex].image}
                    alt={filteredProjects[currentIndex].title}
                  />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a
                        href={filteredProjects[currentIndex].liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Eye size={20} />
                      </a>
                      <a
                        href={filteredProjects[currentIndex].githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                  {filteredProjects[currentIndex].featured && (
                    <div className="featured-badge">
                      <Star size={16} />
                      Featured
                    </div>
                  )}
                </div>

                <div className="project-content-small">
                  <div className="project-header">
                    <h3>{filteredProjects[currentIndex].title}</h3>
                    <div className="project-meta">
                      <span className="project-period">
                        <Calendar size={14} />
                        {filteredProjects[currentIndex].period}
                      </span>
                      <span className="project-team">
                        <Users size={14} />
                        {filteredProjects[currentIndex].teamSize}
                      </span>
                    </div>
                  </div>

                  <p className="project-description-small">
                    {filteredProjects[currentIndex].shortDescription}
                  </p>

                  <div className="project-impact-small">
                    <strong>Impact:</strong>{" "}
                    {filteredProjects[currentIndex].impact}
                  </div>

                  <div className="project-technologies-small">
                    {filteredProjects[currentIndex].technologies
                      .slice(0, 4)
                      .map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    {filteredProjects[currentIndex].technologies.length > 4 && (
                      <span className="tech-tag more">
                        +
                        {filteredProjects[currentIndex].technologies.length - 4}{" "}
                        more
                      </span>
                    )}
                  </div>

                  <button
                    className="view-details-btn"
                    onClick={() =>
                      openProjectDetails(filteredProjects[currentIndex].id)
                    }
                  >
                    View Details
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            className="carousel-nav-btn next-btn"
            onClick={nextProject}
            aria-label="Next project"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-indicators">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToProject(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="projects-cta"
        >
          <p>Interested in working together?</p>
          <button className="btn btn-primary">Let's Talk</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
