import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-lg">03.</span> Experience
            <span className="flex-1 h-px bg-border ml-4 hidden md:block" />
          </h2>

          <div className="mt-8">
            <div className="bg-card rounded-lg p-6 md:p-8 border border-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l" />
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Briefcase size={18} className="text-primary" />
                    Web Development Intern
                  </h3>
                  <p className="text-primary font-mono text-sm">
                    Teachnook × Rhyno EV
                  </p>
                </div>
                <span className="font-mono text-xs text-muted-foreground whitespace-nowrap">
                  May 2024 – June 2024 • Remote
                </span>
              </div>
              <ul className="space-y-3 text-muted-foreground text-sm leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  Spearheaded the development of responsive UI components using React.js, improving page load speeds by 30%.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  Orchestrated the integration of RESTful APIs and optimized frontend workflows, reducing API response handling time by 25%.
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1.5 shrink-0">▹</span>
                  Collaborated in an Agile environment to debug and refine codebase, ensuring cross-browser compatibility.
                </li>
              </ul>
            </div>

            {/* Publications & Certifications */}
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-card rounded-lg p-5 border border-border">
                <h4 className="font-mono text-primary text-xs mb-2 uppercase tracking-wider">Publication</h4>
                <p className="text-sm text-muted-foreground">
                  "A Robust Framework for Stress Testing in Medical Imaging Systems" — CCI 2025, BM Institute.
                </p>
              </div>
              <div className="bg-card rounded-lg p-5 border border-border">
                <h4 className="font-mono text-primary text-xs mb-2 uppercase tracking-wider">Certification</h4>
                <p className="text-sm text-muted-foreground">
                  Web Development Certification — Teachnook × Rhyno EV.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
