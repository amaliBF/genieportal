import {
  Orbit,
  Video,
  Heart,
  MessageCircle,
  Building2,
  Users,
  ArrowRight,
  Check,
  Zap,
  Shield,
  ChevronRight,
  GraduationCap,
  BookOpen,
  Banknote,
  Compass,
  X,
  Clock,
  TrendingUp,
  Search,
  Smartphone,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Genieportal – Recruiting neu gedacht.',
  description:
    '5 Job-Portale. Eine App. Eine Mission. Video-Matching, KI-Jobfinder und direkter Chat für Ausbildung, Praktikum, Beruf, Minijob und Werkstudent.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Genieportal – Recruiting neu gedacht',
    description:
      '5 Job-Portale, eine App, eine Mission. Video-Matching & KI-Jobfinder.',
    url: 'https://genieportal.de',
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
    description: 'Finde deinen Ausbildungsplatz per Swipe',
    angle: -90,
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
    description: 'Praktika & Schnuppertage entdecken',
    angle: -18,
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
    description: 'Festanstellungen & Karriere',
    angle: 54,
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
    description: '520€-Jobs & Nebenjobs finden',
    angle: 126,
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
    description: 'Werkstudentenjobs neben dem Studium',
    angle: 198,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#030014]">
      <Header />

      {/* ═══════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden stars-bg">
        {/* Nebula glows */}
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-8 backdrop-blur-sm">
            <Orbit className="h-4 w-4" />
            <span>Die Recruiting-Revolution</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="text-white">Recruiting </span>
            <span className="gradient-text-genie">neu gedacht.</span>
          </h1>

          <p className="mt-6 text-xl sm:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Nicht Stellenanzeigen lesen.{' '}
            <span className="text-white font-medium">Sondern Menschen kennenlernen.</span>
          </p>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            5 Job-Portale. Eine App. Eine Mission. Video-Matching, KI-Jobfinder und
            direkter Chat – für Ausbildung, Praktikum, Beruf, Minijob und Werkstudent.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/app"
              className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-3.5 text-base font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
            >
              <Smartphone className="h-4 w-4" />
              App entdecken
            </Link>
            <Link
              href="https://dashboard.genieportal.de/register"
              className="rounded-full glass-button px-8 py-3.5 text-base font-medium text-gray-200 flex items-center gap-2"
            >
              <Building2 className="h-4 w-4" />
              Für Unternehmen
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex flex-col items-center gap-2 text-gray-600 text-sm">
            <span>Scrollen und verstehen</span>
            <div className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center p-1.5">
              <div className="w-1 h-2 rounded-full bg-violet-500 animate-bounce" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DAS PROBLEM
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Das Problem mit{' '}
              <span className="text-gray-500">traditionellem Recruiting</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                stat: '73%',
                text: 'der Azubis brechen ab, weil der Job nicht passt',
                source: 'BIBB-Studie 2023',
              },
              {
                stat: '42 Tage',
                text: 'dauert es durchschnittlich bis zur Stellenbesetzung',
                source: 'Stepstone Recruiting Report',
              },
              {
                stat: '67%',
                text: 'der Gen Z informiert sich per Video über Jobs',
                source: 'LinkedIn Learning Report',
              },
              {
                stat: '90%',
                text: 'der Talente sind nur passiv suchend – Stellenanzeigen erreichen sie nicht',
                source: 'Gallup Workplace Report',
              },
            ].map((item) => (
              <div key={item.stat} className="glow-card p-6 sm:p-8 group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                    <X className="h-5 w-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white stat-glow">{item.stat}</p>
                    <p className="text-gray-400 mt-1">{item.text}</p>
                    <p className="text-xs text-gray-600 mt-2">Quelle: {item.source}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-lg text-gray-500 max-w-xl mx-auto">
            Stellenanzeigen sind Monologe.{' '}
            <span className="text-white font-medium">Recruiting sollte ein Dialog sein.</span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DIE LÖSUNG
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-6">
              <Zap className="h-4 w-4" />
              Genie: Der Dialog beginnt
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Drei Ideen. <span className="gradient-text-genie">Eine Revolution.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: 'Video statt Text',
                description:
                  'Betriebe zeigen echten Alltag. Azubis erzählen ihre Geschichte. 30-90 Sekunden, die mehr sagen als jede Stellenanzeige.',
                gradient: 'from-violet-500 to-violet-600',
                glow: 'rgba(139, 92, 246, 0.15)',
              },
              {
                icon: TrendingUp,
                title: 'KI statt Suchen',
                description:
                  'Der KI-Jobfinder versteht was du willst – nicht nur was du suchst. Keine Keywords, sondern echtes Verstehen.',
                gradient: 'from-pink-500 to-rose-600',
                glow: 'rgba(236, 72, 153, 0.15)',
              },
              {
                icon: Heart,
                title: 'Matching statt Bewerben',
                description:
                  'Gegenseitiges Interesse statt einseitige Bewerbung. Wenn beide Seiten wollen, entsteht ein Match.',
                gradient: 'from-cyan-500 to-blue-600',
                glow: 'rgba(6, 182, 212, 0.15)',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="glow-card p-8 text-center group"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                  style={{ boxShadow: `0 0 40px ${item.glow}` }}
                >
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-12 text-lg text-gray-500 max-w-2xl mx-auto">
            Das Ergebnis: Bessere Matches, weniger Abbrüche,{' '}
            <span className="text-white font-medium">zufriedenere Menschen auf beiden Seiten.</span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PLANETEN-VISUALISIERUNG – 5 BEREICHE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="space-divider mb-24" />
        {/* Deep space background */}
        <div className="absolute inset-0 stars-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[150px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ein Universum. <span className="gradient-text-genie">Fünf Welten.</span> Eine App.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Jeder Bereich hat sein eigenes Portal – aber alle teilen eine gemeinsame App,
              ein Dashboard und eine Vision.
            </p>
          </div>

          {/* ── ORBIT ANIMATION (Desktop) ── */}
          <div className="hidden lg:flex justify-center items-center my-16">
            <div className="relative w-[520px] h-[520px]">
              {/* Orbit rings */}
              <div className="absolute inset-0 orbit-ring rounded-full" />
              <div className="absolute inset-10 orbit-ring rounded-full opacity-50" />

              {/* Central element – GENIE APP */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-violet-500/40 pulse-beacon">
                  <div className="text-center text-white">
                    <Orbit className="h-8 w-8 mx-auto" />
                    <p className="text-xs font-bold mt-1 tracking-wider">GENIE APP</p>
                  </div>
                </div>
              </div>

              {/* Rotating container */}
              <div className="absolute inset-0 orbit-container">
                {portals.map((portal) => {
                  const rad = (portal.angle * Math.PI) / 180;
                  const radius = 220;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;

                  return (
                    <a
                      key={portal.id}
                      href={`https://${portal.domain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="orbit-item absolute planet-glow group"
                      style={{
                        top: `calc(50% + ${y}px - 36px)`,
                        left: `calc(50% + ${x}px - 36px)`,
                        width: '72px',
                        height: '72px',
                      }}
                    >
                      <div
                        className={`w-full h-full rounded-full bg-gradient-to-br ${portal.colorClass} flex items-center justify-center ${portal.shadow} shadow-lg`}
                      >
                        <portal.icon className="h-7 w-7 text-white" />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="bg-gray-900/90 backdrop-blur-sm border border-violet-500/20 text-white px-3 py-1.5 rounded-lg text-xs font-medium">
                          {portal.name}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── PORTAL CARDS (visible always, primary on mobile) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8 lg:mt-0">
            {portals.map((portal) => (
              <a
                key={portal.id}
                href={`https://${portal.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card p-5 text-center group hover:border-violet-500/30"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${portal.colorClass} flex items-center justify-center mx-auto mb-3 ${portal.shadow} shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <portal.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-white text-sm">{portal.label}</h3>
                <p className="text-xs text-gray-500 mt-1">{portal.description}</p>
                <span className="inline-flex items-center gap-1 text-violet-400 text-xs mt-3 group-hover:gap-2 transition-all">
                  {portal.domain} <ArrowRight className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          DIE APP
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: App Mockup Area */}
            <div className="relative flex justify-center">
              <div className="relative w-64 h-[480px] rounded-[3rem] bg-gradient-to-b from-gray-900 to-gray-950 border-2 border-violet-500/20 overflow-hidden shadow-2xl shadow-violet-500/10">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#030014] rounded-b-2xl z-10" />
                {/* Screen content */}
                <div className="absolute inset-3 rounded-[2.2rem] bg-gradient-to-b from-violet-950/50 to-[#030014] overflow-hidden">
                  <div className="flex flex-col items-center justify-center h-full px-6 text-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center mb-4">
                      <Orbit className="h-8 w-8 text-white" />
                    </div>
                    <p className="text-white font-bold text-lg">Genie App</p>
                    <p className="text-gray-500 text-xs mt-2">Jobs finden wie du lebst.</p>
                    <div className="mt-8 space-y-3 w-full">
                      <div className="h-2 bg-violet-500/20 rounded-full w-full" />
                      <div className="h-2 bg-pink-500/20 rounded-full w-3/4 mx-auto" />
                      <div className="h-2 bg-violet-500/20 rounded-full w-1/2 mx-auto" />
                    </div>
                    <div className="mt-8 flex gap-4 justify-center">
                      <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                        <X className="h-4 w-4 text-red-400" />
                      </div>
                      <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Heart className="h-4 w-4 text-green-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative glow behind phone */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-600/10 rounded-full blur-[80px] -z-10" />
            </div>

            {/* Right: Content */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-violet-500/10 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-6">
                <Smartphone className="h-4 w-4" />
                Die Genie App
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Jobs finden wie du lebst.
              </h2>
              <p className="text-gray-400 mb-8">
                Eine App für alle fünf Bereiche. Swipe durch Kurzvideos, lass dich vom
                KI-Jobfinder beraten und chatte direkt mit Unternehmen.
              </p>

              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Profil erstellen',
                    text: 'Sag uns wer du bist und was du suchst – oder lass dir vom KI-Jobfinder helfen.',
                  },
                  {
                    step: '02',
                    title: 'Swipen statt Suchen',
                    text: 'Schau dir Videos an, lern Betriebe kennen, zeig Interesse.',
                  },
                  {
                    step: '03',
                    title: 'Matchen & Chatten',
                    text: 'Wenn beide Seiten interessiert sind, öffnet sich der Chat.',
                  },
                  {
                    step: '04',
                    title: 'Kennenlernen',
                    text: 'Praktikum, Probearbeiten oder direkt Vertrag – ihr entscheidet.',
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-violet-500/20 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-gray-500 mt-0.5">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/app"
                  className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-6 py-3 text-sm font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25 flex items-center gap-2"
                >
                  Mehr zur App
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          KI-JOBFINDER
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-950/20 via-transparent to-transparent" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Der <span className="gradient-text-genie">KI-Jobfinder</span>
            </h2>
            <p className="text-xl text-gray-400">
              Du weißt nicht genau was du willst? Kein Problem. Erzähl uns von dir.
            </p>
          </div>

          {/* Chat simulation */}
          <div className="max-w-2xl mx-auto glow-card p-8 sm:p-10">
            {/* User message */}
            <div className="flex justify-end mb-6">
              <div className="bg-violet-600/20 border border-violet-500/30 rounded-2xl rounded-br-md px-5 py-3 max-w-sm">
                <p className="text-sm text-gray-200 italic">
                  &ldquo;Ich arbeite gern mit meinen Händen, bin lieber draußen als drinnen,
                  und Mathe war nie mein Ding.&rdquo;
                </p>
              </div>
            </div>

            {/* Divider with arrow */}
            <div className="flex items-center justify-center my-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <ChevronRight className="h-4 w-4 text-white rotate-90" />
              </div>
            </div>

            {/* AI response */}
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-md px-5 py-4 max-w-sm">
                <p className="text-sm text-gray-300 mb-3">
                  Basierend auf deinen Angaben könnte passen:
                </p>
                <div className="space-y-2">
                  {[
                    { job: 'Gärtner/in', match: '87%' },
                    { job: 'Dachdecker/in', match: '82%' },
                    { job: 'Straßenbauer/in', match: '79%' },
                  ].map((r) => (
                    <div key={r.job} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-white">{r.job}</span>
                      </div>
                      <span className="text-xs font-semibold text-violet-400">{r.match}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-center mt-10 text-gray-500">
            Nicht Algorithmen die Klicks zählen.{' '}
            <span className="text-white font-medium">Sondern KI die versteht.</span>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FÜR UNTERNEHMEN
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Für Unternehmen
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Erreichen Sie die, die Sie nicht erreichen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Smartphone,
                title: 'Gen Z erreichen',
                description:
                  'Gen Z ist nicht auf Jobbörsen. Sie sind in Apps. Wir auch.',
                gradient: 'from-violet-500 to-violet-600',
              },
              {
                icon: Video,
                title: 'Video statt Wall of Text',
                description:
                  'Ein Video sagt mehr als 1.000 Bullet Points. Zeigen Sie sich authentisch.',
                gradient: 'from-pink-500 to-rose-600',
              },
              {
                icon: Shield,
                title: 'Fair bezahlt',
                description:
                  'Keine Kosten pro Klick oder Bewerbung. Faire Monatspakete mit planbaren Kosten.',
                gradient: 'from-cyan-500 to-blue-600',
              },
            ].map((item) => (
              <div key={item.title} className="glow-card p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} text-white mb-5 shadow-lg`}
                >
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="glow-card p-8 sm:p-10 max-w-3xl mx-auto text-center">
            <p className="text-gray-300 leading-relaxed italic">
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

          <div className="text-center mt-10">
            <Link
              href="https://dashboard.genieportal.de/register"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-8 py-3.5 text-base font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25"
            >
              Jetzt kostenlos starten
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ZAHLEN & FAKTEN
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="space-divider mb-24" />
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
            In Zahlen
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '5', label: 'Job-Portale', suffix: '', icon: Orbit },
              { value: '1', label: 'App für alles', suffix: '', icon: Smartphone },
              { value: '5', label: 'Bereiche', suffix: '', icon: Users },
              { value: '<14', label: 'Tage bis Match', suffix: '', icon: Clock },
            ].map((stat) => (
              <div key={stat.label} className="glow-card p-6 sm:p-8 text-center">
                <stat.icon className="h-6 w-6 text-violet-400 mx-auto mb-3" />
                <p className="text-3xl sm:text-4xl font-bold text-white stat-glow">
                  {stat.value}
                  {stat.suffix && <span className="text-violet-400">{stat.suffix}</span>}
                </p>
                <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="space-divider mb-28" />
        {/* Background effects */}
        <div className="absolute inset-0 stars-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/8 rounded-full blur-[150px]" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Bereit, Recruiting{' '}
            <span className="gradient-text-genie">neu zu denken?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Ob du einen Job suchst oder Talente finden willst – Genieportal
            ist für beide Seiten gemacht.
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
              href="https://dashboard.genieportal.de/register"
              className="rounded-full glass-button px-8 py-4 text-base font-medium text-gray-200 flex items-center gap-2"
            >
              <Building2 className="h-5 w-5" />
              Als Unternehmen registrieren
            </Link>
          </div>

          {/* Portal links */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3">
            {portals.map((portal) => (
              <a
                key={portal.id}
                href={`https://${portal.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-gray-400 hover:text-white hover:bg-white/10 text-xs transition-colors"
              >
                <portal.icon className="h-3.5 w-3.5" />
                {portal.domain}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
