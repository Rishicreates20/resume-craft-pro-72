import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container flex flex-col items-center gap-6">
        <div className="flex items-center gap-3">
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
              className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground flex items-center gap-1.5">
          Built with <Heart size={12} className="text-primary" /> by Rishikesh Sarangi
        </p>
      </div>
    </footer>
  );
};

export default Footer;
