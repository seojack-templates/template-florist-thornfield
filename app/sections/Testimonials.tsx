'use client';

import { useCallback, useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Reveal } from '../primitives';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const count = TESTIMONIALS.length;

    const go = useCallback(
        (dir: number) => setActive((a) => (a + dir + count) % count),
        [count]
    );

    // Gentle auto-advance, paused when the section isn't visible is unnecessary
    // for a demo — a long interval keeps it alive without being distracting.
    useEffect(() => {
        const id = window.setInterval(() => setActive((a) => (a + 1) % count), 7000);
        return () => window.clearInterval(id);
    }, [count]);

    const t = TESTIMONIALS[active];

    return (
        <section id="testimonials" className="ft-section ft-testimonials">
            <div className="ft-container">
                <Reveal as="span" className="ft-eyebrow">
                    What Edinburgh Couples &amp; Clients Say
                </Reveal>
                <Reveal as="h2" delay={1} style={{ marginTop: '1rem', maxWidth: '14ch' }}>
                    The flowers people still mention.
                </Reveal>

                <div
                    className="ft-testi-stage"
                    aria-live="polite"
                    id="ft-testi-panel"
                    role="tabpanel"
                    aria-labelledby={`ft-testi-tab-${active}`}
                >
                    <blockquote key={active} className="ft-testi-quote reveal in">
                        {t.quote}
                    </blockquote>
                    <div className="ft-testi-meta">
                        <div>
                            <div className="ft-testi-author">{t.author}</div>
                            <div className="ft-testi-context">{t.context}</div>
                        </div>
                    </div>
                </div>

                <div className="ft-testi-nav">
                    <div className="ft-testi-dots" role="tablist" aria-label="Select testimonial">
                        {TESTIMONIALS.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                role="tab"
                                id={`ft-testi-tab-${i}`}
                                aria-selected={i === active}
                                aria-controls="ft-testi-panel"
                                aria-label={`Testimonial ${i + 1}`}
                                className={`ft-testi-dot${i === active ? ' is-active' : ''}`}
                                onClick={() => setActive(i)}
                            />
                        ))}
                    </div>
                    <div className="ft-testi-arrows">
                        <button
                            type="button"
                            className="ft-testi-arrow"
                            aria-label="Previous testimonial"
                            onClick={() => go(-1)}
                        >
                            <ArrowLeft size={18} strokeWidth={1.5} />
                        </button>
                        <button
                            type="button"
                            className="ft-testi-arrow"
                            aria-label="Next testimonial"
                            onClick={() => go(1)}
                        >
                            <ArrowRight size={18} strokeWidth={1.5} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
