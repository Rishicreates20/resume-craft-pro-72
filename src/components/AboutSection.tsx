import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-lg">01.</span> About Me
            <span className="flex-1 h-px bg-border ml-4 hidden md:block" />
          </h2>

          <div className="mt-8 grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a final-year B.Tech student at{" "}
                <span className="text-foreground font-medium">KIIT, Bhubaneswar</span>{" "}
                specializing in Computer Science and Engineering. I enjoy building 
                software that lives at the intersection of design and engineering — 
                things that look good but are also built well under the hood.
              </p>
              <p>
                My experience spans from crafting responsive UIs with React to 
                building ML pipelines and IoT prototypes. I thrive in fast-paced 
                environments where I can learn new technologies and solve 
                challenging problems.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new tech trends, 
                contributing to open-source, or writing about my learnings.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-card rounded-lg p-5 border border-border glow">
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap size={20} className="text-primary" />
                  <h3 className="font-semibold text-sm">Education</h3>
                </div>
                <p className="text-sm text-muted-foreground">KIIT University</p>
                <p className="text-xs text-muted-foreground">B.Tech CSE • 2022–2026</p>
                <p className="text-xs text-muted-foreground mt-1">CGPA: 7.10/10.0</p>
              </div>

              <div className="bg-card rounded-lg p-5 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <Award size={20} className="text-primary" />
                  <h3 className="font-semibold text-sm">Achievement</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  7th Semester SGPA: <span className="text-primary font-bold">9.80/10.0</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
