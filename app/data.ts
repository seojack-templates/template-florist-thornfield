/**
 * Typed, realistic seed content for the florist-thornfield template.
 * No lorem ipsum — specific names, copy, prices, and addresses throughout.
 * The builder expands each section from this foundation.
 */

// ── Business identity ────────────────────────────────────────────────────────

export const META = {
    name:        'Thornfield Florals',
    tagline:     'Flowers as considered as the occasions they mark.',
    descriptor:  'Independent florist & floral-design studio, Edinburgh',
    founded:     2014,
    city:        'Edinburgh',
    country:     'Scotland',
    address:     '14 Dundas Street, Edinburgh, EH3 6JN',
    phone:       '+44 131 556 0247',
    email:       'hello@thornfieldflorals.co.uk',
    hours:       'Tuesday – Saturday, 9 am – 6 pm',
    instagram:   '@thornfieldflorals',
} as const;

// ── Navigation ─────────────────────────────────────────────────────────────────

export const NAV_LINKS: { label: string; href: string }[] = [
    { label: 'Collections', href: '#collections' },
    { label: 'Events',      href: '#events' },
    { label: 'Studio',      href: '#studio' },
    { label: 'Journal',     href: '#testimonials' },
];

// ── Hero stat band ───────────────────────────────────────────────────────────

export const HERO_STATS: { label: string; value: string; sub?: string }[] = [
    { label: 'Established', value: '2014',  sub: 'New Town, Edinburgh' },
    { label: 'Weddings a year', value: '60+', sub: 'across the Lothians' },
    { label: 'Cut & sourced', value: 'Daily', sub: 'British growers first' },
    { label: 'Studio counter', value: 'Tue–Sat', sub: '9am – 6pm' },
];

// ── Story / studio narrative ─────────────────────────────────────────────────

export const STORY = {
    eyebrow: 'The Studio',
    heading: 'A small studio with a long view of the season.',
    body: [
        'Thornfield began in 2014 as a single bucket of ranunculus on a Dundas Street windowsill. A decade on, we are a working studio of three, still arranging everything by hand and still buying first from Scottish and British growers before the Dutch auction.',
        'We keep the palette quiet and the gestures deliberate. A Thornfield arrangement should look as though it was gathered on a walk and set down without fuss — even when it took the better part of a morning to make it look that easy.',
    ],
    signName: 'Fiona Thorngate',
    signRole: 'Founder',
    figureSrc:
        'https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=1100&q=80',
    figureAlt: 'Florist arranging seasonal stems at a studio bench',
    figureCaption: '14 Dundas Street · New Town',
} as const;

// ── Full-bleed editorial spread (the memorable element) ──────────────────────

export const SPREAD = {
    eyebrow: 'Seasonal, not standardised',
    body: 'Stems are chosen the morning they are cut. No two Daily Posies are alike, and that is the whole point of a flower that was alive yesterday.',
    imageSrc:
        'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=2000&q=80',
    imageAlt: 'A wide editorial spread of freshly cut seasonal flowers laid across a worktable',
    credit: 'Late summer, 2024 — studio archive',
} as const;

// ── Team ─────────────────────────────────────────────────────────────────────

export interface TeamMember {
    name:     string;
    role:     string;
    bio:      string;
    imageSrc: string;
}

export const TEAM: TeamMember[] = [
    {
        name: 'Fiona Thorngate',
        role: 'Founder & Lead Designer',
        bio:  'Trained at the Dutch Flower School in Aalsmeer before returning to Edinburgh in 2014. Fiona leads all large event commissions and seasonal window installations.',
        imageSrc: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Lewis Cairns',
        role: 'Senior Florist',
        bio:  'Specialises in structural, long-lived dried arrangements and the studio\'s weekday walk-in counter. Ten years in hospitality floristry before joining Thornfield in 2019.',
        imageSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80',
    },
    {
        name: 'Orla Mackay',
        role: 'Studio & Events Manager',
        bio:  'Coordinates venue relationships across Lothian and the Borders, and manages the wedding consultation diary.',
        imageSrc: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=700&q=80',
    },
];

// ── Collections ──────────────────────────────────────────────────────────────

