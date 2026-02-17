import {
  Orbit,
  Video,
  Heart,
  MessageCircle,
  TrendingUp,
  ArrowRight,
  Building2,
  Smartphone,
  Globe,
  Users,
  Search,
  Zap,
  Shield,
  Check,
  GraduationCap,
  BookOpen,
  Banknote,
  Compass,
  ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Konzept – Die Vision hinter Genieportal',
  description:
    'Warum Genieportal existiert: Die Vision hinter Video-Matching, KI-Jobfinder und dem Recruiting-System mit 5 spezialisierten Job-Portalen.',
  alternates: { canonical: '/konzept' },
  openGraph: {
    title: 'Konzept – Die Vision hinter Genieportal',
    description:
      'Recruiting neu gedacht: Video statt Text, Matching statt Bewerben, KI statt Keywords.',
    url: 'https://genieportal.de/konzept',
  },
};

export default function KonzeptPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://genieportal.de' },
      { '@type': 'ListItem', position: 2, name: 'Konzept' },
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

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <nav className="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 justify-center">
              <li><Link href="/" className="hover:text-violet-400 transition-colors">Home</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-violet-400 font-medium">Konzept</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-8 backdrop-blur-sm">
            <Orbit className="h-4 w-4" />
            <span>Die Vision</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-white">Warum wir </span>
            <span className="gradient-text-genie">Genieportal</span>
            <span className="text-white"> gebaut haben.</span>
          </h1>

          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Recruiting ist kaputt. Stellenanzeigen sind Monologe.
            Bewerbungsprozesse sind Einbahnstraßen. Wir glauben, dass es besser geht –
            und haben ein System gebaut, das Recruiting zum Dialog macht.
          </p>
        </div>
      </section>

      {/* Das Problem */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Die Ausgangslage
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Drei fundamentale Probleme, die wir lösen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Stellenanzeigen funktionieren nicht mehr',
                text: 'Gen Z liest keine Stellenanzeigen. 67% informieren sich per Video über Jobs. Wer nur Text anbietet, verliert die besten Talente an Plattformen, die visuell kommunizieren.',
                icon: Video,
                gradient: 'from-violet-500 to-violet-600',
              },
              {
                title: 'Bewerbungen sind einseitig',
                text: 'Bewerber schicken Unterlagen in ein schwarzes Loch. Unternehmen sichten hunderte Profile ohne echten Bezug. Beide Seiten verschwenden Zeit mit dem falschen Gegenüber.',
                icon: Heart,
                gradient: 'from-pink-500 to-rose-600',
              },
              {
                title: 'Passiv Suchende bleiben unsichtbar',
                text: '90% der Talente sind nicht aktiv auf Jobsuche – aber offen für gute Angebote. Klassische Stellenbörsen erreichen diese Zielgruppe nicht.',
                icon: Search,
                gradient: 'from-cyan-500 to-blue-600',
              },
            ].map((item) => (
              <div key={item.title} className="glow-card p-8">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-5 shadow-lg`}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Unsere Antwort – Die 3 Säulen */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-6">
              <Zap className="h-4 w-4" />
              Unsere Antwort
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Drei Säulen. <span className="gradient-text-genie">Ein System.</span>
            </h2>
          </div>

          <div className="space-y-8">
            {[
              {
                num: '01',
                title: 'Video statt Text',
                text: 'Unternehmen zeigen echten Arbeitsalltag in 30-90 Sekunden. Kandidaten erzählen ihre Geschichte. Videos sagen mehr als tausend Bullet Points – und schaffen Vertrauen, bevor das erste Gespräch stattfindet.',
                icon: Video,
              },
              {
                num: '02',
                title: 'KI statt Keywords',
                text: 'Der KI-Jobfinder versteht, was Kandidaten wollen – nicht nur was sie eintippen. Kein Keyword-Matching, sondern echtes Verstehen von Interessen, Stärken und Präferenzen. Die KI empfiehlt beiden Seiten die besten Matches.',
                icon: TrendingUp,
              },
              {
                num: '03',
                title: 'Matching statt Bewerben',
                text: 'Gegenseitiges Interesse statt einseitige Bewerbung. Wenn beide Seiten wollen, entsteht ein Match – und der direkte Chat öffnet sich. Kein Anschreiben, kein Warten, kein schwarzes Loch.',
                icon: Heart,
              },
            ].map((item) => (
              <div key={item.num} className="glow-card p-8 sm:p-10">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/20">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Das Portal-System */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="space-divider mb-24" />
        <div className="absolute inset-0 stars-bg" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              5 spezialisierte Portale. <span className="gradient-text-genie">Ein System.</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Jeder Bereich hat sein eigenes Portal mit eigener Domain, eigenem Design
              und eigener Zielgruppe – aber alle teilen eine gemeinsame Technologie.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { name: 'Ausbildung', domain: 'ausbildungsgenie.de', icon: GraduationCap, colorClass: 'from-violet-600 to-pink-600' },
              { name: 'Praktikum', domain: 'praktikumsgenie.de', icon: Search, colorClass: 'from-rose-600 to-pink-600' },
              { name: 'Beruf', domain: 'berufsgenie.de', icon: Compass, colorClass: 'from-amber-500 to-orange-600' },
              { name: 'Minijob', domain: 'minijobgenie.de', icon: Banknote, colorClass: 'from-emerald-500 to-green-600' },
              { name: 'Werkstudent', domain: 'werkstudentengenie.de', icon: BookOpen, colorClass: 'from-cyan-500 to-teal-500' },
            ].map((portal) => (
              <a
                key={portal.domain}
                href={`https://${portal.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card p-5 text-center group hover:border-violet-500/30"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${portal.colorClass} flex items-center justify-center mx-auto mb-3 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <portal.icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">{portal.name}</h3>
                <span className="text-xs text-gray-500">{portal.domain}</span>
              </a>
            ))}
          </div>

          {/* Was das für Unternehmen bedeutet */}
          <div className="mt-12 glow-card p-8 sm:p-10">
            <h3 className="text-xl font-bold text-white mb-4">
              Was das für Unternehmen bedeutet
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Ein Dashboard für alle Bereiche',
                'Stellenanzeigen erscheinen automatisch auf dem passenden Portal',
                'Automatische Optimierung für Google Jobs',
                'Kandidaten aus der App und von den Websites',
                'Maximale Reichweite mit minimalem Aufwand',
                'Planbare Kosten statt Pay-per-Click',
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Die App */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-6">
                <Smartphone className="h-4 w-4" />
                Die Genie App
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Eine App für alle Bereiche
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Jobsuchende laden eine einzige App herunter und haben Zugang zu
                allen fünf Bereichen: Ausbildung, Praktikum, Beruf, Minijob und
                Werkstudent. Ein Profil, ein Login, alle Möglichkeiten.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Video, text: 'Video-Feed: Jobs entdecken wie auf Social Media' },
                  { icon: TrendingUp, text: 'KI-Jobfinder: Persönliche Empfehlungen statt Keyword-Suche' },
                  { icon: Heart, text: 'Matching: Gegenseitiges Interesse zeigen per Swipe' },
                  { icon: MessageCircle, text: 'Chat: Direkt mit Unternehmen kommunizieren' },
                ].map((feat) => (
                  <div key={feat.text} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                      <feat.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-gray-300 text-sm pt-1.5">{feat.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* App Mockup */}
            <div className="flex justify-center">
              <div className="relative w-64 h-[480px] rounded-[3rem] bg-gradient-to-b from-gray-900 to-gray-950 border-2 border-violet-500/20 overflow-hidden shadow-2xl shadow-violet-500/10">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#030014] rounded-b-2xl z-10" />
                <div className="absolute inset-3 rounded-[2.2rem] bg-gradient-to-b from-violet-950/50 to-[#030014] overflow-hidden">
                  <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center mb-4">
                      <Orbit className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-white font-bold text-lg">Genie App</p>
                    <p className="text-gray-500 text-xs mt-2">Jobs finden wie du lebst.</p>
                    <div className="mt-6 flex gap-6 justify-center">
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center mb-1">
                          <Video className="h-4 w-4 text-violet-400" />
                        </div>
                        <span className="text-[10px] text-gray-600">Feed</span>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center mb-1">
                          <Heart className="h-4 w-4 text-pink-400" />
                        </div>
                        <span className="text-[10px] text-gray-600">Match</span>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center mb-1">
                          <MessageCircle className="h-4 w-4 text-cyan-400" />
                        </div>
                        <span className="text-[10px] text-gray-600">Chat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-80 h-80 bg-violet-600/10 rounded-full blur-[80px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Wer steckt dahinter */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-4xl mx-auto">
          <div className="glow-card p-8 sm:p-12">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-6">
                <Shield className="h-4 w-4" />
                Wer steckt dahinter
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Ein Projekt der Butterflies IT UG
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto mb-6">
                Genieportal und die fünf Job-Portale sind Projekte der
                Butterflies IT UG (haftungsbeschränkt) aus Schwerin. Wir
                glauben daran, dass Recruiting menschlicher, visueller und
                intelligenter sein muss – und bauen die Technologie dafür.
              </p>
              <p className="text-gray-500 text-sm max-w-xl mx-auto">
                Unsere Mission: Menschen und Unternehmen zusammenbringen,
                die wirklich zueinander passen. Nicht durch Algorithmen die
                Klicks zählen – sondern durch Technologie die versteht.
              </p>
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
            Die Recruiting-Revolution{' '}
            <span className="gradient-text-genie">hat begonnen.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Ob Jobsuchende oder Unternehmen – Genieportal ist für beide
            Seiten gemacht.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/app"
              className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-4 text-base font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
            >
              <Smartphone className="h-5 w-5" />
              App entdecken
            </Link>
            <a
              href="https://dashboard.genieportal.de/register"
              className="rounded-full glass-button px-8 py-4 text-base font-medium text-gray-200 flex items-center gap-2"
            >
              <Building2 className="h-5 w-5" />
              Als Unternehmen registrieren
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
