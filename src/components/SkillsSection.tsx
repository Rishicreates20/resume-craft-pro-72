import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Layers, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["Python", "C++", "Java", "JavaScript (ES6+)", "TypeScript", "Go", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["React.js", "Node.js", "Express.js", "Flask", "Django", "Redux", "Tailwind CSS"],
  },
  {
    title: "Data Science & ML",
    icon: Brain,
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    skills: ["Git", "Docker", "AWS (EC2, S3)", "GCP", "Linux/Unix", "Postman", "MongoDB", "PostgreSQL"],
  },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-lg">02.</span> Skills
            <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4 hidden md:block" />
          </h2>

          {/* Category tabs */}
          <div className="mt-8 flex flex-wrap gap-2 mb-8">
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(i)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs transition-all duration-300 ${
                  activeCategory === i
                    ? "text-primary-foreground shadow-lg"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
                style={activeCategory === i ? { background: "var(--gradient-primary)" } : undefined}
              >
                <cat.icon size={14} />
                {cat.title}
              </button>
            ))}
          </div>

          {/* Active skills display */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex flex-wrap gap-3">
              {skillCategories[activeCategory].skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="text-sm font-mono px-4 py-2.5 rounded-xl bg-secondary/80 text-secondary-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 border border-transparent transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* All skills grid (compact) */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-4 hover-lift group cursor-pointer"
                onClick={() => setActiveCategory(i)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <cat.icon size={16} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-mono text-muted-foreground">{cat.title}</span>
                </div>
                <div className="text-xl font-bold font-heading text-gradient">{cat.skills.length}</div>
                <div className="text-[10px] text-muted-foreground font-mono">technologies</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
