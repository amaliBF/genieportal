import { Metadata } from 'next';
import Link from 'next/link';
import {
  Orbit, Heart, Target, Lightbulb, Users, ArrowRight, Mail, MapPin, Building2,
  GraduationCap, ClipboardCheck, Compass, Banknote, BookOpen,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Über uns – Butterflies IT UG | Genieportal',
  description: 'Wir sind Butterflies IT – das Team hinter Genieportal, Ausbildungsgenie und 4 weiteren Portalen. Unsere Mission: Recruiting neu denken.',
  openGraph: {
    title: 'Über uns – Butterflies IT UG',
    description: 'Das Team hinter Genieportal. Unsere Mission: Recruiting neu denken.',
  },
};

const values = [
  { icon: Heart, title: 'Bewerber-First', desc: 'Wir bauen Produkte, die Bewerber lieben – nicht nur Unternehmen. Die App ist und bleibt kostenlos.' },
  { icon: Target, title: 'Video statt Text', desc: 'Menschen hinter den Stellenanzeigen sichtbar machen. Echte Videos zeigen echte Arbeitsplätze.' },
  { icon: Lightbulb, title: 'KI für alle', desc: 'Intelligente Matching-Algorithmen und KI-Berufsfinder, die jedem helfen – nicht nur Tech-Savvy.' },
  { icon: Users, title: 'Für alle Karrierestufen', desc: '5 spezialisierte Portale: Vom Schülerpraktikum bis zum Vollzeitjob.' },
];

const milestones = [
  { year: '2024', text: 'Gründung von Butterflies IT UG in Schwerin' },
  { year: '2025', text: 'Launch von Ausbildungsgenie.de mit 3.000+ SEO-Seiten' },
  { year: '2025', text: 'Erweiterung um 4 weitere Portale (Praktikum, Beruf, Minijob, Werkstudent)' },
  { year: '2026', text: 'Migration zu Genieportal – eine Plattform für alle Portale' },
  { year: '2026', text: 'Launch der Genie App für iOS & Android' },
];

export default function UeberUnsPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://genieportal.de' },
      { '@type': 'ListItem', position: 2, name: 'Über uns' },
    ],
  };

  return (
    <>
    <Header />
    <main className="min-h-screen bg-[#030014]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 justify-center">
              <li><Link href="/" className="hover:text-violet-400 transition-colors">Home</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-violet-400 font-medium">Über uns</li>
            </ol>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            Wir sind <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Butterflies IT</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Ein junges Team aus Schwerin mit einer großen Mission: Recruiting für die nächste Generation neu denken. Echte Videos statt langweiliger Stellenanzeigen. Swipe-Matching statt endloser Bewerbungen.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white mb-6">Unsere Mission</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Der Ausbildungsmarkt ist kaputt. Unternehmen finden keine Bewerber, und junge Menschen finden keine passenden Stellen. Klassische Jobbörsen sprechen die Generation Z nicht an. Wir ändern das.
              </p>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Genieportal verbindet die Spontaneität von TikTok mit der Effizienz von Tinder – angewandt auf die Jobsuche. Kurze Videos, Swipe-Matching, direkter Chat. So einfach wie nie zuvor.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Und das Beste: Für Bewerber ist alles komplett kostenlos. Immer.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="grid grid-cols-2 gap-4">
                {values.map((v, i) => (
                  <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10">
                    <v.icon className="h-6 w-6 text-violet-400 mb-3" />
                    <h3 className="font-bold text-white text-sm mb-1">{v.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-10 text-center">Unsere Geschichte</h2>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-16 text-right">
                  <span className="text-sm font-bold text-violet-400">{m.year}</span>
                </div>
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 mt-1.5" />
                  {i < milestones.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-px h-full bg-white/10 -translate-x-1/2" />
                  )}
                </div>
                <p className="text-gray-400 pb-4">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white mb-8 text-center">Kontakt & Firmendaten</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Building2 className="h-6 w-6 text-violet-400 mb-3" />
              <h3 className="font-bold text-white mb-2">Butterflies IT UG (haftungsbeschränkt)</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gray-600" />
                  Am Margaretenhof 25, 19057 Schwerin
                </p>
                <p className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-gray-600" />
                  <a href="mailto:ausbildung@genieportal.de" className="hover:text-white transition-colors">ausbildung@genieportal.de</a>
                </p>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <Orbit className="h-6 w-6 text-violet-400 mb-3" />
              <h3 className="font-bold text-white mb-2">Unsere Portale</h3>
              <div className="space-y-1.5 text-sm">
                {[
                  { name: 'Ausbildungsgenie', domain: 'ausbildungsgenie.de' },
                  { name: 'Praktikumsgenie', domain: 'praktikumsgenie.de' },
                  { name: 'Berufsgenie', domain: 'berufsgenie.de' },
                  { name: 'Minijobgenie', domain: 'minijobgenie.de' },
                  { name: 'Werkstudentengenie', domain: 'werkstudentengenie.de' },
                ].map((p) => (
                  <a key={p.domain} href={`https://${p.domain}`} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                    {p.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Lust auf Zusammenarbeit?</h2>
          <p className="text-gray-400 mb-6">Ob als Unternehmen, Partner oder Bewerber – wir freuen uns auf dich.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:from-violet-500 hover:to-pink-500 transition-colors shadow-lg shadow-violet-500/25"
            >
              Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/fuer-unternehmen"
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors border border-white/10"
            >
              Für Unternehmen
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
