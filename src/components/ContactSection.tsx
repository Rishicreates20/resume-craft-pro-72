import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-primary text-sm mb-2">05. What's Next?</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            I'm currently looking for new opportunities and my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
            <a
              href="mailto:rishikeshsarangi56@gmail.com"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={16} /> rishikeshsarangi56@gmail.com
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={16} /> +91 6370878378
            </span>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} /> Bhubaneswar, India
            </span>
          </div>

          <a
            href="mailto:rishikeshsarangi56@gmail.com"
            className="inline-block font-mono text-sm px-8 py-3 rounded border border-primary text-primary hover:bg-primary/10 transition-colors"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
