'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { META, NAV_LINKS } from '../data';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const close = () => setMenuOpen(false);

    return (
        <>
            <header className={`ft-nav${scrolled ? ' is-scrolled' : ''}`}>
                <div className="ft-container ft-nav-inner">
                    <a href="#top" className="ft-logo" onClick={close}>
                        Thornfield
                        <span className="ft-logo-mark">Florals</span>
                    </a>

                    <nav aria-label="Primary">
                        <ul className="ft-nav-links">
                            {NAV_LINKS.map((l) => (
                                <li key={l.href}>
                                    <a href={l.href}>{l.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <a href="#contact" className="ft-btn ft-btn-primary ft-nav-cta">
                        Enquire
                    </a>

                    <button
                        type="button"
                        className="ft-nav-burger"
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((v) => !v)}
                    >
                        {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div className="ft-mobile-menu" role="dialog" aria-label="Menu">
                    {NAV_LINKS.map((l) => (
                        <a key={l.href} href={l.href} onClick={close}>
                            {l.label}
                        </a>
                    ))}
                    <a href="#contact" onClick={close} style={{ color: 'var(--accent)' }}>
                        Enquire
                    </a>
                    <span className="ft-meta" style={{ marginTop: '1rem' }}>
                        {META.phone}
                    </span>
                </div>
            )}
        </>
    );
}