export type CollectionFilter = 'all' | 'year-round' | 'seasonal' | 'dried';

export interface Collection {
    slug:     string;
    title:    string;
    season:   string;
    tagline:  string;
    price:    string;  // starting price, display string
    priceVal: number;  // numeric starting price, for sorting/filtering
    filter:   Exclude<CollectionFilter, 'all'>;
    imageSrc: string;
    imageAlt: string;
}

export const COLLECTIONS: Collection[] = [
    {
        slug:    'daily-posy',
        title:   'Daily Posy',
        season:  'Year-round',
        tagline: 'A hand-tied seasonal bunch, chosen each morning from what arrived that day.',
        price:   'From £18',
        priceVal: 18,
        filter:  'year-round',
        imageSrc: 'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'A loosely hand-tied posy of seasonal stems',
    },
    {
        slug:    'table-arrangements',
        title:   'Table Arrangements',
        season:  'Year-round',
        tagline: 'Low, fulsome arrangements designed to hold their structure across a long dinner.',
        price:   'From £65',
        priceVal: 65,
        filter:  'year-round',
        imageSrc: 'https://images.unsplash.com/photo-1457089328109-e5d9bd499191?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'A low table arrangement set for a dinner',
    },
    {
        slug:    'late-summer-studio',
        title:   'Late Summer Studio',
        season:  'August – September',
        tagline: 'Dahlias, veronicastrum, and smoke bush — the brief is late light and warm colour.',
        price:   'From £45',
        priceVal: 45,
        filter:  'seasonal',
        imageSrc: 'https://images.unsplash.com/photo-1599733589046-75a93e003a85?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'Warm-toned late summer dahlias and grasses',
    },
    {
        slug:    'dried-permanents',
        title:   'Dried Permanents',
        season:  'Year-round',
        tagline: 'Pampas, lunaria, and cotton thistle, structured for longevity and texture.',
        price:   'From £55',
        priceVal: 55,
        filter:  'dried',
        imageSrc: 'https://images.unsplash.com/photo-1602241525823-0c61c1f6b1c4?auto=format&fit=crop&w=900&q=80',
        imageAlt: 'A textural dried arrangement of pampas and lunaria',
    },
];

export const COLLECTION_FILTERS: { id: CollectionFilter; label: string }[] = [
    { id: 'all',        label: 'All collections' },
    { id: 'year-round', label: 'Year-round' },
    { id: 'seasonal',   label: 'Seasonal' },
    { id: 'dried',      label: 'Dried' },
];

// ── Event services ────────────────────────────────────────────────────────────

export interface EventService {
    id:          string;
    title:       string;
    description: string;
    typical:     string;  // typical scope
}

export const EVENT_SERVICES: EventService[] = [
    {
        id:          'weddings',
        title:       'Weddings',
        description: 'Full-day floristry including bridal party, ceremony arch or altar, and reception tables. Site visits are included for all commissions above £1,200.',
        typical:     'Typical budget: £800 – £4,500',
    },
    {
        id:          'corporate',
        title:       'Corporate & Hospitality',
        description: 'Standing weekly or monthly subscriptions for reception desks, dining rooms, and boardrooms across Edinburgh and the Lothians.',
        typical:     'Weekly from £75 per location',
    },
    {
        id:          'private-events',
        title:       'Private Events',
        description: 'Birthday suppers, milestone celebrations, and memorial services. Floral design is tailored to the room, the guest list, and the hour.',
        typical:     'Consultation from £120',
    },
];

// ── Testimonials ──────────────────────────────────────────────────────────────

export interface Testimonial {
    quote:   string;
    author:  string;
    context: string;
}

export const TESTIMONIALS: Testimonial[] = [
    {
        quote:   'Fiona understood the brief from the first call. The ceremony arch was exactly the restrained, meadow-wild thing we\'d imagined but couldn\'t articulate.',
        author:  'Sophie & David Rennie',
        context: 'Wedding at Prestonfield House, August 2024',
    },
    {
        quote:   'We\'ve had a standing weekly arrangement in our reception for three years. Guests mention the flowers almost every day.',
        author:  'Charlotte Frame',
        context: 'Studio Manager, Frame & Partners Architecture, Edinburgh',
    },
    {
        quote:   'I ordered a birthday arrangement on 24 hours\' notice and it arrived looking like it had been planned for a week. Extraordinary.',
        author:  'Alasdair McCrae',
        context: 'Walk-in client, March 2025',
    },
];

