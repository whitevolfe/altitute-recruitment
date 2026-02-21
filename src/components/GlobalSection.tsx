import ScrollReveal from "@/components/ScrollReveal";
import { Globe, Users, Search, Target } from "lucide-react";

const services = [
  { icon: Search, title: "Executive Search", desc: "Identifying and securing top-tier leadership talent for critical roles." },
  { icon: Users, title: "C-Suite Hiring", desc: "Placing visionary executives who drive organisational transformation." },
  { icon: Globe, title: "International Recruitment", desc: "Cross-border talent acquisition spanning multiple markets and regions." },
  { icon: Target, title: "Strategic Talent Acquisition", desc: "Data-driven hiring strategies aligned with long-term business objectives." },
];

const GlobalSection = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            Altitude Global
          </p>
          <h2 className="text-4xl md:text-6xl font-display tracking-wide text-foreground mb-6">
            What We Do
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-muted-foreground font-body font-light text-lg leading-relaxed max-w-3xl mb-16">
            We partner with ambitious organisations to design and execute global recruitment
            strategies that attract exceptional talent, build high-performing teams, and
            fuel sustainable growth across industries and borders.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={0.15 + i * 0.08}>
              <div className="p-8 border border-border bg-background group hover:border-foreground/20 transition-all duration-500">
                <service.icon
                  size={28}
                  className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 mb-6"
                  strokeWidth={1.5}
                />
                <h3 className="font-display text-xl tracking-wide text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground font-body font-light text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
