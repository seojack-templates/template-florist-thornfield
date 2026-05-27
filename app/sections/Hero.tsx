'use client';

import { ArrowDownRight } from 'lucide-react';
import { Headline, Reveal } from '../primitives';
import { HERO_STATS } from '../data';

export default function Hero() {
    return (
        <section id="top" className="ft-hero ft-container">
            <div className="ft-hero-grid">
                <div>
                    <Reveal as="span" className="ft-eyebrow ft-eyebrow--accent" style={{ marginBottom: '1.4rem' }}>
                        Edinburgh florist · Est. 2014
                    </Reveal>
                    <Headline
                        as="h1"
                        lines={[
                            'Flowers for the',
                            '<em>considered</em> occasion.',
                        ]}
                    />
                </div>

                <div className="ft-hero-aside">
                    <Reveal as="p" delay={2}>
                        Seasonal arrangements and event flowers, made by hand in the New Town and
                        designed with a restrained, deliberate eye.
                    </Reveal>
                    <Reveal className="ft-hero-ctas" delay={3}>
                        <a href="#collections" className="ft-btn ft-btn-primary">
                            View collections
                        </a>
                        <a href="#events" className="ft-btn ft-btn-ghost">
                            Plan an event
                            <ArrowDownRight size={16} strokeWidth={1.75} />
                        </a>
                    </Reveal>
                </div>
            </div>

            <Reveal as="dl" className="ft-hero-meta" delay={1}>
                {HERO_STATS.map((s) => (
                    <div key={s.label}>
                        <dt>{s.label}</dt>
                        <dd className="ft-numeral">
                            {s.value}
                            {s.sub && <span>{s.sub}</span>}
                        </dd>
                    </div>
                ))}
            </Reveal>
        </section>
    );
}
