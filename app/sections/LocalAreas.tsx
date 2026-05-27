'use client';

import { Marquee, Reveal } from '../primitives';
import { LOCAL_AREAS } from '../data';

/**
 * Local-areas band — a quiet marquee of the places Thornfield delivers to.
 *
 * Surfaces the SEO `LOCAL_AREAS` content as a continuous editorial strip that
 * reinforces local reach without shouting. Each area is separated by a small
 * bronze diamond. Sits between the Story and the full-bleed Spread so the named
 * neighbourhoods follow the studio's "across the city and out to the Lothians"
 * narrative. The marquee animation no-ops under reduced motion (see styles.ts).
 */
export default function LocalAreas() {
    return (
        <section className="ft-areas" aria-label="Areas we deliver to across Edinburgh and the Lothians">
            <div className="ft-container">
                <Reveal as="span" className="ft-eyebrow ft-eyebrow--accent ft-areas-label">
                    Delivering across
                </Reveal>
            </div>
            <Reveal className="ft-areas-marquee">
                <Marquee gap={0} speed={36}>
                    {LOCAL_AREAS.map((area) => (
                        <span key={area} className="ft-areas-item">
                            <span className="ft-areas-mark" aria-hidden>
                                &#9670;
                            </span>
                            {area}
                        </span>
                    ))}
                </Marquee>
            </Reveal>
        </section>
    );
}
