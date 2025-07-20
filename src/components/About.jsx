import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  GraduationCap,
  Award,
  Target,
  Users,
} from "lucide-react";

const About = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Infinite Locus Private Ltd.",
      period: "12/2024 – Present",
      description:
        "Contributed to full-stack development of logistics, e-commerce, and internal platforms using Node.js, FastAPI, React, and MongoDB/MySQL. Focused on post-order operations, mobile apps, and admin systems, enhancing performance by up to 40%.",
      location: "Gurugram, Haryana",
      achievements: [
        "Enhanced system performance by 40% through optimization",
        "Led development of 3 major platform features",
        "Mentored 2 junior developers",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
      ],
      technologies: ["Node.js", "FastAPI", "React", "MongoDB", "MySQL", "AWS"],
    },
  ];

  const education = [
    {
      degree: "B.Tech in Electronics and Communication Engineering",
      school: "Netaji Subhas University of Technology (NSUT)",
      period: "01/2021 – 05/2025",
      description: "CGPA: 7.31",
      location: "Dwarka sec-3, New Delhi",
      highlights: [
        "Specialized in Software Engineering and Web Development",
        "Completed 70+ hands-on labs in Google Cloud program",
        "Active member of coding clubs and hackathons",
      ],
    },
    {
      degree: "Intermediate",
      school: "Govt. Sarvodaya Sen. Sec. School",
      period: "04/2019 – 05/2020",
      description: "Percentage: 87.6%",
      location: "Janakpuri Block B, Possangipur",
    },
    {
      degree: "High School",
      school: "New Holy Public School",
      period: "04/2017 – 05/2018",
      description: "Percentage: 81.2%",
      location: "Uttam Nagar East",
    },
  ];

  const achievements = [
    {
      icon: <Award size={24} />,
      title: "LeetCode Expert",
      value: "1760+ Rating",
      description: "Solved 1000+ problems across multiple platforms",
    },
    {
      icon: <Target size={24} />,
      title: "HackerRank 5-Star",
      value: "Data Structures & C++",
      description: "Achieved highest rating in competitive programming",
    },
    {
      icon: <Users size={24} />,
      title: "GitHub Contributor",
      value: "720+ Contributions",
      description: "Active open-source contributor annually",
    },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-text"
          >
            <h3>Who I Am</h3>
            <p>
              I'm a <strong>skilled Backend Developer</strong> with expertise in
              building scalable, high-performance systems for logistics,
              e-commerce, and e-learning platforms. I specialize in{" "}
              <strong>
                Node.js, Express, FastAPI, MySQL, MongoDB, PostgreSQL,
                Socket.IO, cron jobs, and AWS
              </strong>
              .
            </p>
            <p>
              I lead key backend features, optimize workflows, and ensure
              seamless user experiences. With{" "}
              <strong>720+ GitHub contributions annually</strong>, I'm
              passionate about clean code and innovative solutions.
            </p>

            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="achievement-card"
                >
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <span className="achievement-value">
                      {achievement.value}
                    </span>
                    <p>{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about-details"
          >
            <div className="experience-section">
              <div className="section-title">
                <Briefcase size={24} />
                <h3>Professional Experience</h3>
              </div>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="timeline-item"
                  >
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>{exp.title}</h4>
                        <span className="company-badge">{exp.company}</span>
                      </div>
                      <span className="period">{exp.period}</span>
                      <p className="location">{exp.location}</p>
                      <p className="description">{exp.description}</p>

                      <div className="achievements-list">
                        <h5>Key Achievements:</h5>
                        <ul>
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="technologies-used">
                        <h5>Technologies:</h5>
                        <div className="tech-tags">
                          {exp.technologies.map((tech, idx) => (
                            <span key={idx} className="tech-tag">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="education-section">
              <div className="section-title">
                <GraduationCap size={24} />
                <h3>Education</h3>
              </div>
              <div className="timeline">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="timeline-item"
                  >
                    <div className="timeline-content">
                      <div className="timeline-header">
                        <h4>{edu.degree}</h4>
                        <span className="school-badge">{edu.school}</span>
                      </div>
                      <span className="period">{edu.period}</span>
                      <p className="location">{edu.location}</p>
                      <p className="description">{edu.description}</p>

                      {edu.highlights && (
                        <div className="education-highlights">
                          <h5>Highlights:</h5>
                          <ul>
                            {edu.highlights.map((highlight, idx) => (
                              <li key={idx}>{highlight}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
