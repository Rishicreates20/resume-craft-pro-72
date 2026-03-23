import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Folder, ChevronDown, ChevronUp, Star, Sparkles } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  liveLink: string | null;
  githubLink: string | null;
  featured: boolean;
  dream?: boolean;
}

const projects: Project[] = [
  {
    title: "Path4U — AI-Powered Career Intelligence Platform",
    description:
      "Full-stack AI career platform that lets users upload resumes, take adaptive assessments, uncover skill gaps, and get matched with roles that fit. Features smart resume scanning, AI-adaptive questioning, personalized skill gap analysis, job matching, and career roadmaps — serving 10K+ resumes analyzed with 95% accuracy.",
    tech: ["React", "TypeScript", "AI/ML", "NLP", "Supabase", "Tailwind CSS"],
    highlights: ["10K+ resumes analyzed", "95% accuracy rate", "500+ jobs matched", "AI-adaptive assessments"],
    liveLink: "https://path4u.lovable.app/",
    githubLink: "https://github.com/Rishicreates20/Pitch4U",
    featured: true,
    dream: true,
  },
  {
    title: "AI-Powered Prompt-to-Website Builder",
    description: "Full-stack SaaS platform converting natural language into deployable websites using OpenAI GPT-4, serving 500+ users with 99.9% uptime.",
    tech: ["React", "TypeScript", "Node.js", "OpenAI API", "Supabase"],
    highlights: ["90% reduction in prototype time", "60% less runtime errors", "95% layout accuracy via NLP"],
    liveLink: "https://prompt-site-creator-80-48667vacy-rishikesh-sararngis-projects.vercel.app/",
    githubLink: "https://github.com/Rishicreates20/prompt-site-creator-80",
    featured: true,
  },
  {
    title: "AI Autonomous Coding Agent (Mini Devin)",
    description: "A web application where users describe software tasks in natural language. An AI autonomous agent understands the task, breaks it into steps, writes the code, and executes it in a sandboxed environment.",
    tech: ["TypeScript", "React", "AI Agents", "Sandboxed Execution"],
    highlights: ["Natural language to code pipeline", "Autonomous task decomposition", "Sandboxed code execution"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/AI-Autonomous-Coding-Agent-Mini-Devin-",
    featured: true,
  },
  {
    title: "Customer Churn Prediction System",
    description: "Robust ML pipeline achieving 87% accuracy via Random Forest and Logistic Regression on 7K+ records with interactive dashboards.",
    tech: ["Python", "Scikit-learn", "SQL", "Pandas", "Matplotlib"],
    highlights: ["87% prediction accuracy", "12% precision improvement", "15% churn reduction"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Customer-Churn-Prediction-Python-ML-",
    featured: true,
  },
  {
    title: "Stock Price Prediction (LSTM)",
    description: "Deep learning model using LSTM networks to predict NVIDIA stock prices with real-time market data and trend visualizations.",
    tech: ["Python", "TensorFlow", "LSTM", "Pandas", "Matplotlib"],
    highlights: ["LSTM-based forecasting", "Real-time data fetching", "Visual trend analysis"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/stock-prediction-",
    featured: true,
  },
  {
    title: "Pitch4U — AI Career Companion",
    description: "AI-powered career companion for modern professionals with intelligent career analysis and personalized recommendations.",
    tech: ["TypeScript", "React", "AI/ML", "NLP"],
    highlights: ["AI-driven career analysis", "Personalized recommendations", "Modern professional UI"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Pitch4U",
    featured: false,
  },
  {
    title: "Real-Time Cryptocurrency Tracker",
    description: "Responsive SPA tracking live prices for 50+ crypto assets via CoinGecko API with portfolio calculator and performance charts.",
    tech: ["React", "JavaScript", "Vite", "CoinGecko API", "Chart.js"],
    highlights: ["40% faster rendering", "99.9% accuracy", "10+ crypto tracking"],
    liveLink: "https://crypto-trackerrr123.netlify.app/",
    githubLink: "https://github.com/Rishicreates20/Crypto-tracker",
    featured: false,
  },
  {
    title: "Medical Imaging Stress Testing Framework",
    description: "Research project addressing reliability issues in medical imaging models (DCGAN) for ECG analysis. Published at CCI 2025.",
    tech: ["Python", "Jupyter", "DCGAN", "Image Processing", "NumPy"],
    highlights: ["Published research paper", "Stress testing for DCGAN models", "Medical imaging analysis"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Robust-Framework-for-Stress-Testing-Medical-Imaging-Models-using-Image-Reconstruction-Techniques",
    featured: false,
  },
  {
    title: "Sales Data Analysis Dashboard",
    description: "Comprehensive sales data analysis using Python with actionable business insights and visual reports.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    highlights: ["Multi-dimensional analysis", "Interactive visualizations", "Revenue insights"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Sales-Analysis",
    featured: false,
  },
  {
    title: "IoT Weather Monitoring System",
    description: "Embedded IoT system using Arduino Mega and DHT11 sensors for real-time environmental monitoring.",
    tech: ["C++", "Arduino", "Embedded Systems", "DHT11 Sensor"],
    highlights: ["98% sensor stability", "<1s display latency", "24-hour stress tested"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/iot-weather-station",
    featured: false,
  },
  {
    title: "Smart Attendance System",
    description: "Automated attendance tracking system using computer vision for face recognition.",
    tech: ["Python", "OpenCV", "Face Recognition", "CSV"],
    highlights: ["Automated face detection", "Real-time logging", "CSV export support"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/smart-attendance",
    featured: false,
  },
  {
    title: "Route Finder (Bi-Directional BFS/DFS)",
    description: "Graph algorithm implementation using bi-directional BFS and DFS for optimal route finding.",
    tech: ["Python", "Graph Algorithms", "BFS", "DFS"],
    highlights: ["Bi-directional optimization", "BFS & DFS comparison", "Visual path exploration"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Route-Finder-Using-Bi-Directional-BFS-DFS",
    featured: false,
  },
  {
    title: "LLaMA 3 Chatbot",
    description: "Local AI chatbot powered by Meta's LLaMA 3 model via Ollama for private, offline conversational AI.",
    tech: ["Python", "Ollama", "LLaMA 3", "Streamlit"],
    highlights: ["Fully local AI inference", "No cloud dependency", "Conversational AI"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/llama3-chatbot",
    featured: false,
  },
];

const INITIAL_SHOW = 6;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isDream = project.dream;
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`rounded-2xl p-6 md:p-8 transition-all duration-300 group hover-lift relative overflow-hidden ${
        isDream
          ? "glass gradient-border"
          : isFeatured
          ? "glass"
          : "glass"
      }`}
    >
      {/* Dream project glow effect */}
      {isDream && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-[60px] animate-pulse-glow" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary-glow/10 blur-[60px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
        </div>
      )}

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                isDream ? "" : "bg-secondary/80"
              }`}
              style={isDream ? { background: "var(--gradient-primary)" } : undefined}
            >
              {isDream ? (
                <Sparkles size={18} className="text-primary-foreground" />
              ) : (
                <Folder size={18} className="text-primary" />
              )}
            </div>
            {isDream && (
              <span className="text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-bold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                <Star size={10} className="inline mr-1 -mt-0.5" />
                Dream Project
              </span>
            )}
            {isFeatured && !isDream && (
              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Live Demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-lg font-bold font-heading mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.highlights.map((h) => (
            <span key={h} className="text-[11px] text-primary font-mono bg-primary/5 px-2.5 py-1 rounded-lg border border-primary/10">
              {h}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-secondary/60 text-secondary-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_SHOW);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-lg">04.</span> Projects
            <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4 hidden md:block" />
          </h2>
          <p className="text-sm text-muted-foreground font-mono mt-1">
            {projects.length} projects • Featured & open-source work
          </p>

          <div className="mt-8 space-y-5">
            <AnimatePresence mode="wait">
              {visibleProjects.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </AnimatePresence>
          </div>

          {projects.length > INITIAL_SHOW && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-10 text-center"
            >
              <button
                onClick={() => setShowAll(!showAll)}
                className="inline-flex items-center gap-2 font-mono text-sm px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                style={
                  showAll
                    ? { color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.3)" }
                    : { background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }
                }
              >
                {showAll ? "Show Less" : `Show All ${projects.length} Projects`}
                {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
