import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import CookieConsent from '@/components/CookieConsent';
import { GenieAuthProvider } from '@/lib/genie-auth';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://genieportal.de'),
  title: {
    default: 'Genieportal – Recruiting neu gedacht.',
    template: '%s | Genieportal',
  },
  description:
    '5 Job-Portale, eine App, eine Mission. Video-Matching, KI-Jobfinder und direkter Chat. Für Ausbildung, Praktikum, Beruf, Minijob und Werkstudent.',
  keywords: [
    'Genieportal',
    'Recruiting',
    'Video-Matching',
    'KI-Jobfinder',
    'Ausbildung',
    'Praktikum',
    'Beruf',
    'Minijob',
    'Werkstudent',
    'Gen Z',
    'Azubi',
    'Jobbörse',
  ],
  authors: [{ name: 'Butterflies IT UG' }],
  creator: 'Genieportal',
  publisher: 'Butterflies IT UG (haftungsbeschränkt)',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Genieportal – Recruiting neu gedacht',
    description:
      'Ein Universum. Fünf Welten. Eine App. Video-Matching, KI-Jobfinder, direkter Chat.',
    url: 'https://genieportal.de',
    siteName: 'Genieportal',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genieportal – Recruiting neu gedacht',
    description:
      '5 Job-Portale, eine App, eine Mission. Video-Matching & KI-Jobfinder.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Genieportal',
  url: 'https://genieportal.de',
  logo: 'https://genieportal.de/icon.svg',
  description: 'Recruiting neu gedacht: Video-Matching, KI-Jobfinder und direkter Chat für Ausbildung, Praktikum, Beruf, Minijob und Werkstudent.',
  foundingDate: '2025',
  parentOrganization: {
    '@type': 'Organization',
    name: 'Butterflies IT UG (haftungsbeschränkt)',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hagenower Str. 73',
      addressLocality: 'Schwerin',
      postalCode: '19061',
      addressCountry: 'DE',
    },
  },
  sameAs: [
    'https://ausbildungsgenie.de',
    'https://praktikumsgenie.de',
    'https://berufsgenie.de',
    'https://minijobgenie.de',
    'https://werkstudentengenie.de',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} font-sans antialiased bg-[#030014] text-gray-200`}>
        <GenieAuthProvider>
          {children}
        </GenieAuthProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
