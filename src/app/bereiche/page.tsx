import {
  Orbit,
  GraduationCap,
  Search,
  Compass,
  Banknote,
  BookOpen,
  ArrowRight,
  Video,
  Heart,
  MessageCircle,
  TrendingUp,
  Smartphone,
  Building2,
  Globe,
  Check,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Bereiche – 5 Job-Portale, eine Mission',
  description:
    'Ausbildung, Praktikum, Beruf, Minijob und Werkstudent – Genieportal vereint 5 spezialisierte Job-Portale in einem Recruiting-System mit Video-Matching und KI.',
  alternates: { canonical: '/bereiche' },
  openGraph: {
    title: 'Bereiche – 5 Job-Portale, eine Mission',
    description:
      'Jeder Bereich hat sein eigenes Portal. Alle teilen eine App, ein Dashboard und eine Vision.',
    url: 'https://genieportal.de/bereiche',
  },
};

const portals = [
  {
    id: 'ausbildung',
    name: 'Ausbildungsgenie',
    label: 'Ausbildung',
    icon: GraduationCap,
    color: '#7c3aed',
    colorClass: 'from-violet-600 to-pink-600',
    shadow: 'shadow-violet-500/30',
    domain: 'ausbildungsgenie.de',
    description: 'Finde deinen Ausbildungsplatz per Video-Swipe.',
    details:
      'Für Jugendliche und junge Erwachsene auf der Suche nach dem richtigen Ausbildungsberuf. Betriebe zeigen sich authentisch per Video – Azubis lernen den echten Arbeitsalltag kennen, bevor sie sich bewerben.',
    highlights: [
      '84 Städte-Seiten mit lokalen Ausbildungsplätzen',
      '30+ Berufe im Video-Format',
      'KI-Berufsberatung für Unentschlossene',
    ],
  },
  {
    id: 'praktikum',
    name: 'Praktikumsgenie',
    label: 'Praktikum',
    icon: Search,
    color: '#e11d48',
    colorClass: 'from-rose-600 to-pink-600',
    shadow: 'shadow-rose-500/30',
    domain: 'praktikumsgenie.de',
    description: 'Praktika & Schnuppertage entdecken.',
    details:
      'Ob Schülerpraktikum, BOGY, BORS oder freiwilliges Praktikum – hier finden Schüler und Studenten den perfekten Einblick in die Berufswelt. Betriebe präsentieren Praktikumsplätze modern und nahbar.',
    highlights: [
      'Schülerpraktikum, Pflichtpraktikum & freiwilliges Praktikum',
      'BOGY- und BORS-Praktika speziell gelistet',
      'Schnelle Bewerbung per Chat',
    ],
  },
  {
    id: 'beruf',
    name: 'Berufsgenie',
    label: 'Beruf',
    icon: Compass,
    color: '#f59e0b',
    colorClass: 'from-amber-500 to-orange-600',
    shadow: 'shadow-amber-500/30',
    domain: 'berufsgenie.de',
    description: 'Festanstellungen & Karriere.',
    details:
      'Für Berufseinsteiger und Jobwechsler, die mehr als eine Stellenanzeige wollen. Unternehmen zeigen Kultur, Team und Arbeitsalltag per Video. Bewerber erleben den Job, bevor sie sich bewerben.',
    highlights: [
      'Karriere-Ratgeber und Branchen-Insights',
      'Video-Unternehmensprofile statt Textwüsten',
      'KI-gestützte Jobempfehlungen',
    ],
  },
  {
    id: 'minijob',
    name: 'Minijobgenie',
    label: 'Minijob',
    icon: Banknote,
    color: '#10b981',
    colorClass: 'from-emerald-500 to-green-600',
    shadow: 'shadow-emerald-500/30',
    domain: 'minijobgenie.de',
    description: '520€-Jobs & Nebenjobs finden.',
    details:
      'Der einfachste Weg, einen Nebenjob zu finden. Ob Schüler, Student oder Berufstätige – Minijobgenie zeigt 520€-Jobs in der Nähe, mit schnellem Matching und direktem Chat zum Arbeitgeber.',
    highlights: [
      '520€-Jobs und kurzfristige Beschäftigungen',
      'Standortbasierte Suche in deiner Stadt',
      'Schnelles Matching ohne Bewerbungsmarathon',
    ],
  },
  {
    id: 'werkstudent',
    name: 'Werkstudentengenie',
    label: 'Werkstudent',
    icon: BookOpen,
    color: '#06b6d4',
    colorClass: 'from-cyan-500 to-teal-500',
    shadow: 'shadow-cyan-500/30',
    domain: 'werkstudentengenie.de',
    description: 'Werkstudentenjobs neben dem Studium.',
    details:
      'Studieren und arbeiten – die perfekte Kombination. Werkstudentengenie verbindet Studierende mit Unternehmen, die flexible Arbeitsmodelle und echte Berufserfahrung bieten.',
    highlights: [
      'Branchen-Übersicht: IT, Marketing, Finanzen & mehr',
      'Ratgeber zu Arbeitszeit, Gehalt und Steuern',
      'Campus-Style: Von Studierenden für Studierende',
    ],
  },
];

