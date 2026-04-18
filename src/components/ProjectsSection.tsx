import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Folder,
  Star,
  Sparkles,
  GitFork,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Zap,
} from "lucide-react";
import { useGitHubRepos, GitHubRepo } from "@/hooks/use-github-repos";

interface Project {
  title: string;
  description: string;
  tech: string[];
  highlights: string[];
  liveLink: string | null;
  githubLink: string | null;
  featured: boolean;
  dream?: boolean;
  size?: "large" | "wide" | "tall" | "small";
}

const HARDCODED_GITHUB_URLS = new Set([
  "https://github.com/Rishicreates20/Pitch4U",
  "https://github.com/Rishicreates20/prompt-site-creator-80",
  "https://github.com/Rishicreates20/AI-Autonomous-Coding-Agent-Mini-Devin-",
  "https://github.com/Rishicreates20/Customer-Churn-Prediction-Python-ML-",
  "https://github.com/Rishicreates20/stock-prediction-",
  "https://github.com/Rishicreates20/Crypto-tracker",
  "https://github.com/Rishicreates20/Robust-Framework-for-Stress-Testing-Medical-Imaging-Models-using-Image-Reconstruction-Techniques",
  "https://github.com/Rishicreates20/Sales-Analysis",
  "https://github.com/Rishicreates20/iot-weather-station",
  "https://github.com/Rishicreates20/smart-attendance",
  "https://github.com/Rishicreates20/Route-Finder-Using-Bi-Directional-BFS-DFS",
  "https://github.com/Rishicreates20/llama3-chatbot",
]);

