import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a href="mailto:rishikeshsarangi56@gmail.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <p className="font-mono text-xs text-muted-foreground">
          Built by Rishikesh Sarangi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
