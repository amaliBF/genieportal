import {
  Orbit,
  Building2,
  Video,
  TrendingUp,
  MessageCircle,
  Heart,
  Globe,
  ArrowRight,
  Check,
  ChevronRight,
  Shield,
  Users,
  BarChart3,
  Smartphone,
  Zap,
  Search,
  FileText,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Für Unternehmen – Talente finden, die Sie sonst nie erreicht hätten',
  description:
    'Genieportal für Unternehmen: Video-Stellenanzeigen, KI-Matching, direkter Chat, automatische Veröffentlichung auf 5 Job-Portalen und in Google Jobs. Ein Dashboard für alles.',
  alternates: { canonical: '/fuer-unternehmen' },
  openGraph: {
    title: 'Für Unternehmen – Recruiting neu gedacht',
    description:
      'Video-Stellenanzeigen, die auf 5 Portalen + Google Jobs erscheinen. Ein Dashboard, maximale Reichweite.',
    url: 'https://genieportal.de/fuer-unternehmen',
  },
};

export default function FuerUnternehmenPage() {
  return (
    <div className="min-h-screen bg-[#030014]">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden stars-bg">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-8 backdrop-blur-sm">
            <Building2 className="h-4 w-4" />
            <span>Für Arbeitgeber</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-white">Talente finden, </span>
            <span className="gradient-text-genie">die Sie sonst nie erreicht hätten.</span>
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ein Dashboard. Fünf Bereiche. Automatische Veröffentlichung auf spezialisierten
            Job-Portalen und in Google Jobs. Video-Matching und KI statt Stellenanzeigen-Monologe.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://dashboard.genieportal.de/register"
              className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-3.5 text-base font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
            >
              Jetzt kostenlos starten
              <ChevronRight className="h-4 w-4" />
            </a>
            <Link
              href="/bereiche"
              className="rounded-full glass-button px-8 py-3.5 text-base font-medium text-gray-200 flex items-center gap-2"
            >
              Bereiche ansehen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Das Problem */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Warum klassisches Recruiting <span className="text-gray-500">nicht mehr funktioniert</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { stat: '73%', text: 'der Azubis brechen ab, weil der Job nicht zur Erwartung passt' },
              { stat: '67%', text: 'der Gen Z informiert sich per Video über potenzielle Arbeitgeber' },
              { stat: '90%', text: 'der Talente sind passiv suchend – Stellenanzeigen erreichen sie nicht' },
            ].map((item) => (
              <div key={item.stat} className="glow-card p-8 text-center">
                <p className="text-3xl font-bold text-white stat-glow mb-2">{item.stat}</p>
                <p className="text-sm text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Die Lösung – Vorteile */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-6">
              <Zap className="h-4 w-4" />
              Ihre Vorteile
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Was Genieportal für Ihr Unternehmen <span className="gradient-text-genie">verändert</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: 'Video statt Textwüste',
                description:
                  'Zeigen Sie echten Arbeitsalltag in 30-90 Sekunden. Authentische Videos überzeugen mehr als jede Stellenanzeige.',
                gradient: 'from-violet-500 to-violet-600',
              },
              {
                icon: Globe,
                title: '5 Portale, 1 Upload',
                description:
                  'Ihre Stellenanzeige erscheint automatisch auf dem passenden Portal: ausbildungsgenie.de, praktikumsgenie.de, berufsgenie.de, minijobgenie.de oder werkstudentengenie.de.',
                gradient: 'from-pink-500 to-rose-600',
              },
              {
                icon: Search,
                title: 'Google Jobs Integration',
                description:
                  'Alle veröffentlichten Stellen werden automatisch für Google Jobs optimiert und erscheinen direkt in der Google-Suche.',
                gradient: 'from-cyan-500 to-blue-600',
              },
              {
                icon: Heart,
                title: 'Matching statt Hoffen',
                description:
                  'Gegenseitiges Interesse statt einseitige Bewerbungen. Sie sehen nur Kandidaten, die wirklich zu Ihnen passen.',
                gradient: 'from-amber-500 to-amber-600',
              },
              {
                icon: TrendingUp,
                title: 'KI-gestütztes Recruiting',
                description:
                  'Unsere KI analysiert Profile und Präferenzen – und bringt die richtigen Kandidaten zu Ihren Stellen.',
                gradient: 'from-emerald-500 to-emerald-600',
              },
              {
                icon: MessageCircle,
                title: 'Direkter Chat',
                description:
                  'Kein Bewerbungsmarathon. Nach dem Match chatten Sie direkt mit dem Kandidaten – schnell, persönlich, effektiv.',
                gradient: 'from-violet-500 to-pink-600',
              },
            ].map((item) => (
              <div key={item.title} className="glow-card p-8 group">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stellenanzeigen-Reichweite Highlight */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="space-divider mb-24" />
        <div className="absolute inset-0 stars-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[150px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="glow-card p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                  Eine Stellenanzeige.{' '}
                  <span className="gradient-text-genie">Maximale Reichweite.</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Was bisher mühsam auf verschiedenen Plattformen einzeln eingestellt
                  werden musste, passiert bei Genieportal automatisch:
                </p>
                <ul className="space-y-4">
                  {[
                    'Stellenanzeige im Firmen-Dashboard erstellen',
                    'Automatische Veröffentlichung auf dem passenden Portal',
                    'Optimierung für Google Jobs (Schema.org JobPosting)',
                    'Sichtbar in der Genie App per Video-Feed',
                    'KI empfiehlt Ihre Stelle passenden Kandidaten',
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white text-xs font-bold">
                        {i + 1}
                      </div>
                      <span className="text-gray-300 text-sm pt-0.5">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual: Portal logos */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'App', icon: Smartphone, gradient: 'from-violet-600 to-pink-600' },
                  { name: 'Portal-Website', icon: Globe, gradient: 'from-blue-500 to-blue-600' },
                  { name: 'Google Jobs', icon: Search, gradient: 'from-emerald-500 to-emerald-600' },
                  { name: 'KI-Empfehlung', icon: TrendingUp, gradient: 'from-amber-500 to-amber-600' },
                ].map((ch) => (
                  <div key={ch.name} className="bg-white/5 border border-white/5 rounded-2xl p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${ch.gradient} text-white mb-3`}>
                      <ch.icon className="h-5 w-5" />
                    </div>
                    <p className="text-sm font-medium text-white">{ch.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* So funktioniert's */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              In 4 Schritten zum <span className="gradient-text-genie">ersten Match</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Registrieren',
                text: 'Kostenloses Konto anlegen und Firmenprofil einrichten.',
                icon: FileText,
              },
              {
                step: '02',
                title: 'Video hochladen',
                text: 'Zeigen Sie Ihren Arbeitsalltag in einem kurzen Video.',
                icon: Video,
              },
              {
                step: '03',
                title: 'Stellen erstellen',
                text: 'Stellenanzeigen werden automatisch auf Portalen und in Google Jobs veröffentlicht.',
                icon: Globe,
              },
              {
                step: '04',
                title: 'Matchen & Chatten',
                text: 'Kandidaten swipen, Sie matchen, der Chat öffnet sich.',
                icon: MessageCircle,
              },
            ].map((item) => (
              <div key={item.step} className="glow-card p-6 text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 text-white text-sm font-bold mb-4 shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preise Teaser */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Faire Preise. <span className="gradient-text-genie">Planbare Kosten.</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Keine Kosten pro Klick oder Bewerbung. Stattdessen transparente
              Monatspakete – inklusive kostenlosem Einstieg.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                name: 'Starter',
                price: '0€',
                period: '/ Monat',
                features: ['1 Stellenanzeige', '1 Video', 'Chat-Funktion', 'Basis-Analytics'],
              },
              {
                name: 'Pro',
                price: '49€',
                period: '/ Monat',
                features: ['10 Stellenanzeigen', '5 Videos', 'Prioritäts-Matching', 'Erweiterte Analytics'],
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: '149€',
                period: '/ Monat',
                features: ['Unlimitierte Stellen', 'Unlimitierte Videos', 'Team-Accounts', 'Premium-Support'],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`glow-card p-8 text-center ${
                  plan.highlighted ? 'border-violet-500/30 bg-violet-500/5' : ''
                }`}
              >
                {plan.highlighted && (
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/20 text-violet-300 text-xs font-medium px-3 py-1 mb-4">
                    Beliebteste Wahl
                  </div>
                )}
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <div className="mt-2 mb-6">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-500 text-sm">{plan.period}</span>
                </div>
                <ul className="space-y-3 text-left mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                      <Check className="h-4 w-4 text-violet-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://dashboard.genieportal.de/register"
                  className={`block w-full rounded-full py-2.5 text-sm font-medium transition-all ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white hover:from-violet-500 hover:to-pink-500 shadow-lg shadow-violet-500/25'
                      : 'glass-button text-gray-200'
                  }`}
                >
                  Jetzt starten
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-20" />
        <div className="max-w-3xl mx-auto">
          <div className="glow-card p-8 sm:p-10 text-center">
            <p className="text-gray-300 leading-relaxed italic text-lg">
              &ldquo;Seit wir auf Genie sind, bekommen wir Bewerbungen von Leuten,
              die wirklich wissen worauf sie sich einlassen. Die Qualität der Matches
              ist unglaublich.&rdquo;
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-pink-600 flex items-center justify-center text-white text-sm font-bold">
                EM
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">Elektro Müller GmbH</p>
                <p className="text-xs text-gray-500">Augsburg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="space-divider mb-28" />
        <div className="absolute inset-0 stars-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[150px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Starten Sie jetzt mit{' '}
            <span className="gradient-text-genie">Genieportal</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Kostenlos registrieren, Video hochladen und die Talente von morgen erreichen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://dashboard.genieportal.de/register"
              className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-4 text-base font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
            >
              <Building2 className="h-5 w-5" />
              Jetzt kostenlos registrieren
            </a>
            <Link
              href="/kontakt"
              className="rounded-full glass-button px-8 py-4 text-base font-medium text-gray-200 flex items-center gap-2"
            >
              Fragen? Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
