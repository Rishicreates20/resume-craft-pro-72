import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Prompt-to-Website Builder",
    description:
      "Full-stack SaaS platform converting natural language into deployable websites using OpenAI GPT-4, serving 500+ users with 99.9% uptime.",
    tech: ["React", "TypeScript", "Node.js", "OpenAI API", "Supabase"],
    highlights: [
      "90% reduction in prototype time",
      "60% less runtime errors",
      "95% layout accuracy via NLP",
    ],
    liveLink: "#",
    githubLink: null,
    featured: true,
  },
  {
    title: "Customer Churn Prediction System",
    description:
      "Robust ML pipeline achieving 87% accuracy via Random Forest and Logistic Regression on 7K+ records with interactive dashboards.",
    tech: ["Python", "Scikit-learn", "SQL", "Pandas", "Matplotlib"],
    highlights: [
      "87% prediction accuracy",
      "12% precision improvement",
      "15% churn reduction for stakeholders",
    ],
    liveLink: null,
    githubLink: "#",
    featured: true,
  },
  {
    title: "Real-Time Cryptocurrency Tracker",
    description:
      "Responsive SPA tracking live prices for 50+ assets via CoinGecko API with portfolio calculator and sub-2s refresh rates.",
    tech: ["React", "Vite", "CoinGecko API"],
    highlights: [
      "40% faster rendering",
      "99.9% calculation accuracy",
      "10+ crypto portfolio tracking",
    ],
    liveLink: "#",
    githubLink: null,
    featured: false,
  },
  {
    title: "IoT Weather Monitoring System",
    description:
      "Embedded IoT system using Arduino Mega and DHT11 sensors for real-time environmental monitoring with ±2°C accuracy.",
    tech: ["C++", "Arduino", "Embedded Systems"],
    highlights: [
      "98% sensor stability",
      "<1s display latency",
      "24-hour stress tested",
    ],
    liveLink: null,
    githubLink: "#",
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-lg">04.</span> Projects
            <span className="flex-1 h-px bg-border ml-4 hidden md:block" />
          </h2>

          <div className="mt-8 space-y-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 md:p-8 border border-border hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder size={28} className="text-primary" />
                  <div className="flex items-center gap-3">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-xs text-primary font-mono">
                      • {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
