'use client';

import { Reveal } from '../primitives';
import { STORY } from '../data';

export default function Story() {
    return (
        <section id="studio" className="ft-section ft-container">
            <div className="ft-story-grid">
                <Reveal as="figure" className="ft-story-figure">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={STORY.figureSrc} alt={STORY.figureAlt} loading="lazy" />
                    <figcaption>{STORY.figureCaption}</figcaption>
                </Reveal>

                <div className="ft-story-body">
                    <Reveal as="span" className="ft-eyebrow ft-eyebrow--accent" style={{ marginBottom: '1.2rem' }}>
                        {STORY.eyebrow}
                    </Reveal>
                    <Reveal as="h2" delay={1}>
                        {STORY.heading}
                    </Reveal>
                    {STORY.body.map((para, i) => (
                        <Reveal as="p" key={i} delay={i + 1}>
                            {para}
                        </Reveal>
                    ))}
                    <Reveal className="ft-story-sign" delay={3}>
                        <span className="ft-sign-name">{STORY.signName}</span>
                        <span className="ft-sign-role">{STORY.signRole}</span>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
