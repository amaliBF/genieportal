import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Users, Building2, Settings, ArrowRight, Mail } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Hilfe & FAQ – Antworten auf deine Fragen | Genieportal',
  description: 'Häufige Fragen und Antworten zu Genieportal, der Genie App, deinem Konto und für Unternehmen. Finde schnell die Hilfe, die du brauchst.',
  openGraph: {
    title: 'Hilfe & FAQ – Genieportal',
    description: 'Finde Antworten auf häufige Fragen zu Genieportal und der Genie App.',
  },
};

const bewerberFaqs = [
  { q: 'Ist Genieportal kostenlos?', a: 'Ja, alle Genie-Portale und die Genie App sind für Bewerber komplett kostenlos. Es gibt keine versteckten Kosten und kein Abo.' },
  { q: 'Wie erstelle ich ein Profil?', a: 'Lade die Genie App herunter und erstelle in wenigen Minuten dein Profil. Du brauchst nur eine E-Mail-Adresse, deinen Namen und deine Interessen.' },
  { q: 'Wie funktioniert das Swipe-Matching?', a: 'Du siehst Video-Stellenanzeigen und swipest nach rechts (gefällt mir) oder links (nicht interessiert). Wenn auch der Arbeitgeber dich spannend findet, entsteht ein Match und ihr könnt im Chat schreiben.' },
  { q: 'Welches Portal ist das richtige für mich?', a: 'Ausbildungsgenie für Ausbildungsplätze, Praktikumsgenie für Praktika, Berufsgenie für Vollzeitstellen, Minijobgenie für Minijobs und Werkstudentengenie für Werkstudentenstellen. In der App hast du Zugriff auf alle 5 Portale.' },
  { q: 'Kann ich mein Profil löschen?', a: 'Ja, du kannst dein Profil jederzeit in den Einstellungen der App löschen. Alle deine Daten werden dann unwiderruflich gelöscht (DSGVO-konform).' },
  { q: 'Wie bewerbe ich mich auf eine Stelle?', a: 'Nach einem Match kannst du direkt im Chat mit dem Arbeitgeber schreiben. Auf den Portal-Websites kannst du dich auch über das Bewerbungsformular auf der Stellen-Detailseite bewerben.' },
];

const unternehmenFaqs = [
  { q: 'Was kostet Genieportal für Unternehmen?', a: 'Wir bieten verschiedene Preismodelle an – vom kostenlosen Starter-Paket bis zum Enterprise-Plan. Details findest du auf unserer Preisseite oder unter „Für Unternehmen".' },
  { q: 'Wie erstelle ich eine Stellenanzeige?', a: 'Registriere dich im Dashboard (dashboard.genieportal.de), erstelle dein Firmenprofil und veröffentliche deine erste Stellenanzeige mit Video. Unser Team hilft dir gerne beim Onboarding.' },
  { q: 'Kann ich Stellenanzeigen auf mehreren Portalen veröffentlichen?', a: 'Ja! Im Dashboard kannst du für jede Stelle auswählen, auf welchen Portalen sie erscheinen soll. So erreichst du genau die richtige Zielgruppe.' },
  { q: 'Brauche ich ein professionelles Video?', a: 'Nein! Authentische Videos mit dem Smartphone funktionieren oft besser als hochproduzierte Filme. Wir geben dir Tipps für gute Videos in unserem Dashboard.' },
  { q: 'Wie funktioniert die Abrechnung?', a: 'Wir bieten monatliche und jährliche Abrechnungen per Kreditkarte oder PayPal an. Enterprise-Kunden können auch per Rechnung zahlen.' },
];

const techFaqs = [
  { q: 'Auf welchen Geräten läuft die App?', a: 'Die Genie App ist für iPhone (iOS 15+) und Android (Version 10+) verfügbar. Eine Tablet-Version ist in Planung.' },
  { q: 'Gibt es eine API für Entwickler?', a: 'Ja, wir bieten eine Public API für Unternehmen an. Damit können Sie Stellenanzeigen automatisiert verwalten und in Ihre Website einbinden. Dokumentation finden Sie im Dashboard unter „Einstellungen > API".' },
  { q: 'Werden meine Daten sicher gespeichert?', a: 'Alle Daten werden auf Servern in Deutschland gespeichert und sind vollständig DSGVO-konform. Wir nutzen Verschlüsselung für alle Übertragungen und speichern keine unnötigen Daten.' },
  { q: 'Kann ich Genieportal in meine Website einbinden?', a: 'Ja! Mit unserem Embed-SDK können Unternehmen Stellenanzeigen, Job-Listen und Bewerbungsformulare direkt auf ihrer eigenen Website einbinden.' },
];

function FAQSection({ title, icon: Icon, faqs, color }: { title: string; icon: any; faqs: { q: string; a: string }[]; color: string }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-white hover:bg-white/5">
              {faq.q}
              <ChevronRight className="h-5 w-5 text-gray-500 group-open:rotate-90 transition-transform shrink-0 ml-2" />
            </summary>
            <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function HilfePage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://genieportal.de' },
      { '@type': 'ListItem', position: 2, name: 'Hilfe & FAQ' },
    ],
  };

  return (
    <>
    <Header />
    <main className="min-h-screen bg-[#030014]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-transparent to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-gray-400 mb-4" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1 justify-center">
              <li><Link href="/" className="hover:text-violet-400 transition-colors">Home</Link></li>
              <li className="text-gray-600">/</li>
              <li className="text-violet-400 font-medium">Hilfe & FAQ</li>
            </ol>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Hilfe & FAQ
          </h1>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Finde Antworten auf häufige Fragen – oder kontaktiere uns direkt.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <FAQSection
            title="Für Bewerber"
            icon={Users}
            faqs={bewerberFaqs}
            color="bg-gradient-to-br from-violet-600 to-pink-600"
          />
          <FAQSection
            title="Für Unternehmen"
            icon={Building2}
            faqs={unternehmenFaqs}
            color="bg-gradient-to-br from-amber-500 to-orange-600"
          />
          <FAQSection
            title="Technisches"
            icon={Settings}
            faqs={techFaqs}
            color="bg-gradient-to-br from-cyan-600 to-teal-600"
          />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Mail className="h-10 w-10 text-violet-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-3">Frage nicht dabei?</h2>
          <p className="text-gray-400 mb-6">Kontaktiere uns – wir helfen dir gerne weiter.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold px-8 py-3.5 rounded-xl hover:from-violet-500 hover:to-pink-500 transition-colors shadow-lg shadow-violet-500/25"
            >
              Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="mailto:ausbildung@genieportal.de"
              className="inline-flex items-center justify-center gap-2 bg-white/5 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors border border-white/10"
            >
              <Mail className="h-4 w-4" />
              ausbildung@genieportal.de
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
