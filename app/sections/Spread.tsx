'use client';

import { Reveal } from '../primitives';
import { SPREAD } from '../data';

export default function Spread() {
    return (
        <section className="ft-spread" aria-label="Studio editorial">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={SPREAD.imageSrc} alt={SPREAD.imageAlt} loading="lazy" />
            <div className="ft-spread-veil" aria-hidden />
            <span className="ft-spread-credit">{SPREAD.credit}</span>

            <div className="ft-spread-content">
                <div className="ft-container">
                    <Reveal as="span" className="ft-eyebrow">
                        {SPREAD.eyebrow}
                    </Reveal>
                    <Reveal as="h2" delay={1}>
                        We let the week decide <em>what the bouquet becomes.</em>
                    </Reveal>
                    <Reveal as="p" delay={2}>
                        {SPREAD.body}
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
