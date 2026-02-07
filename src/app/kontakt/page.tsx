import {
  Orbit,
  Mail,
  Building2,
  ArrowRight,
  Smartphone,
  ExternalLink,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Kontakt | Genieportal',
  description:
    'Kontaktieren Sie das Genieportal-Team. Wir helfen Unternehmen und Jobsuchenden bei Fragen rund um Video-Matching, KI-Jobfinder und unsere Job-Portale.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-[#030014]">
      <Header />

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden stars-bg">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
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

      {/* ═══════════════════════════════════════════════════════════
          E-MAIL KONTAKT
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-20" />
        <div className="max-w-3xl mx-auto">
          <div className="glow-card p-8 sm:p-12 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-pink-600 text-white mb-8 shadow-lg shadow-violet-500/30">
              <Mail className="h-9 w-9" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Schreiben Sie uns
            </h2>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              Der schnellste Weg uns zu erreichen. Ob Fragen, Feedback,
              Kooperationsanfragen oder Support – wir antworten in der Regel
              innerhalb von 24 Stunden.
            </p>
            <a
              href="mailto:kontakt@genieportal.de"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-3.5 text-base font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25"
            >
              <Send className="h-4 w-4" />
              kontakt@genieportal.de
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FÜR UNTERNEHMEN / JOBSUCHENDE
      ═══════════════════════════════════════════════════════════ */}
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
                Registrieren Sie sich im Firmen-Dashboard und starten Sie noch heute
                mit der Personalsuche der Zukunft.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                  Stellenanzeigen als Video veröffentlichen
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                  Kandidaten per Matching & Chat kennenlernen
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-2 flex-shrink-0" />
                  Flexible Pakete ab 0 EUR / Monat
                </li>
              </ul>
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
                Werkstudentenstelle? Lade dir die Genie App herunter und finde deinen
                Traumjob per Video-Swipe und KI-Jobfinder.
              </p>
              <ul className="space-y-3 text-sm text-gray-400 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                  Komplett kostenlos für Jobsuchende
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                  Video-Feed, KI-Jobfinder und direkter Chat
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 flex-shrink-0" />
                  5 Bereiche: Ausbildung, Praktikum, Beruf, Minijob, Werkstudent
                </li>
              </ul>
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

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="space-divider mb-24" />
        <div className="absolute inset-0 stars-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/8 rounded-full blur-[150px]" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Lassen Sie uns{' '}
            <span className="gradient-text-genie">ins Gespräch kommen</span>
          </h2>
          <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
            Ob Fragen, Feedback oder Kooperation – wir freuen uns auf Sie.
          </p>

          <a
            href="mailto:kontakt@genieportal.de"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-3.5 text-base font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25"
          >
            <Mail className="h-4 w-4" />
            E-Mail schreiben
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
