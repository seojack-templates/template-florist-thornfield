'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Reveal } from '../primitives';
import { EVENT_SERVICES } from '../data';

export default function Events() {
    const [open, setOpen] = useState<string | null>(EVENT_SERVICES[0]?.id ?? null);

    return (
        <section id="events" className="ft-section ft-events">
            <div className="ft-container ft-events-grid">
                <div className="ft-events-aside">
                    <Reveal as="span" className="ft-eyebrow ft-eyebrow--accent" style={{ marginBottom: '1.2rem' }}>
                        Wedding &amp; Event Florist Edinburgh
                    </Reveal>
                    <Reveal as="h2" delay={1}>
                        From a single dinner to a full wedding day.
                    </Reveal>
                    <Reveal as="p" delay={2}>
                        We take a limited number of commissions so each one has Fiona’s attention
                        from brief to breakdown. Tell us the room and the feeling — we will handle
                        everything that stands in a vessel.
                    </Reveal>
                    <Reveal delay={3}>
                        <a
                            href="https://seojack.net/templates/tpl_florist_thornfield"
                            target="_blank"
                            rel="noopener"
                            className="ft-btn ft-btn-primary"
                        >
                            Request a consultation
                        </a>
                    </Reveal>
                </div>

                <Reveal className="ft-events-list">
                    {EVENT_SERVICES.map((s, i) => {
                        const isOpen = open === s.id;
                        const detailId = `ft-event-detail-${s.id}`;
                        return (
                            <div
                                key={s.id}
                                className={`ft-event-row${isOpen ? ' is-open' : ''}`}
                                onClick={() => setOpen(isOpen ? null : s.id)}
                                role="button"
                                tabIndex={0}
                                aria-expanded={isOpen}
                                aria-controls={detailId}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setOpen(isOpen ? null : s.id);
                                    }
                                }}
                            >
                                <span className="ft-event-no ft-numeral">0{i + 1}</span>
                                <div className="ft-event-main">
                                    <h3 id={`ft-event-title-${s.id}`}>{s.title}</h3>
                                    <div
                                        id={detailId}
                                        role="region"
                                        aria-labelledby={`ft-event-title-${s.id}`}
                                        className="ft-event-detail"
                                        inert={!isOpen ? true : undefined}
                                    >
                                        <p>{s.description}</p>
                                        <p className="ft-event-typical ft-numeral">{s.typical}</p>
                                    </div>
                                </div>
                                <span className="ft-event-toggle" aria-hidden>
                                    <Plus size={16} strokeWidth={1.75} />
                                </span>
                            </div>
                        );
                    })}
                </Reveal>
            </div>
        </section>
    );
}
