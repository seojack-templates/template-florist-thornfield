import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://template-florist-thornfield.seojack.site';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Wedding Florist Edinburgh — Thornfield Florals',
    description: 'Independent Edinburgh florist for weddings, events & dried arrangements. Dundas Street, New Town. Same-day delivery Tue–Sat.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Wedding Florist Edinburgh — Thornfield Florals',
        description: 'Independent Edinburgh florist for weddings, events & dried arrangements. Dundas Street, New Town. Same-day delivery Tue–Sat.',
        url: BASE_URL,
        siteName: 'Thornfield Florals',
        type: 'website',
        locale: 'en_GB',
        images: [{ url: 'https://cdn.seojack.website/templates/tpl_florist_thornfield.avif', width: 1600, height: 1000 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Wedding Florist Edinburgh — Thornfield Florals',
        description: 'Independent Edinburgh florist for weddings, events & dried arrangements. Dundas Street, New Town. Same-day delivery Tue–Sat.',
        images: ['https://cdn.seojack.website/templates/tpl_florist_thornfield.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#a06a3b' };

const jsonLdLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: 'Thornfield Florals',
    description: 'Independent florist and floral-design studio in Edinburgh\'s New Town, specialising in bespoke wedding flowers, event floristry, corporate subscriptions, dried arrangements, and same-day delivery.',
    url: BASE_URL,
    image: 'https://cdn.seojack.website/templates/tpl_florist_thornfield.avif',
    telephone: '+441315560247',
    email: 'hello@thornfieldflorals.co.uk',
    priceRange: '££',
    foundingDate: '2014',
    address: {
        '@type': 'PostalAddress',
        streetAddress: '14 Dundas Street',
        addressLocality: 'Edinburgh',
        addressRegion: 'Scotland',
        postalCode: 'EH3 6JN',
        addressCountry: 'GB',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: 55.9583,
        longitude: -3.1986,
    },
    openingHoursSpecification: [
        {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '18:00',
        },
    ],
    areaServed: [
        { '@type': 'City', name: 'Edinburgh' },
        { '@type': 'AdministrativeArea', name: 'East Lothian' },
        { '@type': 'AdministrativeArea', name: 'West Lothian' },
        { '@type': 'AdministrativeArea', name: 'Midlothian' },
        { '@type': 'AdministrativeArea', name: 'Scottish Borders' },
        { '@type': 'Place', name: 'New Town, Edinburgh' },
        { '@type': 'Place', name: 'Stockbridge, Edinburgh' },
        { '@type': 'Place', name: 'Leith, Edinburgh' },
        { '@type': 'Place', name: 'Morningside, Edinburgh' },
        { '@type': 'Place', name: 'Musselburgh' },
        { '@type': 'Place', name: 'Peebles' },
    ],
    sameAs: [
        'https://www.instagram.com/thornfieldflorals',
    ],
    hasMap: 'https://maps.google.com/?q=14+Dundas+Street+Edinburgh+EH3+6JN',
};

const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: 'Do you deliver across Edinburgh?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes. We deliver within Edinburgh and the surrounding EH postcodes daily, Tuesday to Saturday, including Stockbridge, Leith, Morningside, and the Lothians. Orders placed before 11 am are usually delivered the same afternoon; we also reach venues across the Lothians and the Borders for events.',
            },
        },
        {
            '@type': 'Question',
            name: 'How far in advance should I book wedding flowers?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We take a limited number of weddings each month so that every couple gets Fiona\'s attention. Most book six to twelve months ahead, though we can occasionally accommodate shorter timelines — it is always worth asking.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I order without choosing specific flowers?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We hope you will. The studio works best when you brief us on a palette and a feeling and let us choose from what is freshest that morning. Our Daily Posy and seasonal arrangements are built entirely this way.',
            },
        },
        {
            '@type': 'Question',
            name: 'Do you offer standing arrangements for businesses?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We do. Weekly and fortnightly subscriptions for reception desks, dining rooms, and boardrooms start from £75 per location, with a single point of contact and a consistent palette agreed in advance.',
            },
        },
        {
            '@type': 'Question',
            name: 'What is your approach to sourcing and waste?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'We buy from Scottish and British growers first and source seasonally to keep flower miles low. Off-cuts are composted and our wrapping is paper-based and home-compostable. Hired vessels are returned and reused.',
            },
        },
        {
            '@type': 'Question',
            name: 'Can I collect from the studio?',
            acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes — the counter at 14 Dundas Street is open Tuesday to Saturday, 9 am to 6 pm, for walk-ins and collections. There is usually a ready-made posy or two on the bench if you are passing.',
            },
        },
    ],
};

const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Thornfield Florals',
            item: BASE_URL,
        },
    ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-GB">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
                />
            </body>
        </html>
    );
}
