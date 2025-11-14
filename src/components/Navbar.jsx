import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Determine active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Handle route changes
    if (location.pathname === "/contact") {
      setActiveSection("contact");
    } else {
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check on mount
    }

    return () => {
      if (location.pathname !== "/contact") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [location.pathname]);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Portfolio</h2>
        </div>

        <AnimatePresence>
          <motion.div
            className={`nav-menu ${isOpen ? "active" : ""}`}
            initial={false}
            animate={isOpen ? { opacity: 1, x: 0 } : {}}
          >
            {navItems.map((item, index) => {
              const isActive =
                activeSection === item.id ||
                (location.pathname === "/contact" && item.id === "contact");

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    // Immediately update active section for instant border movement
                    setActiveSection(item.id);

                    if (item.href === "#contact") {
                      navigate("/contact");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    } else {
                      if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                          scrollToSection(item.href);
                        }, 100);
                      } else {
                        scrollToSection(item.href);
                      }
                    }
                  }}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      className="nav-link-indicator"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{
                        type: "tween",
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
