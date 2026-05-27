import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://florist-thornfield.templates.seojack.website';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Thornfield Florals — Edinburgh',
    description: 'An Edinburgh florist crafting seasonal arrangements and event flowers with a restrained, considered hand.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Thornfield Florals',
        description: 'An Edinburgh florist crafting seasonal arrangements and event flowers with a restrained, considered hand.',
        url: BASE_URL,
        siteName: 'Thornfield Florals',
        type: 'website',
        locale: 'en_GB',
        images: [{ url: 'https://cdn.seojack.website/templates/tpl_florist_thornfield.avif', width: 1600, height: 1000 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Thornfield Florals',
        description: 'An Edinburgh florist crafting seasonal arrangements and event flowers with a restrained, considered hand.',
        images: ['https://cdn.seojack.website/templates/tpl_florist_thornfield.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#a06a3b' };

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: 'Thornfield Florals',
    description: 'An Edinburgh florist crafting seasonal arrangements and event flowers with a restrained, considered hand.',
    url: BASE_URL,
    image: 'https://cdn.seojack.website/templates/tpl_florist_thornfield.avif',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-GB">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}