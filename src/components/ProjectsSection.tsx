import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Folder, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Prompt-to-Website Builder",
    description:
      "Full-stack SaaS platform converting natural language into deployable websites using OpenAI GPT-4, serving 500+ users with 99.9% uptime. Features intelligent layout generation, responsive design output, and one-click deployment.",
    tech: ["React", "TypeScript", "Node.js", "OpenAI API", "Supabase"],
    highlights: [
      "90% reduction in prototype time",
      "60% less runtime errors",
      "95% layout accuracy via NLP",
    ],
    liveLink: "https://prompt-site-creator-80-48667vacy-rishikesh-sararngis-projects.vercel.app/",
    githubLink: "https://github.com/Rishicreates20/prompt-site-creator-80",
    featured: true,
  },
  {
    title: "AI Autonomous Coding Agent (Mini Devin)",
    description:
      "A web application where users describe software tasks in natural language. An AI autonomous agent understands the task, breaks it into steps, writes the code, and executes it in a sandboxed environment — mimicking an AI software engineer.",
    tech: ["TypeScript", "React", "AI Agents", "Sandboxed Execution"],
    highlights: [
      "Natural language to code pipeline",
      "Autonomous task decomposition",
      "Sandboxed code execution",
    ],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/AI-Autonomous-Coding-Agent-Mini-Devin-",
    featured: true,
  },
  {
    title: "Customer Churn Prediction System",
    description:
      "Robust ML pipeline achieving 87% accuracy via Random Forest and Logistic Regression on 7K+ records with interactive dashboards. Includes feature engineering, cross-validation, and stakeholder-ready visualizations.",
    tech: ["Python", "Scikit-learn", "SQL", "Pandas", "Matplotlib"],
    highlights: [
      "87% prediction accuracy",
      "12% precision improvement",
      "15% churn reduction for stakeholders",
    ],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Customer-Churn-Prediction-Python-ML-",
    featured: true,
  },
  {
    title: "Stock Price Prediction (LSTM)",
    description:
      "Deep learning model using LSTM networks to predict NVIDIA stock prices. Fetches real-time market data, provides accuracy metrics, and generates visualizations for trend analysis with potential for sentiment analysis integration.",
    tech: ["Python", "TensorFlow", "LSTM", "Pandas", "Matplotlib"],
    highlights: [
      "LSTM-based time series forecasting",
      "Real-time data fetching",
      "Visual trend analysis",
    ],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/stock-prediction-",
    featured: true,
  },
  {
    title: "Pitch4U — AI Career Companion",
    description:
      "AI-powered career companion for modern professionals. Analyzes career profiles with intelligence, provides guided clarity on career paths, and empowers users with confidence through personalized recommendations.",
    tech: ["TypeScript", "React", "AI/ML", "NLP"],
    highlights: [
      "AI-driven career analysis",
      "Personalized recommendations",
      "Modern professional UI",
    ],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Pitch4U",
    featured: false,
  },
  {
    title: "Real-Time Cryptocurrency Tracker",
    description:
      "Responsive SPA tracking live prices for 50+ cryptocurrency assets via CoinGecko API with portfolio calculator, performance charts, and sub-2s refresh rates for real-time market monitoring.",
    tech: ["React", "JavaScript", "Vite", "CoinGecko API", "Chart.js"],
    highlights: [
      "40% faster rendering",
      "99.9% calculation accuracy",
      "10+ crypto portfolio tracking",
    ],
    liveLink: "https://crypto-trackerrr123.netlify.app/",
    githubLink: "https://github.com/Rishicreates20/Crypto-tracker",
    featured: false,
  },
  {
    title: "Medical Imaging Stress Testing Framework",
    description:
      "Research project addressing reliability issues in medical imaging models (DCGAN) for ECG analysis. Tests model robustness against rotations, noise, and variations using image reconstruction techniques. Published at CCI 2025.",
    tech: ["Python", "Jupyter", "DCGAN", "Image Processing", "NumPy"],
    highlights: [
      "Published research paper",
      "Stress testing for DCGAN models",
      "Medical imaging reliability analysis",
    ],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Robust-Framework-for-Stress-Testing-Medical-Imaging-Models-using-Image-Reconstruction-Techniques",
    featured: false,
  },
  {
    title: "Sales Data Analysis Dashboard",
    description:
      "Comprehensive sales data analysis using Python with Pandas, Matplotlib, and Seaborn. Processes product, region, sales, and revenue data to generate actionable business insights and visual reports.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    highlights: [
      "Multi-dimensional data analysis",
      "Interactive visualizations",
      "Revenue trend insights",
    ],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Sales-Analysis",
    featured: false,
  },
  {
    title: "IoT Weather Monitoring System",
    description:
      "Embedded IoT system using Arduino Mega and DHT11 sensors for real-time environmental monitoring with ±2°C accuracy, LCD display output, and 24-hour continuous operation capability.",
    tech: ["C++", "Arduino", "Embedded Systems", "DHT11 Sensor"],
    highlights: [
      "98% sensor stability",
      "<1s display latency",
      "24-hour stress tested",
    ],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/iot-weather-station",
    featured: false,
  },
  {
    title: "Smart Attendance System",
    description:
      "Automated attendance tracking system built with Python, leveraging computer vision for face recognition to streamline attendance management in educational or corporate environments.",
    tech: ["Python", "OpenCV", "Face Recognition", "CSV"],
    highlights: [
      "Automated face detection",
      "Real-time attendance logging",
      "CSV export support",
    ],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/smart-attendance",
    featured: false,
  },
  {
    title: "Route Finder (Bi-Directional BFS/DFS)",
    description:
      "Graph algorithm implementation using bi-directional BFS and DFS for optimal route finding. Demonstrates advanced algorithm design with visual path exploration and performance comparisons.",
    tech: ["Python", "Graph Algorithms", "BFS", "DFS"],
    highlights: [
      "Bi-directional search optimization",
      "BFS & DFS comparison",
      "Visual path exploration",
    ],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Route-Finder-Using-Bi-Directional-BFS-DFS",
    featured: false,
  },
  {
    title: "LLaMA 3 Chatbot",
    description:
      "Local AI chatbot powered by Meta's LLaMA 3 model via Ollama, enabling private and offline conversational AI without cloud dependencies.",
    tech: ["Python", "Ollama", "LLaMA 3", "Streamlit"],
    highlights: [
      "Fully local AI inference",
      "No cloud dependency",
      "Conversational AI interface",
    ],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/llama3-chatbot",
    featured: false,
  },
];

const INITIAL_SHOW = 6;

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_SHOW);

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
          <p className="text-sm text-muted-foreground font-mono mt-1">
            {projects.length} projects • Featured & open-source work
          </p>

          <div className="mt-8 space-y-6">
            {visibleProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`bg-card rounded-lg p-6 md:p-8 border transition-colors group ${
                  project.featured
                    ? "border-primary/20 hover:border-primary/50 shadow-[0_0_15px_hsl(172_66%_50%/0.05)]"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Folder size={28} className="text-primary" />
                    {project.featured && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                        Featured
                      </span>
                    )}
                  </div>
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

          {projects.length > INITIAL_SHOW && (
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 font-mono text-sm text-primary border border-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors"
              >
                {showAll ? "Show Less" : `Show All ${projects.length} Projects`}
                {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
