import {
  Orbit,
  Mail,
  Building2,
  ArrowRight,
  Smartphone,
  ExternalLink,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

export const metadata: Metadata = {
  title: 'Kontakt | Genieportal',
  description:
    'Kontaktieren Sie das Genieportal-Team. Wir helfen Unternehmen und Jobsuchenden bei Fragen rund um Video-Matching, KI-Jobfinder und unsere Job-Portale.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://genieportal.de' },
      { '@type': 'ListItem', position: 2, name: 'Kontakt' },
    ],
  };

  return (
    <div className="min-h-screen bg-[#030014]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden stars-bg">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <nav className="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 justify-center">
              <li><Link href="/" className="hover:text-violet-400 transition-colors">Home</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-violet-400 font-medium">Kontakt</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-8 backdrop-blur-sm">
            <Orbit className="h-4 w-4" />
            <span>Wir sind erreichbar</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="gradient-text-genie">Kontakt</span>
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Sie haben Fragen zu Genieportal? Wir freuen uns auf Ihre Nachricht
            und sind gerne für Sie da.
          </p>
        </div>
      </section>

      {/* Kontaktformular */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-20" />
        <div className="max-w-3xl mx-auto">
          <div className="glow-card p-8 sm:p-12">
            <h2 className="text-2xl font-bold text-white mb-2 text-center">
              Schreiben Sie uns
            </h2>
            <p className="text-gray-400 text-center mb-8">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Alternativ: E-Mail */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            Oder schreiben Sie uns direkt an{' '}
            <a
              href="mailto:support@genieportal.de"
              className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
            >
              support@genieportal.de
            </a>
          </p>
        </div>
      </section>

      {/* Für Unternehmen / Jobsuchende */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-20" />
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Unternehmen */}
            <div className="glow-card p-8 sm:p-10 group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-600 text-white mb-6 shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
                <Building2 className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Für Unternehmen
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Sie möchten Talente über Video-Matching, KI und direkten Chat erreichen?
                Registrieren Sie sich im Firmen-Dashboard und starten Sie noch heute.
              </p>
              <a
                href="https://dashboard.genieportal.de"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-6 py-3 text-sm font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25"
              >
                Zum Firmen-Dashboard
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            {/* Jobsuchende */}
            <div className="glow-card p-8 sm:p-10 group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white mb-6 shadow-lg shadow-pink-500/30 group-hover:scale-110 transition-transform">
                <Smartphone className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Für Jobsuchende
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Du suchst eine Ausbildung, ein Praktikum, einen Minijob oder eine
                Werkstudentenstelle? Die Genie App hilft dir dabei.
              </p>
              <Link
                href="/app"
                className="inline-flex items-center gap-2 rounded-full glass-button px-6 py-3 text-sm font-medium text-gray-200"
              >
                Mehr zur App
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