const projects: Project[] = [
  {
    title: "Path4U — AI-Powered Career Intelligence Platform",
    description:
      "Full-stack AI career platform with resume scanning, AI-adaptive questioning, skill gap analysis, job matching & roadmaps — serving 10K+ resumes analyzed at 95% accuracy.",
    tech: ["React", "TypeScript", "AI/ML", "NLP", "Supabase", "Tailwind CSS"],
    highlights: ["10K+ resumes analyzed", "95% accuracy rate", "500+ jobs matched"],
    liveLink: "https://path4u.lovable.app/",
    githubLink: "https://github.com/Rishicreates20/Pitch4U",
    featured: true,
    dream: true,
    size: "large",
  },
  {
    title: "AI Prompt-to-Website Builder",
    description: "Full-stack SaaS platform converting natural language into deployable websites using OpenAI GPT-4, serving 500+ users with 99.9% uptime.",
    tech: ["React", "TypeScript", "Node.js", "OpenAI API", "Supabase"],
    highlights: ["90% faster prototyping", "60% fewer errors", "95% layout accuracy"],
    liveLink: "https://prompt-site-creator-80-48667vacy-rishikesh-sararngis-projects.vercel.app/",
    githubLink: "https://github.com/Rishicreates20/prompt-site-creator-80",
    featured: true,
    size: "wide",
  },
  {
    title: "AI Autonomous Coding Agent",
    description: "Mini Devin — describe tasks in natural language; the agent breaks them into steps, writes & executes code in a sandboxed environment.",
    tech: ["TypeScript", "React", "AI Agents", "Sandboxed Execution"],
    highlights: ["Natural language pipeline", "Autonomous task decomp", "Sandboxed execution"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/AI-Autonomous-Coding-Agent-Mini-Devin-",
    featured: true,
    size: "tall",
  },
  {
    title: "Customer Churn Prediction",
    description: "ML pipeline achieving 87% accuracy via Random Forest & Logistic Regression on 7K+ records with interactive dashboards.",
    tech: ["Python", "Scikit-learn", "SQL", "Pandas", "Matplotlib"],
    highlights: ["87% accuracy", "12% precision boost", "15% churn reduction"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Customer-Churn-Prediction-Python-ML-",
    featured: true,
    size: "small",
  },
  {
    title: "Stock Price Prediction (LSTM)",
    description: "Deep learning LSTM model predicting NVIDIA stock prices with real-time market data and trend visualisations.",
    tech: ["Python", "TensorFlow", "LSTM", "Pandas", "Matplotlib"],
    highlights: ["LSTM-based forecasting", "Real-time data", "Visual trends"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/stock-prediction-",
    featured: true,
    size: "small",
  },
  {
    title: "Real-Time Crypto Tracker",
    description: "Responsive SPA tracking live prices for 50+ crypto assets via CoinGecko API with portfolio calculator and performance charts.",
    tech: ["React", "JavaScript", "Vite", "CoinGecko API", "Chart.js"],
    highlights: ["40% faster rendering", "99.9% accuracy", "50+ assets"],
    liveLink: "https://crypto-trackerrr123.netlify.app/",
    githubLink: "https://github.com/Rishicreates20/Crypto-tracker",
    featured: false,
    size: "small",
  },
  {
    title: "Medical Imaging Stress Testing",
    description: "Research project addressing reliability in medical imaging models (DCGAN) for ECG analysis. Published at CCI 2025.",
    tech: ["Python", "Jupyter", "DCGAN", "Image Processing", "NumPy"],
    highlights: ["Published research", "DCGAN stress testing", "ECG imaging"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Robust-Framework-for-Stress-Testing-Medical-Imaging-Models-using-Image-Reconstruction-Techniques",
    featured: false,
    size: "small",
  },
  {
    title: "Sales Data Analysis Dashboard",
    description: "Comprehensive sales analysis using Python with actionable business insights and visual reports.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    highlights: ["Multi-dimensional", "Interactive visuals", "Revenue insights"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Sales-Analysis",
    featured: false,
    size: "small",
  },
  {
    title: "IoT Weather Monitoring",
    description: "Embedded IoT system using Arduino Mega and DHT11 sensors for real-time environmental monitoring.",
    tech: ["C++", "Arduino", "Embedded Systems", "DHT11"],
    highlights: ["98% stability", "<1s latency", "24h stress tested"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/iot-weather-station",
    featured: false,
    size: "small",
  },
  {
    title: "Smart Attendance System",
    description: "Automated attendance tracking using computer vision and face recognition.",
    tech: ["Python", "OpenCV", "Face Recognition", "CSV"],
    highlights: ["Automated detection", "Real-time logging", "CSV export"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/smart-attendance",
    featured: false,
    size: "small",
  },
  {
    title: "Route Finder (Bi-Directional BFS/DFS)",
    description: "Graph algorithm implementation using bi-directional BFS and DFS for optimal route finding.",
    tech: ["Python", "Graph Algorithms", "BFS", "DFS"],
    highlights: ["Bi-directional", "BFS & DFS compare", "Visual paths"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/Route-Finder-Using-Bi-Directional-BFS-DFS",
    featured: false,
    size: "small",
  },
  {
    title: "LLaMA 3 Chatbot",
    description: "Local AI chatbot powered by Meta's LLaMA 3 via Ollama for private, offline conversational AI.",
    tech: ["Python", "Ollama", "LLaMA 3", "Streamlit"],
    highlights: ["Fully local", "No cloud needed", "Conversational AI"],
    liveLink: null,
    githubLink: "https://github.com/Rishicreates20/llama3-chatbot",
    featured: false,
    size: "small",
  },
];

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  "C++": "#f34b7d",
  Java: "#b07219",
  Go: "#00ADD8",
  Rust: "#dea584",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Jupyter: "#DA5B0B",
};

const GitHubRepoCard = ({ repo, index }: { repo: GitHubRepo; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.35, delay: index * 0.05 }}
    className="glass rounded-2xl p-5 hover-lift group relative overflow-hidden flex flex-col gap-3 border border-primary/10"
    data-testid={`github-repo-card-${repo.id}`}
  >
    <div className="absolute top-0 right-0 px-2.5 py-1 rounded-bl-xl bg-primary/10 border-b border-l border-primary/20">
      <div className="flex items-center gap-1">
        <Zap size={10} className="text-primary" />
        <span className="text-[9px] font-mono text-primary uppercase tracking-wider">Live from GitHub</span>
      </div>
    </div>

    <div className="flex items-start gap-3 mt-3">
      <div className="w-8 h-8 rounded-lg bg-secondary/80 flex items-center justify-center flex-shrink-0">
        <Folder size={14} className="text-primary" />
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-bold font-heading leading-tight group-hover:text-primary transition-colors truncate">
          {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
        </h3>
        <span className="text-[10px] text-muted-foreground font-mono">{timeAgo(repo.updated_at)}</span>
      </div>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto flex-shrink-0 w-7 h-7 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
        aria-label="GitHub"
        data-testid={`link-github-${repo.id}`}
      >
        <Github size={13} />
      </a>
    </div>

    {repo.description && (
      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{repo.description}</p>
    )}

    <div className="flex items-center gap-3 mt-auto pt-1 flex-wrap">
      {repo.language && (
        <div className="flex items-center gap-1.5">
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ background: LANG_COLORS[repo.language] ?? "#888" }}
          />
          <span className="text-[11px] font-mono text-muted-foreground">{repo.language}</span>
        </div>
      )}
      {repo.stargazers_count > 0 && (
        <div className="flex items-center gap-1 text-muted-foreground">
          <Star size={11} />
          <span className="text-[11px] font-mono">{repo.stargazers_count}</span>
        </div>
      )}
      {repo.forks_count > 0 && (
        <div className="flex items-center gap-1 text-muted-foreground">
          <GitFork size={11} />
          <span className="text-[11px] font-mono">{repo.forks_count}</span>
        </div>
      )}
      {repo.homepage && (
        <a
          href={repo.homepage}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto text-muted-foreground hover:text-primary transition-colors"
          aria-label="Live site"
          data-testid={`link-live-${repo.id}`}
        >
          <ExternalLink size={12} />
        </a>
      )}
    </div>

    {repo.topics.length > 0 && (
      <div className="flex flex-wrap gap-1.5">
        {repo.topics.slice(0, 4).map((t) => (
          <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-secondary/60 text-secondary-foreground">
            {t}
          </span>
        ))}
      </div>
    )}
  </motion.div>
);

const SIZE_CLASS: Record<string, string> = {
  large: "md:col-span-2 md:row-span-2",
  wide: "md:col-span-2",
  tall: "md:row-span-2",
  small: "",
};

const FeaturedProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const isDream = !!project.dream;
  const size = project.size ?? "small";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className={`rounded-2xl p-6 md:p-7 transition-all duration-300 group hover-lift relative overflow-hidden flex flex-col gap-4 ${
        isDream ? "glass gradient-border" : "glass"
      } ${SIZE_CLASS[size]}`}
      data-testid={`project-card-${index}`}
    >
      {isDream && (
        <>
          <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-primary/10 blur-[60px] animate-pulse-glow pointer-events-none" />
          <div
            className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-primary-glow/10 blur-[60px] animate-pulse-glow pointer-events-none"
            style={{ animationDelay: "1.5s" }}
          />
        </>
      )}

      <div className="relative z-10 flex flex-col gap-4 h-full">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2.5 flex-wrap">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
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
              <span
                className="text-[10px] font-mono px-3 py-1 rounded-full uppercase tracking-wider font-bold text-primary-foreground flex items-center gap-1"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Star size={10} />
                Dream Project
              </span>
            )}
            {!isDream && project.featured && (
              <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 uppercase tracking-wider">
                Featured
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="GitHub"
                data-testid={`link-github-project-${index}`}
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
                data-testid={`link-live-project-${index}`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-base md:text-lg font-bold font-heading mb-2 group-hover:text-primary transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.highlights.map((h) => (
            <span
              key={h}
              className="text-[11px] text-primary font-mono bg-primary/5 px-2.5 py-1 rounded-lg border border-primary/10"
            >
              {h}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-auto">
          {project.tech.map((t) => (
            <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-secondary/60 text-secondary-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const INITIAL_GITHUB_SHOW = 8;

const ProjectsSection = () => {
  const [showAllGitHub, setShowAllGitHub] = useState(false);
  const { data: githubRepos, isLoading, isError, refetch } = useGitHubRepos();

  const newRepos = (githubRepos ?? []).filter((r) => !HARDCODED_GITHUB_URLS.has(r.html_url));
  const visibleNewRepos = showAllGitHub ? newRepos : newRepos.slice(0, INITIAL_GITHUB_SHOW);
  const totalProjects = projects.length + newRepos.length;

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-lg">04.</span> Projects
            <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4 hidden md:block" />
          </h2>
          <div className="flex items-center gap-4 mt-1 flex-wrap">
            <p className="text-sm text-muted-foreground font-mono" data-testid="text-project-count">
              {totalProjects} projects • bento grid view
            </p>
            {isLoading && (
              <span className="flex items-center gap-1.5 text-xs font-mono text-primary animate-pulse">
                <RefreshCw size={11} className="animate-spin" />
                Syncing GitHub…
              </span>
            )}
            {!isLoading && !isError && newRepos.length > 0 && (
              <span className="flex items-center gap-1.5 text-xs font-mono text-primary">
                <Zap size={11} />
                {newRepos.length} new from GitHub
              </span>
            )}
            {isError && (
              <button
                onClick={() => refetch()}
                className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                data-testid="button-retry-github"
              >
                <RefreshCw size={11} />
                Retry GitHub sync
              </button>
            )}
          </div>
        </motion.div>

        {/* ── Bento Grid: Curated Projects ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 [grid-auto-rows:minmax(0,auto)]">
          {projects.map((project, i) => (
            <FeaturedProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* ── Auto-synced GitHub repos ── */}
        {(newRepos.length > 0 || isLoading) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-14"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20">
                <Github size={14} className="text-primary" />
                <span className="text-xs font-mono text-primary">Auto-synced from GitHub</span>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>
              <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
            </div>

            {isLoading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="glass rounded-2xl p-5 h-36 animate-pulse" />
                ))}
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  <AnimatePresence>
                    {visibleNewRepos.map((repo, i) => (
                      <GitHubRepoCard key={repo.id} repo={repo} index={i} />
                    ))}
                  </AnimatePresence>
                </div>

                {newRepos.length > INITIAL_GITHUB_SHOW && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-8 text-center"
                  >
                    <button
                      onClick={() => setShowAllGitHub(!showAllGitHub)}
                      className="inline-flex items-center gap-2 font-mono text-sm px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                      style={
                        showAllGitHub
                          ? { color: "hsl(var(--primary))", border: "1px solid hsl(var(--primary) / 0.3)" }
                          : { background: "var(--gradient-primary)", color: "hsl(var(--primary-foreground))" }
                      }
                      data-testid="button-toggle-github-repos"
                    >
                      {showAllGitHub ? "Show Less" : `Show All ${newRepos.length} GitHub Repos`}
                      {showAllGitHub ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
