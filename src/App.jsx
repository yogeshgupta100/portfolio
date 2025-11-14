import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ContactPage from "./components/ContactPage";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import "./App.css";

// Main Portfolio Component
const Portfolio = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
};

// Project Details Page Component
const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return <ProjectDetails projectId={projectId} onBack={handleBack} />;
};

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route
              path="/project/:projectId"
              element={<ProjectDetailsPage />}
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
