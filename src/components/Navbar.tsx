import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/hooks/use-theme";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-mono text-lg font-bold text-gradient">
          {"<RS />"}
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-sm text-muted-foreground hover:text-primary px-3 py-2 rounded-lg hover:bg-primary/5 transition-all duration-300"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </li>
          <li className="ml-2">
            <a
              href="/Rishikesh_cv_2026_1.pdf"
              target="_blank"
              className="font-mono text-sm px-5 py-2.5 rounded-xl text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsl(172_66%_50%/0.3)] hover:-translate-y-0.5"
              style={{ background: "var(--gradient-primary)" }}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary transition-all"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="w-9 h-9 rounded-xl bg-secondary/50 flex items-center justify-center text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong overflow-hidden"
          >
            <ul className="flex flex-col p-4 gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block font-mono text-sm text-muted-foreground hover:text-primary px-4 py-3 rounded-xl hover:bg-primary/5 transition-all"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="/Rishikesh_cv_2026_1.pdf"
                  target="_blank"
                  className="block text-center font-mono text-sm px-4 py-3 rounded-xl text-primary-foreground"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
