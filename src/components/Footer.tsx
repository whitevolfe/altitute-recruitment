import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-12 lg:px-20 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl tracking-wider text-foreground">
            ALTITUDE GROUP
          </p>
          <p className="text-xs text-muted-foreground font-body mt-1">
            © {new Date().getFullYear()} Altitude Group. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:talent@altitudetalent.com.lk"
            className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors font-body"
          >
            talent@altitudetalent.com.lk
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
