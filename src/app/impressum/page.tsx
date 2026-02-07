import type { Metadata } from 'next';
import { Scale, FileText, Mail, Phone, Building2, Globe, AlertTriangle, ExternalLink } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Impressum',
  description:
    'Impressum der Butterflies IT UG (haftungsbeschrankt) - Betreiber von Genieportal, dem Genie-Universum fur Video-Matching und KI-Jobfinder.',
  alternates: { canonical: '/impressum' },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#030014]">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden stars-bg">
        <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-40 w-[300px] h-[300px] bg-pink-600/8 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-6 backdrop-blur-sm">
            <Scale className="h-4 w-4" />
            <span>Rechtliches</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Impressum
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Angaben gemaess den gesetzlichen Bestimmungen
          </p>
        </div>
      </section>

      <div className="space-divider" />

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Angaben gemaess DDG */}
          <div className="glow-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Angaben gem&auml;&szlig; &sect; 5 DDG
              </h2>
            </div>
            <div className="space-y-1 text-gray-300 leading-relaxed">
              <p className="font-semibold text-white">Butterflies IT UG (haftungsbeschr&auml;nkt)</p>
              <p>Hagenower Str. 73</p>
              <p>19061 Schwerin</p>
              <p className="pt-3">
                <span className="text-gray-500">Vertreten durch:</span>
              </p>
              <p>Gesch&auml;ftsf&uuml;hrer Ahmad Ali</p>
            </div>
          </div>

          {/* Kontakt */}
          <div className="glow-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <Mail className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Kontakt</h2>
            </div>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-violet-400 flex-shrink-0" />
                <span>Telefon: +49 (0) 385 20 888 200</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-violet-400 flex-shrink-0" />
                <span>
                  E-Mail:{' '}
                  <a
                    href="mailto:kontakt@genieportal.de"
                    className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
                  >
                    kontakt@genieportal.de
                  </a>
                </span>
              </p>
            </div>
          </div>

          {/* Umsatzsteuer-ID */}
          <div className="glow-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Umsatzsteuer-ID</h2>
            </div>
            <div className="text-gray-300 space-y-1">
              <p>
                Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27a
                Umsatzsteuergesetz:
              </p>
              <p className="font-semibold text-white">DE364877299</p>
            </div>
          </div>

          {/* Handelsregister */}
          <div className="glow-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <Scale className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Handelsregister</h2>
            </div>
            <div className="text-gray-300 space-y-1">
              <p>Eintragung im Handelsregister.</p>
              <p>
                <span className="text-gray-500">Registergericht:</span>{' '}
                Amtsgericht Schwerin
              </p>
              <p>
                <span className="text-gray-500">Registernummer:</span>{' '}
                <span className="font-semibold text-white">HRB 14233</span>
              </p>
            </div>
          </div>

          {/* Verantwortlich fuer den Inhalt */}
          <div className="glow-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Verantwortlich f&uuml;r den Inhalt nach &sect; 18 Abs. 2 MStV
              </h2>
            </div>
            <div className="text-gray-300 space-y-1">
              <p className="font-semibold text-white">Ahmad Ali</p>
              <p>Hagenower Str. 73</p>
              <p>19061 Schwerin</p>
            </div>
          </div>

          {/* EU-Streitschlichtung */}
          <div className="glow-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">EU-Streitschlichtung</h2>
            </div>
            <div className="text-gray-300 space-y-3 leading-relaxed">
              <p>
                Die Europ&auml;ische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{' '}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2 inline-flex items-center gap-1"
                >
                  https://ec.europa.eu/consumers/odr/
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
              <p>
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>
          </div>

          {/* Verbraucherstreitbeilegung */}
          <div className="glow-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <Scale className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">
                Verbraucherstreitbeilegung / Universalschlichtungsstelle
              </h2>
            </div>
            <div className="text-gray-300 leading-relaxed">
              <p>
                Wir sind nicht bereit oder verpflichtet, an
                Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                teilzunehmen.
              </p>
            </div>
          </div>

          {/* Haftungsausschluss */}
          <div className="glow-card p-8 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Haftungsausschluss</h2>
            </div>

            <div className="space-y-8">
              {/* Haftung fuer Inhalte */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Haftung f&uuml;r Inhalte
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs. 1 DDG
                  f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
                  Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 DDG sind wir
                  als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte
                  oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach
                  Umst&auml;nden zu forschen, die auf eine rechtswidrige
                  T&auml;tigkeit hinweisen.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                  Informationen nach den allgemeinen Gesetzen bleiben hiervon
                  unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
                  dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
                  m&ouml;glich. Bei Bekanntwerden von entsprechenden
                  Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              {/* Haftung fuer Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Haftung f&uuml;r Links
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
                  f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr
                  &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist
                  stets der jeweilige Anbieter oder Betreiber der Seiten
                  verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
                  Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
                  &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                  Verlinkung nicht erkennbar.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                  jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                  zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                  derartige Links umgehend entfernen.
                </p>
              </div>

              {/* Urheberrecht */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">Urheberrecht</h3>
                <p className="text-gray-300 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
                  bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors
                  bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r
                  den privaten, nicht kommerziellen Gebrauch gestattet.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                  wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                  werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                  trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
                  wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                  Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="space-divider" />

      <Footer />
    </div>
  );
}
