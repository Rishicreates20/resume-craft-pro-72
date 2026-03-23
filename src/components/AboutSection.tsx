import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, Cpu } from "lucide-react";

const stats = [
  { icon: Code2, label: "Projects Built", value: "13+" },
  { icon: Cpu, label: "Technologies", value: "30+" },
  { icon: Award, label: "Best SGPA", value: "9.80" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 flex items-center gap-3">
            <span className="font-mono text-primary text-lg">01.</span> About Me
            <span className="flex-1 h-px bg-gradient-to-r from-border to-transparent ml-4 hidden md:block" />
          </h2>

          {/* Stats row */}
          <div className="mt-8 grid grid-cols-3 gap-4 mb-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-5 text-center hover-lift group"
              >
                <stat.icon size={20} className="mx-auto mb-2 text-primary group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-bold font-heading text-gradient">{stat.value}</div>
                <div className="text-xs text-muted-foreground font-mono mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="glass rounded-xl p-5 hover-lift"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                    <GraduationCap size={16} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm">Education</h3>
                </div>
                <p className="text-sm text-muted-foreground">KIIT University</p>
                <p className="text-xs text-muted-foreground">B.Tech CSE • 2022–2026</p>
                <p className="text-xs text-muted-foreground mt-1">CGPA: 7.10/10.0</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="glass rounded-xl p-5 hover-lift"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--gradient-primary)" }}>
                    <Award size={16} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-sm">Achievement</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  7th Semester SGPA: <span className="text-gradient font-bold">9.80/10.0</span>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
