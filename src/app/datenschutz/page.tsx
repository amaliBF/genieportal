import type { Metadata } from 'next';
import { Shield, FileText, Server, Cookie, Lock, Mail, Eye, Database } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'Datenschutz',
  description:
    'Datenschutzerklaerung der Butterflies IT UG (haftungsbeschraenkt) - Informationen zum Datenschutz auf Genieportal gemaess DSGVO.',
  alternates: { canonical: '/datenschutz' },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#030014]">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden stars-bg">
        <div className="absolute top-20 -right-40 w-[400px] h-[400px] bg-violet-600/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-40 w-[300px] h-[300px] bg-pink-600/8 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-6 backdrop-blur-sm">
            <Shield className="h-4 w-4" />
            <span>Datenschutz</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Datenschutzerkl&auml;rung
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Informationen zum Schutz Ihrer personenbezogenen Daten
          </p>
        </div>
      </section>

      <div className="space-divider" />

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glow-card p-8 sm:p-10">
            <div className="space-y-12">

              {/* 1. Datenschutz auf einen Blick */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    1. Datenschutz auf einen Blick
                  </h2>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Allgemeine Hinweise
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Die folgenden Hinweise geben einen einfachen &Uuml;berblick
                  dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle Daten,
                  mit denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
                  Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
                  unserer unter diesem Text aufgef&uuml;hrten
                  Datenschutzerkl&auml;rung.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Datenerfassung auf dieser Website
                </h3>
                <h4 className="text-base font-medium text-violet-300 mb-2">
                  Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
                  Website?
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Die Datenverarbeitung auf dieser Website erfolgt durch den
                  Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
                  &bdquo;Hinweis zur verantwortlichen Stelle&ldquo; in dieser
                  Datenschutzerkl&auml;rung entnehmen.
                </p>

                <h4 className="text-base font-medium text-violet-300 mb-2">
                  Wie erfassen wir Ihre Daten?
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                  mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
                  in ein Kontaktformular eingeben. Andere Daten werden automatisch oder
                  nach Ihrer Einwilligung beim Besuch der Website durch unsere
                  IT-Systeme erfasst. Das sind vor allem technische Daten (z.&nbsp;B.
                  Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
                  Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website
                  betreten.
                </p>

                <h4 className="text-base font-medium text-violet-300 mb-2">
                  Wof&uuml;r nutzen wir Ihre Daten?
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
                  der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
                  Analyse Ihres Nutzerverhaltens verwendet werden.
                </p>

                <h4 className="text-base font-medium text-violet-300 mb-2">
                  Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
                  Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
                  personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
                  Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
                  verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt
                  haben, k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die
                  Zukunft widerrufen. Au&szlig;erdem haben Sie das Recht, unter
                  bestimmten Umst&auml;nden die Einschr&auml;nkung der Verarbeitung
                  Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen
                  ein Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
                  zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                  k&ouml;nnen Sie sich jederzeit an uns wenden.
                </p>
              </div>

              <div className="space-divider" />

              {/* 2. Verantwortliche Stelle */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    2. Verantwortliche Stelle
                  </h2>
                </div>
                <div className="text-gray-300 leading-relaxed space-y-1 mb-4">
                  <p className="font-semibold text-white">
                    Butterflies IT UG (haftungsbeschr&auml;nkt)
                  </p>
                  <p>Hagenower Str. 73</p>
                  <p>19061 Schwerin</p>
                </div>
                <div className="text-gray-300 space-y-1 mb-4">
                  <p>
                    <span className="text-gray-500">Vertreten durch:</span>{' '}
                    Gesch&auml;ftsf&uuml;hrer Ahmad Ali
                  </p>
                  <p>
                    <span className="text-gray-500">Telefon:</span> +49 (0) 385 20 888
                    200
                  </p>
                  <p>
                    <span className="text-gray-500">E-Mail:</span>{' '}
                    <a
                      href="mailto:kontakt@genieportal.de"
                      className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
                    >
                      kontakt@genieportal.de
                    </a>
                  </p>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
                  Person, die allein oder gemeinsam mit anderen &uuml;ber die Zwecke
                  und Mittel der Verarbeitung von personenbezogenen Daten (z.&nbsp;B.
                  Namen, E-Mail-Adressen o.&nbsp;&Auml;.) entscheidet.
                </p>
              </div>

              <div className="space-divider" />

              {/* 3. Hosting */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                    <Server className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">3. Hosting</h2>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">IONOS</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Wir hosten unsere Website bei IONOS SE. Anbieter ist die IONOS SE,
                  Elgendorfer Str. 57, 56410 Montabaur (nachfolgend IONOS). Wenn Sie
                  unsere Website besuchen, erfasst IONOS verschiedene Logfiles
                  inklusive Ihrer IP-Adressen. Details entnehmen Sie der
                  Datenschutzerkl&auml;rung von IONOS:{' '}
                  <a
                    href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 transition-colors underline underline-offset-2"
                  >
                    https://www.ionos.de/terms-gtc/datenschutzerklaerung/
                  </a>
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Die Verwendung von IONOS erfolgt auf Grundlage von Art. 6 Abs. 1
                  lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
                  m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website.
                  Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die
                  Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6 Abs. 1
                  lit. a DSGVO und &sect; 25 Abs. 1 TDDDG, soweit die Einwilligung die
                  Speicherung von Cookies oder den Zugriff auf Informationen im
                  Endger&auml;t des Nutzers (z.&nbsp;B. Device-Fingerprinting) im
                  Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                </p>

                <h4 className="text-base font-medium text-violet-300 mb-2">
                  Auftragsverarbeitung
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur
                  Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es
                  sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
                  gew&auml;hrleistet, dass dieser die personenbezogenen Daten unserer
                  Websitebesucher nur nach unseren Weisungen und unter Einhaltung der
                  DSGVO verarbeitet.
                </p>
              </div>

              <div className="space-divider" />

              {/* 4. Allgemeine Hinweise und Pflichtinformationen */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    4. Allgemeine Hinweise und Pflichtinformationen
                  </h2>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">Datenschutz</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                  pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
                  personenbezogenen Daten vertraulich und entsprechend den
                  gesetzlichen Datenschutzvorschriften sowie dieser
                  Datenschutzerkl&auml;rung. Wenn Sie diese Website benutzen, werden
                  verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
                  sind Daten, mit denen Sie pers&ouml;nlich identifiziert werden
                  k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung
                  erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie
                  nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das
                  geschieht. Wir weisen darauf hin, dass die Daten&uuml;bertragung im
                  Internet (z.&nbsp;B. bei der Kommunikation per E-Mail)
                  Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser Schutz
                  der Daten vor dem Zugriff durch Dritte ist nicht m&ouml;glich.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Hinweis zur verantwortlichen Stelle
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf dieser
                  Website ist die Butterflies IT UG (haftungsbeschr&auml;nkt),
                  Hagenower Str. 73, 19061 Schwerin, vertreten durch den
                  Gesch&auml;ftsf&uuml;hrer Ahmad Ali. E-Mail: kontakt@genieportal.de,
                  Telefon: +49 (0) 385 20 888 200.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Speicherdauer
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Soweit innerhalb dieser Datenschutzerkl&auml;rung keine speziellere
                  Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
                  bei uns, bis der Zweck f&uuml;r die Datenverarbeitung entf&auml;llt.
                  Wenn Sie ein berechtigtes L&ouml;schersuchen geltend machen oder eine
                  Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten
                  gel&ouml;scht, sofern wir keine anderen rechtlich
                  zul&auml;ssigen Gr&uuml;nde f&uuml;r die Speicherung Ihrer
                  personenbezogenen Daten haben (z.&nbsp;B. steuer- oder
                  handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
                  erfolgt die L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten
                  wir Ihre personenbezogenen Daten auf Grundlage von Art. 6 Abs. 1
                  lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere
                  Datenkategorien nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im
                  Falle einer ausdr&uuml;cklichen Einwilligung in die
                  &Uuml;bertragung personenbezogener Daten in Drittstaaten erfolgt die
                  Datenverarbeitung au&szlig;erdem auf Grundlage von Art. 49 Abs. 1
                  lit. a DSGVO. Sofern die Datenverarbeitung zur
                  Vertragserf&uuml;llung oder zur Durchf&uuml;hrung
                  vorvertraglicher Ma&szlig;nahmen erforderlich ist, verarbeiten wir
                  Ihre Daten auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO. Des
                  Weiteren verarbeiten wir Ihre Daten, sofern diese zur
                  Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind,
                  auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                  Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
                  Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Widerruf Ihrer Einwilligung zur Datenverarbeitung
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
                  ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen eine
                  bereits erteilte Einwilligung jederzeit widerrufen. Die
                  Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
                  Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
                  Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
                  insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
                  Aufenthalts, ihres Arbeitsplatzes oder des Orts des
                  mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht besteht
                  unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher
                  Rechtsbehelfe. Die f&uuml;r uns zust&auml;ndige Aufsichtsbeh&ouml;rde
                  ist: Der Landesbeauftragte f&uuml;r Datenschutz und
                  Informationsfreiheit Mecklenburg-Vorpommern, Werderstr. 74a, 19055
                  Schwerin.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Recht auf Daten&uuml;bertragbarkeit
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
                  oder in Erf&uuml;llung eines Vertrags automatisiert verarbeiten, an
                  sich oder an einen Dritten in einem g&auml;ngigen,
                  maschinenlesbaren Format aush&auml;ndigen zu lassen. Sofern Sie die
                  direkte &Uuml;bertragung der Daten an einen anderen
                  Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
                  machbar ist.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Auskunft, L&ouml;schung und Berichtigung
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                  jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
                  gespeicherten personenbezogenen Daten, deren Herkunft und
                  Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
                  Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu sowie
                  zu weiteren Fragen zum Thema personenbezogene Daten k&ouml;nnen Sie
                  sich jederzeit an uns wenden.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Recht auf Einschr&auml;nkung der Verarbeitung
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen Sie sich
                  jederzeit an uns wenden. Das Recht auf Einschr&auml;nkung der
                  Verarbeitung besteht in folgenden F&auml;llen: Wenn Sie die
                  Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
                  bestreiten, ben&ouml;tigen wir in der Regel Zeit, um dies zu
                  &uuml;berpr&uuml;fen. F&uuml;r die Dauer der Pr&uuml;fung haben
                  Sie das Recht, die Einschr&auml;nkung der Verarbeitung Ihrer
                  personenbezogenen Daten zu verlangen. Wenn die Verarbeitung Ihrer
                  personenbezogenen Daten unrechtm&auml;&szlig;ig geschah/geschieht,
                  k&ouml;nnen Sie statt der L&ouml;schung die Einschr&auml;nkung der
                  Datenverarbeitung verlangen. Wenn wir Ihre personenbezogenen Daten
                  nicht mehr ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung,
                  Verteidigung oder Geltendmachung von Rechtsanspr&uuml;chen
                  ben&ouml;tigen, haben Sie das Recht, statt der L&ouml;schung die
                  Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu
                  verlangen. Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO
                  eingelegt haben, muss eine Abw&auml;gung zwischen Ihren und unseren
                  Interessen vorgenommen werden. Solange noch nicht feststeht, wessen
                  Interessen &uuml;berwiegen, haben Sie das Recht, die
                  Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen Daten zu
                  verlangen. Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                  eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von ihrer
                  Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung oder zur
                  Geltendmachung, Aus&uuml;bung oder Verteidigung von
                  Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
                  nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
                  eines wichtigen &ouml;ffentlichen Interesses der Europ&auml;ischen
                  Union oder eines Mitgliedstaats verarbeitet werden.
                </p>
              </div>

              <div className="space-divider" />

              {/* 5. Datenerfassung auf dieser Website */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                    <Database className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    5. Datenerfassung auf dieser Website
                  </h2>
                </div>

                <h3 className="text-lg font-semibold text-white mb-3">Cookies</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Unsere Internetseiten verwenden so genannte &bdquo;Cookies&ldquo;.
                  Cookies sind kleine Datenpakete und richten auf Ihrem Endger&auml;t
                  keinen Schaden an. Sie werden entweder vor&uuml;bergehend f&uuml;r
                  die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente
                  Cookies) auf Ihrem Endger&auml;t gespeichert. Session-Cookies werden
                  nach Ende Ihres Besuchs automatisch gel&ouml;scht. Permanente
                  Cookies bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese
                  selbst l&ouml;schen oder eine automatische L&ouml;schung durch Ihren
                  Webbrowser erfolgt.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cookies k&ouml;nnen von uns (First-Party-Cookies) oder von
                  Drittunternehmen stammen (sog. Third-Party-Cookies).
                  Third-Party-Cookies erm&ouml;glichen die Einbindung bestimmter
                  Dienstleistungen von Drittunternehmen innerhalb von Webseiten
                  (z.&nbsp;B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1
                  lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes
                  Interesse an der Speicherung von technisch notwendigen Cookies zur
                  technisch fehlerfreien und optimierten Bereitstellung seiner
                  Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und
                  vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt
                  die Verarbeitung ausschlie&szlig;lich auf Grundlage dieser
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1
                  TDDDG); die Einwilligung ist jederzeit widerrufbar. Sie k&ouml;nnen
                  Ihren Browser so einstellen, dass Sie &uuml;ber das Setzen von
                  Cookies informiert werden und Cookies nur im Einzelfall erlauben, die
                  Annahme von Cookies f&uuml;r bestimmte F&auml;lle oder generell
                  ausschlie&szlig;en sowie das automatische L&ouml;schen der Cookies
                  beim Schlie&szlig;en des Browsers aktivieren.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Server-Log-Dateien
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in so genannten Server-Log-Dateien, die Ihr Browser
                  automatisch an uns &uuml;bermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4 ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Eine Zusammenf&uuml;hrung dieser Daten mit anderen Datenquellen wird
                  nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage
                  von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                  berechtigtes Interesse an der technisch fehlerfreien Darstellung und
                  der Optimierung seiner Website &ndash; hierzu m&uuml;ssen die
                  Server-Log-Dateien erfasst werden.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Kontaktformular
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
                  Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
                  angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und
                  f&uuml;r den Fall von Anschlussfragen bei uns gespeichert. Diese
                  Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs.
                  1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung eines
                  Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
                  vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
                  &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
                  berechtigten Interesse an der effektiven Bearbeitung der an uns
                  gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
                  wurde. Die von Ihnen im Kontaktformular eingegebenen Daten
                  verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
                  Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r die
                  Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener
                  Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen
                  &ndash; insbesondere Aufbewahrungsfristen &ndash; bleiben
                  unber&uuml;hrt.
                </p>

                <h3 className="text-lg font-semibold text-white mb-3">
                  Anfrage per E-Mail, Telefon oder Telefax
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
                  Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
                  (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
                  gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
                  Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
                  Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
                  der Erf&uuml;llung eines Vertrags zusammenh&auml;ngt oder zur
                  Durchf&uuml;hrung vorvertraglicher Ma&szlig;nahmen erforderlich ist.
                  In allen &uuml;brigen F&auml;llen beruht die Verarbeitung auf
                  unserem berechtigten Interesse an der effektiven Bearbeitung der an
                  uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                  Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
                  wurde. Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten
                  Daten verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern,
                  Ihre Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r
                  die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach abgeschlossener
                  Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen
                  &ndash; insbesondere gesetzliche Aufbewahrungsfristen &ndash; bleiben
                  unber&uuml;hrt.
                </p>
              </div>

              <div className="space-divider" />

              {/* 6. Analyse-Tools und Werbung */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                    <Cookie className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    6. Analyse-Tools und Werbung
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Wir setzen auf dieser Website derzeit keine Analyse-Tools oder
                  Werbecookies ein. Sollte sich dies in Zukunft &auml;ndern, werden
                  wir diese Datenschutzerkl&auml;rung entsprechend aktualisieren und
                  Sie gegebenenfalls um Ihre Einwilligung bitten.
                </p>
              </div>

              <div className="space-divider" />

              {/* 7. SSL-/TLS-Verschluesselung */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    7. SSL-/TLS-Verschl&uuml;sselung
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
                  &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
                  Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                  senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
                  verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
                  Adresszeile des Browsers von &bdquo;http://&ldquo; auf
                  &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in Ihrer
                  Browserzeile.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
                  k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht von
                  Dritten mitgelesen werden.
                </p>
              </div>

            </div>
          </div>

          {/* Last updated */}
          <p className="text-center text-gray-600 text-sm mt-8">
            Stand: Februar 2026
          </p>
        </div>
      </section>

      <div className="space-divider" />

      <Footer />
    </div>
  );
}
