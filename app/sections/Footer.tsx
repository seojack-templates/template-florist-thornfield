'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Reveal } from '../primitives';
import { FOOTER_COLS, META } from '../data';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    function onSubscribe(e: FormEvent) {
        e.preventDefault();
        if (EMAIL_RE.test(email.trim())) setSubscribed(true);
    }

    return (
        <>
            {/* CTA band */}
            <section className="ft-section ft-cta">
                <div className="ft-container">
                    <div className="ft-cta-inner">
                        <Reveal as="h2">
                            Bring us the occasion. <em>We’ll bring the flowers.</em>
                        </Reveal>
                        <Reveal className="ft-cta-aside" delay={1}>
                            <p>
                                Whether it’s a Tuesday posy or a wedding eighteen months out, the
                                studio diary is open.
                            </p>
                            <a
                                href="https://seojack.net/templates/tpl_florist_thornfield"
                                target="_blank"
                                rel="noopener"
                                className="ft-btn ft-btn-primary"
                            >
                                Send an enquiry
                                <ArrowRight size={16} strokeWidth={1.75} />
                            </a>
                        </Reveal>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="ft-footer ft-container">
                <div className="ft-footer-top">
                    <div className="ft-footer-brand">
                        <span className="ft-logo">
                            Thornfield<span className="ft-logo-mark">Florals</span>
                        </span>
                        <p>
                            An independent florist and floral-design studio in Edinburgh’s New Town,
                            arranging seasonally since <span className="ft-numeral">{META.founded}</span>.
                        </p>
                        <form
                            className={`ft-footer-newsletter${subscribed ? ' is-done' : ''}`}
                            onSubmit={onSubscribe}
                        >
                            <input
                                type="email"
                                aria-label="Email for the seasonal letter"
                                placeholder={subscribed ? 'You’re on the list' : 'The seasonal letter'}
                                value={subscribed ? '' : email}
                                disabled={subscribed}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button type="submit" aria-label="Subscribe">
                                {subscribed ? <Check size={16} strokeWidth={2} /> : <ArrowRight size={16} strokeWidth={2} />}
                            </button>
                        </form>
                    </div>

                    {FOOTER_COLS.map((col) => (
                        <div key={col.heading} className="ft-footer-col">
                            <h4>{col.heading}</h4>
                            <ul>
                                {col.links.map((l) => (
                                    <li key={l.label}>
                                        <a href={l.href}>{l.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="ft-footer-bottom">
                    <p>
                        © <span className="ft-numeral">{new Date().getFullYear()}</span> {META.name}.
                        {' '}{META.descriptor}.
                    </p>
                    <p>Registered in Scotland · {META.instagram}</p>
                </div>
            </footer>
        </>
    );
}
