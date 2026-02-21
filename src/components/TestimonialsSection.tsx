import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote: "Altitude Group transformed our hiring process. They found us exceptional C-suite talent that has driven our company forward in ways we never imagined.",
    name: "Sarah Mitchell",
    company: "TechVenture Capital",
    initials: "SM",
  },
  {
    quote: "The team's understanding of the creative industry is unmatched. They placed three senior leaders who perfectly aligned with our company culture and vision.",
    name: "James Chen",
    company: "Apex Creative Agency",
    initials: "JC",
  },
  {
    quote: "Working with Altitude was seamless. Their global reach and deep network gave us access to talent pools we couldn't reach on our own.",
    name: "Amara Okafor",
    company: "Meridian Finance Group",
    initials: "AO",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-6xl font-display tracking-wide text-foreground mb-16">
            What Clients Say
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="relative">
            <Quote size={40} className="text-border mb-6" strokeWidth={1} />

            <div className="min-h-[200px] flex flex-col justify-center">
              <p className="text-xl md:text-2xl text-foreground font-body font-light leading-relaxed mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="font-display text-lg text-foreground">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-foreground font-body font-medium">{t.name}</p>
                  <p className="text-sm text-muted-foreground font-body">{t.company}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              >
                <ChevronRight size={18} />
              </button>

              <div className="flex gap-2 ml-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === current ? "bg-foreground" : "bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialsSection;