export default function BereichePage() {
  return (
    <div className="min-h-screen bg-[#030014]">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden stars-bg">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-8 backdrop-blur-sm">
            <Orbit className="h-4 w-4" />
            <span>5 Portale, 1 System</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-white">Fünf Bereiche. </span>
            <span className="gradient-text-genie">Eine Vision.</span>
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Jeder Bereich hat sein eigenes spezialisiertes Portal – aber alle teilen
            eine gemeinsame App, ein Firmen-Dashboard und eine Technologie:
            Video-Matching, KI-Jobfinder und direkter Chat.
          </p>
        </div>
      </section>

      {/* Shared Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-20" />
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">
            Was alle Bereiche gemeinsam haben
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Video, label: 'Video-Matching', text: 'Jobs per Video kennenlernen statt Stellenanzeigen lesen' },
              { icon: TrendingUp, label: 'KI-Jobfinder', text: 'Personalisierte Empfehlungen durch künstliche Intelligenz' },
              { icon: Heart, label: 'Gegenseitiges Matching', text: 'Wenn beide Seiten Interesse zeigen, entsteht ein Match' },
              { icon: MessageCircle, label: 'Direkter Chat', text: 'Nach dem Match direkt in Kontakt treten – ohne Umwege' },
            ].map((feat) => (
              <div key={feat.label} className="glow-card p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-pink-600 text-white mb-4">
                  <feat.icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-white text-sm mb-1">{feat.label}</h3>
                <p className="text-xs text-gray-500">{feat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Cards – Detailed */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-20" />
        <div className="max-w-6xl mx-auto space-y-12">
          {portals.map((portal, idx) => (
            <div
              key={portal.id}
              className="glow-card overflow-hidden"
            >
              <div className={`grid lg:grid-cols-5 gap-0 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Icon / Color Panel */}
                <div
                  className={`lg:col-span-2 bg-gradient-to-br ${portal.colorClass} p-8 sm:p-10 flex flex-col items-center justify-center text-center`}
                >
                  <portal.icon className="h-16 w-16 text-white/90 mb-4" />
                  <h3 className="text-2xl font-bold text-white">{portal.name}</h3>
                  <p className="text-white/70 text-sm mt-1">{portal.description}</p>
                  <a
                    href={`https://${portal.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-white/20 text-white text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
                  >
                    <Globe className="h-3.5 w-3.5" />
                    {portal.domain}
                  </a>
                </div>

                {/* Content */}
                <div className="lg:col-span-3 p-8 sm:p-10">
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {portal.details}
                  </p>
                  <ul className="space-y-3">
                    {portal.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Für Unternehmen Teaser */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-20" />
        <div className="max-w-4xl mx-auto">
          <div className="glow-card p-8 sm:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 text-white mb-6 shadow-lg shadow-violet-500/30">
              <Building2 className="h-7 w-7" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ein Dashboard für alle Bereiche
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-4 leading-relaxed">
              Unternehmen registrieren sich einmal und wählen ihre Bereiche:
              Azubi, Werkstudent, Praktikum, Minijob oder Festanstellung.
              Stellenanzeigen werden automatisch auf den jeweiligen Portal-Websites
              veröffentlicht und in Google Jobs aufgenommen.
            </p>
            <p className="text-gray-500 max-w-2xl mx-auto mb-8 text-sm">
              Maximale Reichweite: Ihre Stellenanzeigen erscheinen in der App,
              auf den spezialisierten Websites und in der Google-Jobsuche – mit
              einem einzigen Upload.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/fuer-unternehmen"
                className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-3.5 text-base font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
              >
                Mehr für Unternehmen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://dashboard.genieportal.de/register"
                className="rounded-full glass-button px-8 py-3.5 text-base font-medium text-gray-200 flex items-center gap-2"
              >
                Kostenlos registrieren
              </a>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Bereit für die{' '}
            <span className="gradient-text-genie">Recruiting-Revolution?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Egal welcher Bereich – mit Genieportal erreichst du die, die du
            sonst nie gefunden hättest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/app"
              className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-4 text-base font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
            >
              <Smartphone className="h-5 w-5" />
              App entdecken
            </Link>
            <Link
              href="/konzept"
              className="rounded-full glass-button px-8 py-4 text-base font-medium text-gray-200 flex items-center gap-2"
            >
              Unser Konzept
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
