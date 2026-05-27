'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, ArrowUpDown } from 'lucide-react';
import { Reveal } from '../primitives';
import {
    COLLECTIONS,
    COLLECTION_FILTERS,
    type CollectionFilter,
} from '../data';

type SortMode = 'curated' | 'price';

export default function Collections() {
    const [filter, setFilter] = useState<CollectionFilter>('all');
    const [sort, setSort] = useState<SortMode>('curated');

    const visible = useMemo(() => {
        const base =
            filter === 'all'
                ? [...COLLECTIONS]
                : COLLECTIONS.filter((c) => c.filter === filter);
        if (sort === 'price') {
            base.sort((a, b) => a.priceVal - b.priceVal);
        }
        return base;
    }, [filter, sort]);

    return (
        <section id="collections" className="ft-section ft-container">
            <div className="ft-section-head">
                <div>
                    <Reveal as="span" className="ft-eyebrow ft-eyebrow--accent">
                        Seasonal Flower Collections — Edinburgh Studio
                    </Reveal>
                    <Reveal as="h2" delay={1} style={{ marginTop: '1rem' }}>
                        Made to the day, not to a catalogue.
                    </Reveal>
                </div>
                <Reveal as="p" className="ft-lede" delay={2} style={{ marginBottom: 0 }}>
                    Four ways into the studio’s work — from a weekday posy to a structured dried
                    piece. Filter by season, or sort by where they start.
                </Reveal>
            </div>

            <Reveal
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2.4rem',
                }}
            >
                <div className="ft-filterbar" role="tablist" aria-label="Filter collections">
                    {COLLECTION_FILTERS.map((f) => (
                        <button
                            key={f.id}
                            type="button"
                            role="tab"
                            aria-selected={filter === f.id}
                            className={`ft-filter-chip${filter === f.id ? ' is-active' : ''}`}
                            onClick={() => setFilter(f.id)}
                        >
                            {f.label}
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    className="ft-filter-chip"
                    onClick={() => setSort((s) => (s === 'curated' ? 'price' : 'curated'))}
                    aria-label="Toggle sort order"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
                >
                    <ArrowUpDown size={14} strokeWidth={1.75} />
                    {sort === 'curated' ? 'Sort: Curated' : 'Sort: Price, low to high'}
                </button>
            </Reveal>

            <div className="ft-collections-grid">
                {visible.length === 0 ? (
                    <p className="ft-collection-empty">
                        No collections in this category just now — try another season.
                    </p>
                ) : (
                    visible.map((c, i) => (
                        <Reveal as="article" key={c.slug} className="ft-collection" delay={(i % 2) + 1}>
                            <div className="ft-collection-img">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={c.imageSrc} alt={c.imageAlt} loading="lazy" />
                            </div>
                            <div>
                                <span className="ft-collection-season">{c.season}</span>
                                <h3>{c.title}</h3>
                                <p>{c.tagline}</p>
                                <div className="ft-collection-foot">
                                    <span className="ft-collection-price ft-numeral">{c.price}</span>
                                    <a href="#contact" className="ft-collection-link">
                                        Enquire
                                        <ArrowRight size={15} strokeWidth={1.75} />
                                    </a>
                                </div>
                            </div>
                        </Reveal>
                    ))
                )}
            </div>
        </section>
    );
}
