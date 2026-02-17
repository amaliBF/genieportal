import { Metadata } from 'next';
import Link from 'next/link';
import {
  Smartphone, Video, Heart, MessageCircle, Sparkles, Shield,
  ArrowRight, ChevronRight, GraduationCap, ClipboardCheck, Compass, Banknote, BookOpen, Zap, Check,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Für Bewerber – Finde deinen Traumjob | Genieportal',
  description: 'Die Genie App verbindet dich per Video, Swipe-Matching und KI-Berufsfinder mit Arbeitgebern. 5 Portale, eine App. Kostenlos für iOS & Android.',
  openGraph: {
    title: 'Für Bewerber – Finde deinen Traumjob',
    description: 'Video-Stellen, Swipe-Matching, KI-Berufsfinder. 5 Portale in einer App.',
  },
};

const portals = [
  { name: 'Ausbildungsgenie', desc: 'Du suchst einen Ausbildungsplatz? Hier findest du Betriebe, die ausbilden – mit Videos und direktem Chat.', icon: GraduationCap, color: 'from-violet-600 to-pink-600', domain: 'ausbildungsgenie.de', target: 'Schüler & Schulabgänger' },
  { name: 'Praktikumsgenie', desc: 'Schülerpraktikum, Pflichtpraktikum oder freiwilliges Praktikum – finde den passenden Betrieb in deiner Nähe.', icon: ClipboardCheck, color: 'from-rose-500 to-pink-600', domain: 'praktikumsgenie.de', target: 'Schüler & Studierende' },
  { name: 'Berufsgenie', desc: 'Vollzeit- und Teilzeitstellen in allen Branchen. Für alle, die einen festen Job suchen.', icon: Compass, color: 'from-amber-500 to-orange-600', domain: 'berufsgenie.de', target: 'Berufstätige & Quereinsteiger' },
  { name: 'Minijobgenie', desc: 'Flexible Minijobs und Aushilfsstellen in deiner Umgebung. Perfekt für Nebenverdienst.', icon: Banknote, color: 'from-emerald-500 to-green-600', domain: 'minijobgenie.de', target: 'Alle, die flexibel dazuverdienen wollen' },
  { name: 'Werkstudentengenie', desc: 'Werkstudentenstellen neben dem Studium. Praxiserfahrung sammeln und Geld verdienen.', icon: BookOpen, color: 'from-cyan-600 to-teal-600', domain: 'werkstudentengenie.de', target: 'Studierende' },
];

const benefits = [
  { icon: Video, title: 'Echte Videos statt Textwüsten', desc: 'Sieh dir Arbeitgeber in echten Video-Stellenanzeigen an – authentisch und ehrlich.' },
  { icon: Heart, title: 'Swipe-Matching', desc: 'Swipe nach rechts, wenn ein Arbeitgeber passt. Bei gegenseitigem Interesse entsteht ein Match.' },
  { icon: MessageCircle, title: 'Direkter Chat', desc: 'Chatte nach dem Match direkt mit dem Arbeitgeber – ohne Bewerbungsportale und Wartezeiten.' },
  { icon: Sparkles, title: 'KI-Berufsfinder', desc: 'Weißt du noch nicht, was du machen willst? Unser KI-Assistent hilft dir bei der Berufswahl.' },
  { icon: Shield, title: '100% kostenlos & sicher', desc: 'Die App ist für Bewerber komplett kostenlos. Deine Daten sind DSGVO-konform geschützt.' },
  { icon: Smartphone, title: '5 Portale, eine App', desc: 'Ausbildung, Praktikum, Minijob, Werkstudent, Beruf – alles in einer App vereint.' },
];

export default function FuerBewerberPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://genieportal.de' },
      { '@type': 'ListItem', position: 2, name: 'Für Bewerber' },
    ],
  };

  return (
    <>
    <Header />
    <main className="min-h-screen bg-[#030014]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <nav className="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1 justify-center">
                <li><Link href="/" className="hover:text-violet-400 transition-colors">Home</Link></li>
                <li className="text-gray-600">/</li>
                <li className="text-violet-400 font-medium">Für Bewerber</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-sm text-violet-300 mb-6">
              <Zap className="h-4 w-4 text-yellow-400" />
              Kostenlos für alle Bewerber
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Dein nächster Job.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">So einfach wie nie.</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
              Die Genie App verbindet dich per Video-Stellenanzeigen, Swipe-Matching und KI-Berufsfinder mit den besten Arbeitgebern. Egal ob Ausbildung, Praktikum, Minijob oder Vollzeit.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/app"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:from-violet-500 hover:to-pink-500 transition-colors shadow-lg shadow-violet-500/25"
              >
                <Smartphone className="h-5 w-5" />
                Zur App
              </Link>
              <Link
                href="/bereiche"
                className="inline-flex items-center justify-center gap-2 bg-white/5 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors border border-white/10"
              >
                Portale entdecken
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Warum die Genie App?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Jobsuche war noch nie so einfach – und so unterhaltsam.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                  <b.icon className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Which portal for whom */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Welches Portal passt zu dir?</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">5 spezialisierte Portale – finde das richtige für deine Situation.</p>
          </div>
          <div className="space-y-4">
            {portals.map((p, i) => {
              const Icon = p.icon;
              return (
                <a
                  key={i}
                  href={`https://${p.domain}`}
                  className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all group"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center shrink-0`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-white">{p.name}</h3>
                      <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">{p.target}</span>
                    </div>
                    <p className="text-sm text-gray-400">{p.desc}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors shrink-0 mt-3" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* KI Berufsfinder Teaser */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="h-12 w-12 text-violet-400 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white mb-4">Noch unsicher?<br />Der KI-Berufsfinder hilft.</h2>
          <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto">
            Beantworte 20 kurze Fragen und unser KI-Assistent empfiehlt dir Berufe, die zu deinen Interessen und Stärken passen. In nur 5 Minuten.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Persönlichkeitsanalyse', 'Top 3 Berufsempfehlungen', 'Passende Stellen', 'Kostenlos'].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 bg-violet-500/10 border border-violet-500/20 text-violet-300 px-3 py-1.5 rounded-full text-sm">
                <Check className="h-3.5 w-3.5" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Bereit loszulegen?</h2>
          <p className="text-lg text-gray-400 mb-8">Die Genie App kommt bald – kostenlos für iOS & Android.</p>
          <Link
            href="/app"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:from-violet-500 hover:to-pink-500 transition-colors shadow-lg shadow-violet-500/25"
          >
            <Smartphone className="h-5 w-5" />
            Mehr zur App erfahren
          </Link>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
