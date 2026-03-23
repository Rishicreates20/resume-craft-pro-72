import { motion } from "framer-motion";
import { Briefcase, BookOpen, Award } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-lg">03.</span> Experience
            <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4 hidden md:block" />
          </h2>

          <div className="mt-8 relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent hidden md:block" />

            {/* Experience card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative md:ml-14"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[2.55rem] top-8 w-3 h-3 rounded-full border-2 border-primary bg-background hidden md:block" />
              
              <div className="glass rounded-2xl p-6 md:p-8 hover-lift group relative overflow-hidden">
                {/* Accent line */}
                <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl" style={{ background: "var(--gradient-primary)" }} />
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-5 mt-2">
                  <div>
                    <h3 className="text-lg font-bold font-heading flex items-center gap-2 group-hover:text-primary transition-colors">
                      <Briefcase size={18} className="text-primary" />
                      Web Development Intern
                    </h3>
                    <p className="text-primary font-mono text-sm mt-1">
                      Teachnook × Rhyno EV
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground whitespace-nowrap px-3 py-1 rounded-full bg-secondary/50">
                    May 2024 – June 2024
                  </span>
                </div>
                <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                  {[
                    "Spearheaded the development of responsive UI components using React.js, improving page load speeds by 30%.",
                    "Orchestrated the integration of RESTful APIs and optimized frontend workflows, reducing API response handling time by 25%.",
                    "Collaborated in an Agile environment to debug and refine codebase, ensuring cross-browser compatibility.",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex gap-3"
                    >
                      <span className="text-primary mt-1 shrink-0 text-lg leading-none">›</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Publications & Certifications */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4 md:ml-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="glass rounded-xl p-5 hover-lift group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                    <BookOpen size={14} className="text-primary-foreground" />
                  </div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Publication</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "A Robust Framework for Stress Testing in Medical Imaging Systems" — CCI 2025, BM Institute.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="glass rounded-xl p-5 hover-lift group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                    <Award size={14} className="text-primary-foreground" />
                  </div>
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Certification</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Web Development Certification — Teachnook × Rhyno EV.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
