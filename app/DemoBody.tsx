'use client';

import { useEffect, useRef } from 'react';
import { FLORIST_THORNFIELD_CSS } from './styles';
import SeojackCredit from './SeojackCredit';
import { initCursor } from './primitives';

import Nav from './sections/Nav';
import Hero from './sections/Hero';
import Story from './sections/Story';
import LocalAreas from './sections/LocalAreas';
import Spread from './sections/Spread';
import Collections from './sections/Collections';
import Events from './sections/Events';
import Team from './sections/Team';
import Testimonials from './sections/Testimonials';
import Enquiry from './sections/Enquiry';
import Faq from './sections/Faq';
import ConversionBand from './sections/ConversionBand';
import Footer from './sections/Footer';

/**
 * Thornfield Florals — Edinburgh florist template.
 *
 * Design language: "premium" brief
 *   Palette:  warm white (#faf8f4) · bronze accent (#a06a3b) · graphite text (#1c1b19)
 *   Fonts:    Cormorant Garamond (display) + Inter (body)
 *
 * Conventions (preserved):
 *  - Root element carries className "florist-thornfield-demo"; every selector in
 *    styles.ts is prefixed ".florist-thornfield-demo" so styles cannot leak.
 *  - <SeojackCredit /> stays the last child.
 */
export default function DemoBody() {
    const rootRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Google Fonts: Cormorant Garamond (display) + Inter (body)
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href =
            'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@400;500;600&display=swap';
        document.head.appendChild(link);
        return () => {
            link.remove();
        };
    }, []);

    // Custom dual-layer cursor — pointer devices only.
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;
        const fine = window.matchMedia('(pointer: fine)');
        if (!fine.matches) return;
        return initCursor(root);
    }, []);

    return (
        <div className="florist-thornfield-demo" ref={rootRef}>
            <style dangerouslySetInnerHTML={{ __html: FLORIST_THORNFIELD_CSS }} />

            <div className="cursor-dot" aria-hidden />
            <div className="cursor-ring" aria-hidden />

            <Nav />

            <main>
                <Hero />
                <Story />
                <LocalAreas />
                <Spread />
                <Collections />
                <Events />
                <Team />
                <Testimonials />
                <Enquiry />
                <Faq />
            </main>

            <ConversionBand />

            <Footer />

            <SeojackCredit templateId="tpl_florist_thornfield" />
        </div>
    );
}
