import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden section-padding pt-32">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary-glow/5 blur-[100px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="font-mono text-xs text-primary">Available for opportunities</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-mono text-primary mb-4 text-sm md:text-base"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading text-foreground mb-3 leading-[1.1] tracking-tight"
          >
            Rishikesh Sarangi.
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading mb-8 leading-[1.1]"
          >
            <span className="text-gradient">I build things</span>{" "}
            <span className="text-muted-foreground">for the web.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            A Computer Science graduate passionate about full-stack development,
            machine learning, and building impactful digital experiences.
            Currently based in{" "}
            <span className="text-primary font-medium">Bhubaneswar, India</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 mb-12"
          >
            {[
              { href: "https://github.com/Rishicreates20", icon: Github, label: "GitHub" },
              { href: "https://www.linkedin.com/in/rishikesh-sarangi", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:rishikeshsarangi56@gmail.com", icon: Mail, label: "Email" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:glow-sm transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 font-mono text-sm text-primary-foreground px-7 py-3.5 rounded-xl text-gradient-btn transition-all duration-300 hover:shadow-[0_0_30px_hsl(172_66%_50%/0.3)] hover:-translate-y-0.5"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary border border-primary/30 px-7 py-3.5 rounded-xl hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
            >
              About Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
