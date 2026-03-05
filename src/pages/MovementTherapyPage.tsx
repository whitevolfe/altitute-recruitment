import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';

const MovementTherapyPage = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Header />
      <main className='section-padding'>
        <div className='max-w-4xl mx-auto'>
          <ScrollReveal>
            <h1 className='text-4xl md:text-6xl font-body font-medium tracking-[0.2em] uppercase text-foreground mb-6'>
              Movement Therapy by Rangi Fernando
            </h1>
            <p className='text-xs tracking-[0.3em] uppercase text-muted-foreground mb-16 font-body'>
              Resilience through Movement
            </p>
          </ScrollReveal>

          <div className='space-y-16'>
            <ScrollReveal delay={0.1}>
              <section>
                <h2 className='text-2xl md:text-3xl font-body font-semibold text-foreground mb-6'>
                  About Rangi
                </h2>
                <div className='space-y-6'>
                  <p className='text-muted-foreground font-body font-light text-lg leading-relaxed'>
                    Rangi Fernando is a globally recognized Sri Lankan dance
                    movement therapist based in Germany, specializing in the
                    transformative power of intentional movement for corporate
                    wellness and personal development. With over a decade of
                    experience in dance movement therapy, Rangi has worked with
                    organizations across Europe, Asia, and the Middle East to
                    integrate movement-based interventions into corporate
                    wellness programs.
                  </p>

                  <p className='text-muted-foreground font-body font-light text-lg leading-relaxed'>
                    Her approach combines traditional Sri Lankan movement
                    practices with contemporary dance therapy techniques,
                    creating unique interventions that address both individual
                    and collective wellbeing. Rangi's work is grounded in
                    extensive research on the mind-body connection and the role
                    of movement in emotional regulation and stress management.
                  </p>

                  <p className='text-muted-foreground font-body font-light text-lg leading-relaxed'>
                    As a certified dance movement therapist and mindfulness
                    practitioner, Rangi brings a unique perspective to corporate
                    wellness, recognizing that sustainable performance requires
                    not just mental resilience, but also physical and emotional
                    restoration. Her sessions are designed to create safe spaces
                    for expression, connection, and renewal within professional
                    environments.
                  </p>

                  <p className='text-muted-foreground font-body font-light text-lg leading-relaxed'>
                    Rangi's methodology emphasizes the body's innate wisdom and
                    its capacity for self-regulation. Through guided movement
                    experiences, participants learn to access their body's
                    natural intelligence, fostering greater self-awareness,
                    emotional balance, and interpersonal connection.
                  </p>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <section>
                <h2 className='text-2xl md:text-3xl font-body font-semibold text-foreground mb-6'>
                  Structure
                </h2>
                <div className='space-y-8'>
                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-foreground mb-3'>
                      Phase 1: Foundation & Introduction
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed mb-3'>
                      Overview of session goals and introduction to Dance
                      Movement Therapy principles.
                    </p>
                    <ul className='text-muted-foreground font-body font-light leading-relaxed space-y-2'>
                      <li>
                        • Gentle stretching sequences to release physical
                        tension
                      </li>
                      <li>• Breathwork exercises for grounding and presence</li>
                      <li>
                        • Introduction to movement as a form of self-expression
                      </li>
                      <li>• Establishing group safety and trust protocols</li>
                    </ul>
                  </div>

                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-foreground mb-3'>
                      Phase 2: Guided Movement Therapy
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed mb-3'>
                      Core therapeutic interventions focused on stress relief,
                      emotional expression, and team cohesion.
                    </p>
                    <ul className='text-muted-foreground font-body font-light leading-relaxed space-y-2'>
                      <li>
                        • Guided movement sequences for stress release and
                        emotional processing
                      </li>
                      <li>
                        • Partner and group exercises to build interpersonal
                        connection
                      </li>
                      <li>
                        • Improvisational movement to explore personal
                        narratives
                      </li>
                      <li>
                        • Rhythmic exercises to synchronize group energy and
                        foster cohesion
                      </li>
                      <li>
                        • Movement metaphors for workplace challenges and
                        resilience
                      </li>
                    </ul>
                  </div>

                  <div className='border-l-4 border-primary pl-6'>
                    <h3 className='text-xl font-body font-semibold text-foreground mb-3'>
                      Phase 3: Integration & Reflection
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed mb-3'>
                      Facilitated discussion and relaxation practices to
                      integrate insights into daily work life.
                    </p>
                    <ul className='text-muted-foreground font-body font-light leading-relaxed space-y-2'>
                      <li>
                        • Group sharing and reflection on movement experiences
                      </li>
                      <li>
                        • Deep relaxation and guided imagery for restoration
                      </li>
                      <li>
                        • Practical applications for workplace stress management
                      </li>
                      <li>
                        • Integration exercises to bring movement awareness into
                        daily routines
                      </li>
                      <li>
                        • Closing rituals to honor the group's shared experience
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <section>
                <h2 className='text-2xl md:text-3xl font-body font-semibold text-foreground mb-6'>
                  Session Benefits
                </h2>
                <div className='grid md:grid-cols-2 gap-6'>
                  <div className='bg-card border border-border p-6 rounded-lg'>
                    <h3 className='text-lg font-body font-semibold text-foreground mb-3'>
                      Individual Benefits
                    </h3>
                    <ul className='text-muted-foreground font-body font-light leading-relaxed space-y-2'>
                      <li>• Reduced stress and anxiety levels</li>
                      <li>• Enhanced emotional regulation</li>
                      <li>• Improved body awareness and mindfulness</li>
                      <li>• Increased self-confidence and self-expression</li>
                      <li>
                        • Better work-life balance through movement practices
                      </li>
                    </ul>
                  </div>

                  <div className='bg-card border border-border p-6 rounded-lg'>
                    <h3 className='text-lg font-body font-semibold text-foreground mb-3'>
                      Team Benefits
                    </h3>
                    <ul className='text-muted-foreground font-body font-light leading-relaxed space-y-2'>
                      <li>• Strengthened team cohesion and trust</li>
                      <li>
                        • Improved communication through non-verbal expression
                      </li>
                      <li>
                        • Enhanced empathy and understanding among colleagues
                      </li>
                      <li>
                        • Collective stress reduction and emotional support
                      </li>
                      <li>
                        • Shared language for discussing workplace challenges
                      </li>
                    </ul>
                  </div>
                  <h1 className='text-foreground font-body font-light text-lg leading-relaxed'>
                    “Together, we can unlock new pathways to health,
                    empowerment, and connection—one step at a time”
                    <p>-Rangi Fernando</p>
                  </h1>
                </div>
              </section>
            </ScrollReveal>

            {/* <ScrollReveal delay={0.4}>
              <section>
                <h2 className='text-2xl md:text-3xl font-body font-semibold text-foreground mb-6'>
                  Session Formats
                </h2>
                <div className='space-y-4'>
                  <div className='border border-border p-6 rounded-lg'>
                    <h3 className='text-lg font-body font-semibold text-foreground mb-2'>
                      60-Minute Corporate Sessions
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed'>
                      Perfect for team building, stress management workshops, or
                      as part of larger wellness programs. Suitable for groups
                      of 8-20 participants.
                    </p>
                  </div>

                  <div className='border border-border p-6 rounded-lg'>
                    <h3 className='text-lg font-body font-semibold text-foreground mb-2'>
                      90-Minute Deep Dive Sessions
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed'>
                      Extended sessions allowing for more in-depth exploration
                      and integration. Ideal for leadership teams or groups
                      seeking transformative experiences.
                    </p>
                  </div>

                  <div className='border border-border p-6 rounded-lg'>
                    <h3 className='text-lg font-body font-semibold text-foreground mb-2'>
                      Custom Corporate Programs
                    </h3>
                    <p className='text-muted-foreground font-body font-light leading-relaxed'>
                      Multi-session programs tailored to specific organizational
                      needs, incorporating movement therapy into ongoing
                      wellness initiatives or change management processes.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MovementTherapyPage;
