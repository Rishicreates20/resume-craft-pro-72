import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px]" />
      </div>

      <div className="container max-w-2xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-4">05. What's Next?</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed text-lg">
            I'm currently looking for new opportunities and my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            {[
              { icon: Mail, text: "rishikeshsarangi56@gmail.com", href: "mailto:rishikeshsarangi56@gmail.com" },
              { icon: Phone, text: "+91 6370878378", href: null },
              { icon: MapPin, text: "Bhubaneswar, India", href: null },
            ].map((item) => (
              <div key={item.text} className="glass rounded-xl px-4 py-3 flex items-center gap-2 hover-lift">
                <item.icon size={14} className="text-primary shrink-0" />
                {item.href ? (
                  <a href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item.text}
                  </a>
                ) : (
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                )}
              </div>
            ))}
          </div>

          <motion.a
            href="mailto:rishikeshsarangi56@gmail.com"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 font-mono text-sm px-10 py-4 rounded-xl text-primary-foreground transition-all duration-300 hover:shadow-[0_0_40px_hsl(172_66%_50%/0.3)]"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Send size={16} />
            Say Hello
            <ArrowUpRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
