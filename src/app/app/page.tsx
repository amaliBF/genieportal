import { Metadata } from 'next';
import Link from 'next/link';
import {
  Smartphone, Play, MessageCircle, Sparkles, Bell, Heart,
  ChevronRight, Shield, Zap, Video,
} from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AppNotifyForm from '../../components/AppNotifyForm';

export const metadata: Metadata = {
  title: 'Die Genie App – Alle Portale in einer App | Genieportal',
  description: 'Die Genie App vereint Ausbildung, Praktikum, Minijob, Werkstudentenstellen und Berufe in einer App. Swipe-Matching, Video-Stellen, KI-Berufsfinder. Kostenlos für iOS & Android.',
  openGraph: {
    title: 'Die Genie App – Alle Portale in einer App',
    description: 'Ausbildung, Praktikum, Minijob, Werkstudent – alle Genie-Portale in einer App.',
  },
};

const features = [
  {
    icon: Video,
    title: 'Video-Stellenanzeigen',
    description: 'Erlebe Arbeitgeber hautnah – mit echten Videos statt langweiliger Texte.',
  },
  {
    icon: Heart,
    title: 'Swipe-Matching',
    description: 'Swipe nach rechts, wenn dir ein Arbeitgeber gefällt. Bei gegenseitigem Interesse entsteht ein Match.',
  },
  {
    icon: MessageCircle,
    title: 'Direkt-Chat',
    description: 'Chatte direkt mit Arbeitgebern – ohne Umwege über Bewerbungsportale.',
  },
  {
    icon: Sparkles,
    title: 'KI-Berufsfinder',
    description: 'Unser KI-Assistent hilft dir, den perfekten Job zu finden – basierend auf deinen Interessen.',
  },
  {
    icon: Bell,
    title: 'Push-Benachrichtigungen',
    description: 'Erhalte sofort eine Nachricht, wenn neue passende Stellen online gehen.',
  },
  {
    icon: Shield,
    title: 'Datenschutz',
    description: 'Deine Daten gehören dir. DSGVO-konform und Server in Deutschland.',
  },
];

const portals = [
  { name: 'Ausbildungsgenie', desc: 'Ausbildungsplätze finden', color: 'from-violet-600 to-pink-600', emoji: '🎓' },
  { name: 'Praktikumsgenie', desc: 'Praktika entdecken', color: 'from-rose-500 to-pink-600', emoji: '🔧' },
  { name: 'Berufsgenie', desc: 'Stellenangebote durchsuchen', color: 'from-amber-500 to-orange-600', emoji: '📚' },
  { name: 'Minijobgenie', desc: 'Minijobs in der Nähe', color: 'from-emerald-500 to-green-600', emoji: '💰' },
  { name: 'Werkstudentengenie', desc: 'Werkstudentenstellen', color: 'from-cyan-600 to-teal-600', emoji: '🎓' },
];

const steps = [
  {
    step: '1',
    title: 'Profil erstellen',
    description: 'Erstelle in 2 Minuten dein Profil mit deinen Interessen und Wünschen.',
  },
  {
    step: '2',
    title: 'Portal wählen',
    description: 'Wähle zwischen Ausbildung, Praktikum, Minijob, Werkstudent oder Beruf.',
  },
  {
    step: '3',
    title: 'Videos ansehen & swipen',
    description: 'Scrolle durch Video-Stellenanzeigen und swipe bei Interesse nach rechts.',
  },
  {
    step: '4',
    title: 'Match & Chat',
    description: 'Bei gegenseitigem Interesse entsteht ein Match und ihr könnt direkt chatten.',
  },
];

const faqs = [
  {
    q: 'Ist die App kostenlos?',
    a: 'Ja, die Genie App ist für Bewerber komplett kostenlos. Keine versteckten Kosten, kein Abo.',
  },
  {
    q: 'Für welche Geräte ist die App verfügbar?',
    a: 'Die Genie App gibt es für iPhone (iOS) und Android-Smartphones. Tablet-Unterstützung folgt.',
  },
  {
    q: 'Sind alle Portale in einer App?',
    a: 'Ja! Ausbildungsgenie, Praktikumsgenie, Berufsgenie, Minijobgenie und Werkstudentengenie – alles in einer App vereint.',
  },
  {
    q: 'Wie funktioniert das Matching?',
    a: 'Du siehst Video-Stellenanzeigen und swipest nach rechts oder links. Wenn auch der Arbeitgeber dich spannend findet, entsteht ein Match und ihr könnt chatten.',
  },
  {
    q: 'Werden meine Daten sicher gespeichert?',
    a: 'Ja, alle Daten werden DSGVO-konform auf Servern in Deutschland gespeichert. Du kannst dein Profil jederzeit löschen.',
  },
];

