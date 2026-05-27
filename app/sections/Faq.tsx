'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Reveal } from '../primitives';
import { FAQS } from '../data';

export default function Faq() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section id="faq" className="ft-section ft-container">
            <div className="ft-faq-grid">
                <div>
                    <Reveal as="span" className="ft-eyebrow ft-eyebrow--accent" style={{ marginBottom: '1.2rem' }}>
                        Good to know
                    </Reveal>
                    <Reveal as="h2" delay={1}>
                        Frequently asked questions &mdash; Edinburgh florist
                    </Reveal>
                    <Reveal as="p" delay={2} style={{ marginTop: '1.4rem' }}>
                        Still unsure of something? Call the studio on{' '}
                        <a href="tel:+441315560247">+44 131 556 0247</a> &mdash; we&apos;d rather talk it through.
                    </Reveal>
                </div>

                <Reveal className="ft-faq-list">
                    {FAQS.map((item, i) => {
                        const isOpen = open === i;
                        const panelId = `ft-faq-panel-${i}`;
                        const btnId = `ft-faq-btn-${i}`;
                        return (
                            <div key={item.q} className={`ft-faq-item${isOpen ? ' is-open' : ''}`}>
                                <button
                                    type="button"
                                    id={btnId}
                                    className="ft-faq-q"
                                    aria-expanded={isOpen}
                                    aria-controls={panelId}
                                    onClick={() => setOpen(isOpen ? null : i)}
                                >
                                    {item.q}
                                    <ChevronDown className="ft-faq-icon" size={22} strokeWidth={1.5} />
                                </button>
                                <div
                                    id={panelId}
                                    role="region"
                                    aria-labelledby={btnId}
                                    className="ft-faq-a"
                                    inert={!isOpen ? true : undefined}
                                >
                                    <p>{item.a}</p>
                                </div>
                            </div>
                        );
                    })}
                </Reveal>
            </div>
        </section>
    );
}
