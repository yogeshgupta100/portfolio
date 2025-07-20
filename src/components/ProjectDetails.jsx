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

const ProjectDetails = ({ projectId, onBack }) => {
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const projects = [
    {
      id: 1,
      title: "Scout - Talent Management Platform",
      description:
        "Developed a comprehensive talent management system with candidate tracking, interview scheduling, and performance analytics. Built scalable backend APIs and intuitive frontend dashboard for HR teams.",
      shortDescription:
        "Talent management system with candidate tracking and analytics",
      image:
        "https://via.placeholder.com/800x400/1e3a8a/ffffff?text=Scout+Platform",
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
      features: [
        "Real-time candidate tracking and status updates",
        "Intelligent interview scheduling with conflict detection",
        "Performance analytics dashboard with metrics",
        "Role-based access control and permissions",
        "Integration with third-party HR tools",
        "Mobile-responsive admin dashboard",
      ],
      architecture: {
        frontend: "React with TypeScript, Redux for state management",
        backend: "Node.js with Express, Socket.IO for real-time features",
        database: "MongoDB with Mongoose ODM",
        deployment: "AWS ECS with Docker containers",
        monitoring: "CloudWatch and custom analytics",
      },
    },
    {
      id: 2,
      title: "Infinite Locus Website",
      description:
        "Developed and completed the company's website using Next.js, TypeScript, and Tailwind CSS, ensuring full responsiveness and seamless server-side API handling via Strapi.",
      shortDescription: "Company website with Next.js and TypeScript",
      image:
        "https://via.placeholder.com/800x400/10b981/ffffff?text=Infinite+Locus",
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
      features: [
        "Server-side rendering for optimal SEO performance",
        "Responsive design across all devices",
        "Content management system integration",
        "Fast loading times with image optimization",
        "Contact forms with email integration",
        "Blog section with dynamic content",
      ],
      architecture: {
        frontend: "Next.js with TypeScript and Tailwind CSS",
        cms: "Strapi headless CMS",
        deployment: "Vercel for hosting and CI/CD",
        optimization: "Image optimization and lazy loading",
      },
    },
    {
      id: 3,
      title: "Supertails Internal Dashboard",
      description:
        "Contributed to post-order features like return/cancel workflows and delivery partner tracking on a React + Node.js stack. Improved state syncing using Redux Toolkit, and implemented tab-level sync with redux-state-sync.",
      shortDescription: "Internal dashboard for order management and tracking",
      image:
        "https://via.placeholder.com/800x400/f59e0b/ffffff?text=Supertails+Dashboard",
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
      features: [
        "Real-time order tracking and status updates",
        "Return and cancellation workflow management",
        "Delivery partner tracking and assignment",
        "Cross-tab state synchronization",
        "Advanced filtering and search capabilities",
        "Export functionality for reports",
      ],
      architecture: {
        frontend: "React with Redux Toolkit and redux-state-sync",
        backend: "Node.js with Express and Socket.IO",
        state: "Redux for global state management",
        realtime: "WebSocket connections for live updates",
      },
    },
    {
      id: 4,
      title: "Housemate - Roommate Matching App",
      description:
        "Built a roommate-matching app with user profiles, property listings, and messaging. Integrated Firebase for real-time chat and Context API for state management.",
      shortDescription: "Roommate matching app with real-time messaging",
      image: "https://via.placeholder.com/800x400/8b5cf6/ffffff?text=Housemate",
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
      features: [
        "User profile creation and management",
        "Property listing with detailed information",
        "Real-time messaging between users",
        "Preference-based matching algorithm",
        "Secure payment processing with Stripe",
        "Review and rating system",
      ],
      architecture: {
        frontend: "React with Material-UI and Context API",
        backend: "Firebase for authentication and database",
        realtime: "Firebase Realtime Database for messaging",
        payments: "Stripe integration for secure transactions",
      },
    },
    {
      id: 5,
      title: "Lilaan Handicrafts - E-commerce",
      description:
        "Developed an e-commerce site with Stripe integration for secure payments. Built responsive UI and backend product management using MongoDB.",
      shortDescription: "E-commerce platform with Stripe payments",
      image:
        "https://via.placeholder.com/800x400/ef4444/ffffff?text=Lilaan+Handicrafts",
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
      features: [
        "Product catalog with categories and search",
        "Secure payment processing with Stripe",
        "Order tracking and status updates",
        "Admin dashboard for inventory management",
        "Customer account management",
        "Email notifications for orders",
      ],
      architecture: {
        frontend: "Next.js with Tailwind CSS",
        backend: "Next.js API routes",
        database: "MongoDB with Mongoose",
        payments: "Stripe with webhook integration",
      },
    },
    {
      id: 6,
      title: "Mini-Redis Server",
      description:
        "Built a simplified Redis server with async networking using Tokio. Implemented pub/sub, connection handling, and graceful shutdown.",
      shortDescription: "Simplified Redis server implementation in Rust",
      image:
        "https://via.placeholder.com/800x400/06b6d4/ffffff?text=Mini-Redis",
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
      features: [
        "Basic key-value storage operations",
        "Pub/Sub messaging system",
        "Connection pooling and management",
        "Graceful shutdown handling",
        "RESP protocol implementation",
        "Memory-efficient data structures",
      ],
      architecture: {
        language: "Rust with async/await",
        runtime: "Tokio for async networking",
        protocol: "RESP (Redis Serialization Protocol)",
        memory: "Ownership and borrowing for safety",
      },
    },
    {
      id: 7,
      title: "Chit Chat - Real-time Chat",
      description:
        "Developed real-time chat rooms with presence indicators and message history. Used Socket.IO for WebSocket communication and MongoDB for storage.",
      shortDescription: "Real-time chat application with presence indicators",
      image: "https://via.placeholder.com/800x400/ec4899/ffffff?text=Chit+Chat",
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
      features: [
        "Real-time messaging with instant delivery",
        "User presence indicators (online/offline)",
        "Message history and persistence",
        "Multiple chat rooms support",
        "File sharing capabilities",
        "User authentication and profiles",
      ],
      architecture: {
        frontend: "React with Socket.IO client",
        backend: "Node.js with Express and Socket.IO",
        database: "MongoDB for message storage",
        realtime: "WebSocket connections for live chat",
      },
    },
  ];

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
          <div className="project-image-large">
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-info">
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
