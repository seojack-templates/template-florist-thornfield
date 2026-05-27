'use client';

import { useState, type FormEvent } from 'react';
import { Check, Clock, Mail, MapPin, Phone } from 'lucide-react';
import { Reveal } from '../primitives';
import { ENQUIRY_BUDGETS, ENQUIRY_SERVICES, META } from '../data';

interface FormState {
    name: string;
    email: string;
    service: string;
    date: string;
    budget: string;
    message: string;
}

interface Errors {
    name?: string;
    email?: string;
    service?: string;
    message?: string;
}

const EMPTY: FormState = {
    name: '',
    email: '',
    service: 'wedding',
    date: '',
    budget: '',
    message: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Enquiry() {
    const [form, setForm] = useState<FormState>(EMPTY);
    const [errors, setErrors] = useState<Errors>({});
    const [submitted, setSubmitted] = useState(false);

    function update<K extends keyof FormState>(key: K, value: FormState[K]) {
        setForm((f) => ({ ...f, [key]: value }));
        if (errors[key as keyof Errors]) {
            setErrors((e) => ({ ...e, [key]: undefined }));
        }
    }

    function validate(f: FormState): Errors {
        const next: Errors = {};
        if (!f.name.trim()) next.name = 'Please tell us your name.';
        if (!f.email.trim()) next.email = 'We need an email to reply.';
        else if (!EMAIL_RE.test(f.email.trim())) next.email = 'That email doesn’t look right.';
        if (!f.service) next.service = 'Choose what you’re after.';
        if (f.message.trim().length < 12) next.message = 'A sentence or two helps us prepare.';
        return next;
    }

    function onSubmit(e: FormEvent) {
        e.preventDefault();
        const found = validate(form);
        setErrors(found);
        if (Object.keys(found).length === 0) {
            setSubmitted(true);
        }
    }

    const selectedService = ENQUIRY_SERVICES.find((s) => s.id === form.service)?.label ?? '';

    return (
        <section id="contact" className="ft-section ft-container">
            <div className="ft-enquiry-grid">
                <div className="ft-enquiry-intro">
                    <Reveal as="span" className="ft-eyebrow ft-eyebrow--accent" style={{ marginBottom: '1.2rem' }}>
                        Edinburgh floral studio enquiries &amp; wedding consultations
                    </Reveal>
                    <Reveal as="h2" delay={1}>
                        Tell us about the occasion.
                    </Reveal>
                    <Reveal as="p" delay={2}>
                        For events, consultations, or same-day orders, leave a note below or call the
                        studio. We reply to every enquiry within one working day.
                    </Reveal>

                    <Reveal as="ul" className="ft-contact-list" delay={3}>
                        <li>
                            <MapPin className="ft-ci" size={18} strokeWidth={1.5} />
                            <div>
                                <dt>Studio</dt>
                                <dd>{META.address}</dd>
                            </div>
                        </li>
                        <li>
                            <Phone className="ft-ci" size={18} strokeWidth={1.5} />
                            <div>
                                <dt>Telephone</dt>
                                <dd>
                                    <a href={`tel:${META.phone.replace(/\s/g, '')}`}>{META.phone}</a>
                                </dd>
                            </div>
                        </li>
                        <li>
                            <Mail className="ft-ci" size={18} strokeWidth={1.5} />
                            <div>
                                <dt>Email</dt>
                                <dd>
                                    <a href={`mailto:${META.email}`}>{META.email}</a>
                                </dd>
                            </div>
                        </li>
                        <li>
                            <Clock className="ft-ci" size={18} strokeWidth={1.5} />
                            <div>
                                <dt>Opening hours</dt>
                                <dd>{META.hours}</dd>
                            </div>
                        </li>
                    </Reveal>
                </div>

                <Reveal delay={1}>
                    {submitted ? (
                        <div className="ft-form" role="status">
                            <div className="ft-form-success">
                                <span className="ft-success-mark">
                                    <Check size={26} strokeWidth={1.75} />
                                </span>
                                <h3>Thank you, {form.name.split(' ')[0]}.</h3>
                                <p>
                                    Your {selectedService.toLowerCase()} enquiry is with the studio.
                                    Fiona or Orla will be in touch at{' '}
                                    <strong style={{ color: 'var(--fg)' }}>{form.email}</strong> within
                                    one working day{form.date ? `, ahead of ${form.date}` : ''}.
                                </p>
                                <button
                                    type="button"
                                    className="ft-btn ft-btn-ghost"
                                    onClick={() => {
                                        setForm(EMPTY);
                                        setSubmitted(false);
                                    }}
                                >
                                    Send another enquiry
                                </button>
                                <p className="ft-form-seojack-nudge">
                                    Love how this works?{' '}
                                    <a
                                        href="https://seojack.net/templates/tpl_florist_thornfield"
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        Get this site at seojack.net
                                    </a>
                                </p>
                            </div>
                        </div>
                    ) : (
                        <form className="ft-form" onSubmit={onSubmit} noValidate>
                            <div className="ft-field">
                                <label className="ft-label">
                                    What are you planning <span className="ft-req">*</span>
                                </label>
                                <div className="ft-service-pick" role="radiogroup" aria-label="Type of enquiry">
                                    {ENQUIRY_SERVICES.map((s) => (
                                        <button
                                            key={s.id}
                                            type="button"
                                            role="radio"
                                            aria-checked={form.service === s.id}
                                            className={`ft-service-opt${form.service === s.id ? ' is-active' : ''}`}
                                            onClick={() => update('service', s.id)}
                                        >
                                            {s.label}
                                        </button>
                                    ))}
                                </div>
                                {errors.service && <span className="ft-error">{errors.service}</span>}
                            </div>

                            <div className="ft-field-row">
                                <div className="ft-field">
                                    <label className="ft-label" htmlFor="ft-name">
                                        Name <span className="ft-req">*</span>
                                    </label>
                                    <input
                                        id="ft-name"
                                        className={`ft-input${errors.name ? ' has-error' : ''}`}
                                        type="text"
                                        autoComplete="name"
                                        placeholder="Your name"
                                        value={form.name}
                                        onChange={(e) => update('name', e.target.value)}
                                        aria-invalid={!!errors.name}
                                    />
                                    {errors.name && <span className="ft-error">{errors.name}</span>}
                                </div>
                                <div className="ft-field">
                                    <label className="ft-label" htmlFor="ft-email">
                                        Email <span className="ft-req">*</span>
                                    </label>
                                    <input
                                        id="ft-email"
                                        className={`ft-input${errors.email ? ' has-error' : ''}`}
                                        type="email"
                                        autoComplete="email"
                                        placeholder="you@example.com"
                                        value={form.email}
                                        onChange={(e) => update('email', e.target.value)}
                                        aria-invalid={!!errors.email}
                                    />
                                    {errors.email && <span className="ft-error">{errors.email}</span>}
                                </div>
                            </div>

                            <div className="ft-field-row">
                                <div className="ft-field">
                                    <label className="ft-label" htmlFor="ft-date">
                                        Date needed
                                    </label>
                                    <input
                                        id="ft-date"
                                        className="ft-input"
                                        type="date"
                                        value={form.date}
                                        onChange={(e) => update('date', e.target.value)}
                                    />
                                </div>
                                <div className="ft-field">
                                    <label className="ft-label" htmlFor="ft-budget">
                                        Indicative budget
                                    </label>
                                    <select
                                        id="ft-budget"
                                        className="ft-select"
                                        value={form.budget}
                                        onChange={(e) => update('budget', e.target.value)}
                                    >
                                        <option value="">Prefer not to say</option>
                                        {ENQUIRY_BUDGETS.map((b) => (
                                            <option key={b} value={b}>
                                                {b}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="ft-field">
                                <label className="ft-label" htmlFor="ft-message">
                                    Tell us a little more <span className="ft-req">*</span>
                                </label>
                                <textarea
                                    id="ft-message"
                                    className={`ft-textarea${errors.message ? ' has-error' : ''}`}
                                    placeholder="The venue, the palette, the feeling — whatever you have so far."
                                    value={form.message}
                                    onChange={(e) => update('message', e.target.value)}
                                    aria-invalid={!!errors.message}
                                />
                                {errors.message && <span className="ft-error">{errors.message}</span>}
                            </div>

                            <button type="submit" className="ft-btn ft-btn-primary">
                                Send enquiry
                            </button>
                            <p className="ft-form-note">
                                No deposit is taken at this stage — this only starts a conversation.
                            </p>
                        </form>
                    )}
                </Reveal>
            </div>
        </section>
    );
}
