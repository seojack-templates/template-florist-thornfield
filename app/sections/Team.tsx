'use client';

import { Reveal } from '../primitives';
import { TEAM } from '../data';

export default function Team() {
    return (
        <section className="ft-section ft-container">
            <div className="ft-section-head">
                <div>
                    <Reveal as="span" className="ft-eyebrow ft-eyebrow--accent">
                        The hands
                    </Reveal>
                    <Reveal as="h2" delay={1} style={{ marginTop: '1rem' }}>
                        Three people, every stem.
                    </Reveal>
                </div>
                <Reveal as="p" className="ft-lede" delay={2} style={{ marginBottom: 0 }}>
                    Small by choice. The studio stays the size it can manage without ever sending
                    out something no one in the room would put on their own table.
                </Reveal>
            </div>

            <div className="ft-team-grid">
                {TEAM.map((m, i) => (
                    <Reveal as="article" key={m.name} className="ft-team-card" delay={i + 1}>
                        <div className="ft-team-img">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={m.imageSrc} alt={`Portrait of ${m.name}`} loading="lazy" />
                        </div>
                        <h3>{m.name}</h3>
                        <p className="ft-team-role">{m.role}</p>
                        <p>{m.bio}</p>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
