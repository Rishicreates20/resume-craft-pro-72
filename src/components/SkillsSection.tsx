import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C++", "Java", "JavaScript (ES6+)", "TypeScript", "Go", "SQL", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Node.js", "Express.js", "Flask", "Django", "Redux", "Tailwind CSS"],
  },
  {
    title: "Data Science & ML",
    skills: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "Docker", "AWS (EC2, S3)", "GCP", "Linux/Unix", "Postman", "MongoDB", "PostgreSQL"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-lg">02.</span> Skills
            <span className="flex-1 h-px bg-border ml-4 hidden md:block" />
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <h3 className="font-mono text-primary text-sm font-medium mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {skill}
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

export default SkillsSection;
