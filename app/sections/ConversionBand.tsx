'use client';

import { ArrowRight } from 'lucide-react';
import { Headline, Magnetic, Reveal } from '../primitives';

/**
 * SEOJack conversion band — "Make this template yours"
 *
 * Sits directly above <Footer /> (which holds the fictional CTA band + footer).
 * The <SeojackCredit> bar is the very last child of the root div.
 *
 * Palette: warm surface-warm (#f0e7d8) background, bronze accent, Cormorant Garamond heading.
 * This is a light surface → use the light SEOJack logo asset.
 */
export default function ConversionBand() {
    return (
        <section className="ft-conversion-band">
            <div className="ft-container ft-conversion-band-inner">
                {/* SEOJack logo */}
                <a
                    href="https://seojack.net/templates"
                    target="_blank"
                    rel="noopener"
                    className="ft-conversion-band-logo-link"
                    aria-label="SEOJack — digital marketing templates"
                >
                    <img
                        src="https://cdn.seojack.website/brand/seojack-logo.avif?v=3"
                        alt="SEOJack"
                        className="ft-conversion-band-logo"
                        width={384}
                        height={67}
                    />
                </a>

                {/* Copy — heading uses the hero's per-line mask reveal */}
                <div className="ft-conversion-band-copy">
                    <Headline
                        as="h2"
                        className="ft-conversion-band-heading"
                        lines={['Make this template yours.']}
                    />
                    <Reveal as="p" className="ft-conversion-band-sub" delay={1}>
                        This exact design, built for your business, by SEOJack.
                    </Reveal>
                </div>

                {/* CTA */}
                <Reveal className="ft-conversion-band-cta" delay={2}>
                    <Magnetic strength={0.2} radius={110}>
                        <a
                            href="https://seojack.net/templates/tpl_florist_thornfield"
                            target="_blank"
                            rel="noopener"
                            className="ft-btn ft-btn-primary ft-conversion-band-btn"
                        >
                            Get this template
                            <ArrowRight size={16} strokeWidth={1.75} />
                        </a>
                    </Magnetic>
                </Reveal>
            </div>
        </section>
    );
}