export default function AppPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://genieportal.de' },
      { '@type': 'ListItem', position: 2, name: 'Die Genie App' },
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDJ2LTJoMzR6TTAgMzR2Mkg0djJIMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="text-center lg:text-left mb-10 lg:mb-0">
              <nav className="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-1 justify-center lg:justify-start">
                  <li><Link href="/" className="hover:text-violet-400 transition-colors">Home</Link></li>
                  <li className="text-gray-600">/</li>
                  <li className="text-violet-400 font-medium">Die Genie App</li>
                </ol>
              </nav>
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 text-sm text-violet-300 mb-6">
                <Zap className="h-4 w-4 text-yellow-400" />
                Bald verfügbar für iOS & Android
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                Alle Portale.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Eine App.</span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 max-w-lg">
                Die Genie App vereint Ausbildung, Praktikum, Minijob, Werkstudent und Beruf in einer App. Video-Stellen, Swipe-Matching, KI-Berufsfinder – alles drin.
              </p>

              {/* Newsletter – App kommt bald */}
              <div className="max-w-md">
                <AppNotifyForm variant="inline" />
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-[580px]">
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] shadow-2xl shadow-violet-500/10 border-4 border-gray-800">
                  <div className="absolute inset-3 bg-gradient-to-b from-violet-600 to-purple-900 rounded-[2.2rem] overflow-hidden">
                    <div className="flex justify-between items-center px-6 pt-3 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/60 rounded-sm" />
                        <div className="w-4 h-2 bg-white/60 rounded-sm" />
                        <div className="w-6 h-3 bg-white/60 rounded-sm" />
                      </div>
                    </div>
                    <div className="px-4 pt-6">
                      <div className="text-white text-center mb-4">
                        <div className="text-lg font-bold">Entdecken</div>
                      </div>
                      <div className="bg-white/10 backdrop-blur rounded-2xl p-4 mb-3">
                        <div className="w-full h-40 bg-white/5 rounded-xl flex items-center justify-center mb-3">
                          <Play className="h-12 w-12 text-white/60" />
                        </div>
                        <div className="text-white font-semibold text-sm">Ausbildung zum Fachinformatiker</div>
                        <div className="text-white/60 text-xs mt-1">Tech GmbH · Berlin</div>
                      </div>
                      <div className="flex justify-center gap-4 pt-2">
                        <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center">
                          <svg className="h-6 w-6 text-red-400" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                        </div>
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                          <Heart className="h-6 w-6 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portals */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">5 Portale – eine App</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Egal ob Ausbildung, Praktikum, Minijob, Werkstudentenstelle oder Vollzeitjob – die Genie App hat alles.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {portals.map((p, i) => (
              <div key={i} className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-center">
                <div className="text-3xl mb-3">{p.emoji}</div>
                <h3 className="font-bold text-white text-sm mb-1">{p.name}</h3>
                <p className="text-xs text-gray-500">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Alles, was du brauchst
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Die Genie App vereint alles in einer Anwendung – von der Stellensuche bis zum Vorstellungsgespräch.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-violet-500/30 hover:bg-white/[0.07] transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:from-violet-500/30 group-hover:to-pink-500/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">
              So funktioniert&apos;s
            </h2>
            <p className="text-lg text-gray-400">In 4 einfachen Schritten zum Traumjob</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg shadow-violet-500/20">
                  {step.step}
                </div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.description}</p>
                {i < steps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-7 -right-3 h-5 w-5 text-gray-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter – Benachrichtigung wenn App verfügbar */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppNotifyForm
            variant="section"
            title="Als Erstes erfahren, wenn die App da ist"
            description="Trag dich ein und wir benachrichtigen dich, sobald die Genie App im App Store und bei Google Play verfügbar ist."
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-white mb-4">Häufige Fragen</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white/5 rounded-xl border border-white/10 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-white hover:bg-white/5">
                  {faq.q}
                  <ChevronRight className="h-5 w-5 text-gray-500 group-open:rotate-90 transition-transform" />
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA – App kommt bald */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-xl mx-auto px-4 text-center">
          <AppNotifyForm
            variant="banner"
            title="Bereit für deinen Traumjob?"
            description="Die Genie App kommt bald. Trag dich ein und sei unter den Ersten, die sie nutzen."
          />
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