// ── Contact / booking ─────────────────────────────────────────────────────────

export const CONTACT = {
    heading:     'Start a conversation',
    subheading:  'For event enquiries, consultations, or same-day orders, get in touch below or call the studio.',
    ctaLabel:    'Send an enquiry',
    ctaHref:     'mailto:hello@thornfieldflorals.co.uk',
    mapEmbed:    '', // populated by builder with Google Maps embed URL
} as const;

// ── Enquiry form options ──────────────────────────────────────────────────────

export const ENQUIRY_SERVICES: { id: string; label: string }[] = [
    { id: 'wedding',   label: 'Wedding' },
    { id: 'event',     label: 'Event' },
    { id: 'order',     label: 'Single order' },
];

export const ENQUIRY_BUDGETS: string[] = [
    'Under £150',
    '£150 – £500',
    '£500 – £1,200',
    '£1,200 – £4,500',
    'Over £4,500',
];

// ── FAQ ─────────────────────────────────────────────────────────────────────

export interface FAQItem {
    q: string;
    a: string;
}

export const FAQS: FAQItem[] = [
    {
        q: 'Do you deliver across Edinburgh?',
        a: 'Yes. We deliver within Edinburgh and the surrounding EH postcodes daily, Tuesday to Saturday. Orders placed before 11 am are usually delivered the same afternoon; we also reach venues across the Lothians and the Borders for events.',
    },
    {
        q: 'How far in advance should I book wedding flowers?',
        a: 'We take a limited number of weddings each month so that every couple gets Fiona’s attention. Most book six to twelve months ahead, though we can occasionally accommodate shorter timelines — it is always worth asking.',
    },
    {
        q: 'Can I order without choosing specific flowers?',
        a: 'We hope you will. The studio works best when you brief us on a palette and a feeling and let us choose from what is freshest that morning. Our Daily Posy and seasonal arrangements are built entirely this way.',
    },
    {
        q: 'Do you offer standing arrangements for businesses?',
        a: 'We do. Weekly and fortnightly subscriptions for reception desks, dining rooms, and boardrooms start from £75 per location, with a single point of contact and a consistent palette agreed in advance.',
    },
    {
        q: 'What is your approach to sourcing and waste?',
        a: 'We buy from Scottish and British growers first and source seasonally to keep flower miles low. Off-cuts are composted and our wrapping is paper-based and home-compostable. Hired vessels are returned and reused.',
    },
    {
        q: 'Can I collect from the studio?',
        a: 'Yes — the counter at 14 Dundas Street is open Tuesday to Saturday, 9 am to 6 pm, for walk-ins and collections. There is usually a ready-made posy or two on the bench if you are passing.',
    },
];

// ── Footer ──────────────────────────────────────────────────────────────────

export const FOOTER_COLS: { heading: string; links: { label: string; href: string }[] }[] = [
    {
        heading: 'Explore',
        links: [
            { label: 'Collections',  href: '#collections' },
            { label: 'Event flowers', href: '#events' },
            { label: 'The studio',   href: '#studio' },
            { label: 'Testimonials', href: '#testimonials' },
        ],
    },
    {
        heading: 'Visit',
        links: [
            { label: '14 Dundas Street', href: '#contact' },
            { label: 'Edinburgh EH3 6JN', href: '#contact' },
            { label: 'Tue – Sat, 9–6',   href: '#contact' },
            { label: 'Get directions',   href: '#contact' },
        ],
    },
    {
        heading: 'Connect',
        links: [
            { label: 'Enquire',          href: '#contact' },
            { label: '+44 131 556 0247', href: 'tel:+441315560247' },
            { label: 'Email the studio', href: 'mailto:hello@thornfieldflorals.co.uk' },
            { label: '@thornfieldflorals', href: '#' },
        ],
    },
];
