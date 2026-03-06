import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-primary mb-4 text-sm md:text-base">
            Hi, my name is
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading text-foreground mb-4 leading-tight">
            Rishikesh Sarangi.
          </h1>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading text-muted-foreground mb-6 leading-tight">
            I build things for the web.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            A Computer Science graduate passionate about full-stack development, 
            machine learning, and building impactful digital experiences. 
            Currently based in{" "}
            <span className="text-primary">Bhubaneswar, India</span>.
          </p>

          <div className="flex items-center gap-5 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:rishikeshsarangi56@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 font-mono text-sm text-primary border border-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors"
          >
            Explore More <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
