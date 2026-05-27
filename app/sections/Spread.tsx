'use client';

import { useEffect, useRef } from 'react';
import { Reveal } from '../primitives';
import { SPREAD } from '../data';

export default function Spread() {
    const ref = useRef<HTMLElement>(null);

    // Add `is-in` once the band scrolls into view so the full-bleed image can
    // clip-reveal upward. Mirrors the Reveal observer; CSS settles it to the
    // final state immediately under prefers-reduced-motion.
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add('is-in');
                    io.disconnect();
                }
            },
            { threshold: 0.18 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <section ref={ref} className="ft-spread" aria-label="Studio editorial">
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
