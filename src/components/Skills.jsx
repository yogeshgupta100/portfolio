import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Cloud,
  Wrench,
  Zap,
  Shield,
  Globe,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code size={24} />,
      description: "Core languages I use for development",
      skills: [
        {
          name: "JavaScript",
          level: 90,
          description: "ES6+, Async/Await, Promises",
        },
        {
          name: "TypeScript",
          level: 85,
          description: "Type safety, Interfaces, Generics",
        },
        {
          name: "Python",
          level: 80,
          description: "FastAPI, Django, Data processing",
        },
        {
          name: "SQL",
          level: 85,
          description: "Complex queries, Optimization, Stored procedures",
        },
        {
          name: "C++",
          level: 75,
          description: "Data structures, Algorithms, STL",
        },
        {
          name: "C",
          level: 70,
          description: "System programming, Memory management",
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <Database size={24} />,
      description: "Server-side technologies and frameworks",
      skills: [
        {
          name: "Node.js",
          level: 90,
          description: "Express.js, REST APIs, Microservices",
        },
        {
          name: "Express.js",
          level: 85,
          description: "Middleware, Routing, Authentication",
        },
        {
          name: "FastAPI",
          level: 80,
          description: "Async APIs, Pydantic, OpenAPI",
        },
        {
          name: "MongoDB",
          level: 85,
          description: "Aggregation, Indexing, Replication",
        },
        {
          name: "MySQL",
          level: 80,
          description: "Transactions, Joins, Performance tuning",
        },
        {
          name: "PostgreSQL",
          level: 75,
          description: "Advanced queries, JSON support",
        },
      ],
    },
    {
      title: "Frontend Development",
      icon: <Code size={24} />,
      description: "Client-side technologies and frameworks",
      skills: [
        {
          name: "React",
          level: 80,
          description: "Hooks, Context, Redux Toolkit",
        },
        { name: "Next.js", level: 75, description: "SSR, SSG, API routes" },
        {
          name: "React-Native",
          level: 70,
          description: "Mobile development, Native modules",
        },
        {
          name: "HTML/CSS",
          level: 85,
          description: "Semantic HTML, CSS Grid, Flexbox",
        },
        {
          name: "Tailwind CSS",
          level: 80,
          description: "Utility-first, Responsive design",
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud size={24} />,
      description: "Cloud platforms and deployment tools",
      skills: [
        {
          name: "AWS (EC2, S3, ECS, Lambda)",
          level: 80,
          description: "Serverless, Containerization",
        },
        {
          name: "CI/CD Pipelines",
          level: 75,
          description: "GitHub Actions, Jenkins, GitLab CI",
        },
        {
          name: "GitHub Actions",
          level: 80,
          description: "Automated testing, Deployment",
        },
        {
          name: "Docker",
          level: 70,
          description: "Containerization, Docker Compose",
        },
        {
          name: "Nginx",
          level: 75,
          description: "Reverse proxy, Load balancing",
        },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench size={24} />,
      description: "Development tools and utilities",
      skills: [
        {
          name: "Git & GitHub",
          level: 90,
          description: "Version control, Collaboration",
        },
        {
          name: "Postman",
          level: 85,
          description: "API testing, Documentation",
        },
        {
          name: "Socket.IO",
          level: 80,
          description: "Real-time communication",
        },
        {
          name: "JWT",
          level: 80,
          description: "Authentication, Authorization",
        },
        {
          name: "bcrypt",
          level: 75,
          description: "Password hashing, Security",
        },
        {
          name: "Cron Jobs",
          level: 75,
          description: "Scheduled tasks, Automation",
        },
      ],
    },
    {
      title: "Performance & Security",
      icon: <Shield size={24} />,
      description: "Performance optimization and security practices",
      skills: [
        {
          name: "API Security",
          level: 80,
          description: "OAuth, Rate limiting, CORS",
        },
        {
          name: "Performance Optimization",
          level: 75,
          description: "Caching, Database optimization",
        },
        {
          name: "Error Handling",
          level: 85,
          description: "Logging, Monitoring, Debugging",
        },
        {
          name: "Testing",
          level: 70,
          description: "Unit tests, Integration tests",
        },
      ],
    },
  ];

  const additionalSkills = [
    "REST APIs",
    "GraphQL",
    "Microservices",
    "Message Queues",
    "Redis",
    "Elasticsearch",
    "Kubernetes",
    "Terraform",
    "Monitoring",
    "Logging",
    "API Documentation",
    "Swagger",
    "OAuth 2.0",
    "Rate Limiting",
    "Caching Strategies",
    "Database Design",
    "System Design",
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>Skills & Expertise</h2>
          <p>Technologies and tools I work with</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="skill-category"
            >
              <div className="category-header">
                {category.icon}
                <div className="category-info">
                  <h3>{category.title}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="skill-item"
                  >
                    <div className="skill-info">
                      <div className="skill-details">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-description">
                          {skill.description}
                        </span>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="skill-progress"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="additional-skills"
        >
          <h3>Additional Skills & Technologies</h3>
          <div className="skills-tags">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="skill-tag"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="accomplishments-section mt-4"
        >
          <h3>Professional Accomplishments</h3>
          <div className="accomplishments">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="accomplishment-item"
            >
              <div className="accomplishment-icon">🏆</div>
              <h4>LeetCode Expert - 1760+ Rating</h4>
              <p>
                Solved 1000+ problems on LeetCode, GeeksforGeeks, and
                HackerRank. Specialized in algorithms, data structures, and
                system design problems.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="accomplishment-item"
            >
              <div className="accomplishment-icon">⭐</div>
              <h4>HackerRank 5-Star Rating</h4>
              <p>
                Achieved 5-star rating in Data Structures and C++. Demonstrated
                strong problem-solving skills and algorithmic thinking.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="accomplishment-item"
            >
              <div className="accomplishment-icon">☁️</div>
              <h4>Google Cloud Certified</h4>
              <p>
                Completed 70+ hands-on labs in 30 Days of Google Cloud program
                (2020). Gained expertise in cloud computing and infrastructure.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
