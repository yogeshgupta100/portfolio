import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Download,
  Mail,
  Github,
  ArrowDown,
  Code,
  Database,
  Cloud,
} from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const floatingIcons = [
    { icon: <Code size={20} />, delay: 0, x: -20, y: -10 },
    { icon: <Database size={20} />, delay: 0.5, x: 20, y: -15 },
    { icon: <Cloud size={20} />, delay: 1, x: -15, y: 15 },
  ];

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Parallax background layers */}
      <motion.div className="parallax-bg parallax-bg-1" style={{ y, scale }} />
      <motion.div className="parallax-bg parallax-bg-2" style={{ y: y2 }} />
      <motion.div className="parallax-bg parallax-bg-3" style={{ y: y3 }} />
      <motion.div
        className="parallax-bg parallax-bg-4"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "40%"]) }}
      />

      {/* Background floating icons */}
      <div className="floating-icons">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="floating-icon"
            initial={{ opacity: 0, x: item.x, y: item.y, scale: 0 }}
            animate={{
              opacity: 0.3,
              x: [item.x, item.x + 20, item.x - 20, item.x],
              y: [item.y, item.y - 20, item.y + 20, item.y],
              scale: [1, 1.2, 0.8, 1],
            }}
            transition={{
              duration: 8,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <motion.div className="hero-container" style={{ opacity, scale }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
          style={{
            x: mousePosition.x * 0.5,
            y: mousePosition.y * 0.5,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-badge"
          >
            <span>🚀 Available for opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-title"
          >
            Hi, I'm <span className="highlight">Yogesh Gupta</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            <span className="typing-text">Skilled Backend Developer</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-description"
          >
            I specialize in building{" "}
            <strong>scalable, high-performance systems</strong> for logistics,
            e-commerce, and e-learning. Passionate about delivering{" "}
            <strong>robust APIs</strong> and{" "}
            <strong>real-time solutions</strong> that ensure seamless user
            experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-stats"
          >
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">720+</span>
              <span className="stat-label">GitHub Contributions</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Problems Solved</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="hero-buttons"
          >
            <button className="btn btn-primary" onClick={scrollToContact}>
              <Mail size={20} />
              Get In Touch
            </button>
            <button className="btn btn-secondary" onClick={scrollToAbout}>
              <Download size={20} />
              View Resume
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-image"
          style={{
            x: -mousePosition.x * 0.3,
            y: -mousePosition.y * 0.3,
          }}
        >
          <div className="profile-placeholder">
            <motion.div
              className="profile-circle"
              whileHover={{ scale: 1.05, rotate: 5 }}
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                rotate: {
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <span>👨‍💻</span>
            </motion.div>
            <motion.div
              className="tech-stack-badge"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <span>Node.js • FastAPI • React • AWS</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="social-links"
        >
          <a
            href="https://github.com/yogeshgupta100"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub Profile"
          >
            <Github size={24} />
            <span className="social-label">GitHub</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="scroll-indicator"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={24} />
        </motion.div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;
