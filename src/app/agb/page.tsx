import { Orbit, FileText, Scale } from 'lucide-react';
import type { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata: Metadata = {
  title: 'AGB | Genieportal',
  description:
    'Allgemeine Geschaeftsbedingungen der Genieportal-Plattform von Butterflies IT UG (haftungsbeschraenkt). Nutzungsbedingungen fuer Jobsuchende und Unternehmen.',
  alternates: { canonical: '/agb' },
};

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-[#030014]">
      <Header />

      {/* ═══════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden stars-bg">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -left-40 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-violet-500/20 px-5 py-2 text-sm text-violet-300 mb-8 backdrop-blur-sm">
            <Scale className="h-4 w-4" />
            <span>Rechtliches</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            <span className="text-white">Allgemeine </span>
            <span className="gradient-text-genie">Geschaeftsbedingungen</span>
          </h1>

          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Nutzungsbedingungen der Genieportal-Plattform und aller zugehoerigen
            Job-Portale. Stand: Februar 2026.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          AGB INHALT
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <div className="glow-card p-8 sm:p-12">
            {/* Einleitung */}
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-violet-500/10">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center shadow-lg shadow-violet-500/20">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">
                  Butterflies IT UG (haftungsbeschraenkt)
                </p>
                <p className="text-sm text-gray-500">
                  Hagenower Str. 73, 19061 Schwerin
                </p>
              </div>
            </div>

            <div className="prose prose-invert prose-violet max-w-none">
              {/* ── 1. Geltungsbereich ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  1
                </span>
                Geltungsbereich
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  1.1 Diese Allgemeinen Geschaeftsbedingungen (nachfolgend &bdquo;AGB&ldquo;) gelten fuer
                  saemtliche Leistungen und Angebote der Butterflies IT UG (haftungsbeschraenkt),
                  Hagenower Str. 73, 19061 Schwerin (nachfolgend &bdquo;Anbieter&ldquo;), die ueber die
                  Plattform Genieportal (genieportal.de) sowie die zugehoerigen Job-Portale bereitgestellt
                  werden.
                </p>
                <p>
                  1.2 Die Plattform umfasst folgende Job-Portale, die gemeinsam das
                  Genieportal bilden und ueber die Genie App zugaenglich sind:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>ausbildungsgenie.de &ndash; Ausbildungsplaetze</li>
                  <li>praktikumsgenie.de &ndash; Praktika und Schnuppertage</li>
                  <li>berufsgenie.de &ndash; Festanstellungen und Karriere</li>
                  <li>minijobgenie.de &ndash; Minijobs und 520-EUR-Jobs</li>
                  <li>werkstudentengenie.de &ndash; Werkstudentenstellen</li>
                </ul>
                <p>
                  1.3 Mit der Registrierung oder Nutzung der Plattform erkennt der Nutzer diese AGB an.
                  Abweichende Geschaeftsbedingungen des Nutzers finden keine Anwendung, es sei denn,
                  der Anbieter stimmt ihrer Geltung ausdruecklich schriftlich zu.
                </p>
                <p>
                  1.4 Diese AGB gelten sowohl fuer Jobsuchende (nachfolgend &bdquo;Nutzer&ldquo;) als
                  auch fuer Unternehmen, die Stellenangebote veroeffentlichen (nachfolgend
                  &bdquo;Unternehmen&ldquo;).
                </p>
              </div>

              {/* ── 2. Vertragsgegenstand ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  2
                </span>
                Vertragsgegenstand
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  2.1 Genieportal ist eine digitale Plattform fuer innovatives Job-Matching.
                  Die Plattform verbindet Jobsuchende und Unternehmen ueber Video-Kurzprofile,
                  einen KI-gestuetzten Jobfinder sowie einen integrierten Chat.
                </p>
                <p>
                  2.2 Der Anbieter stellt die technische Infrastruktur bereit, ueber die
                  Unternehmen Stellenangebote als Kurzvideos veroeffentlichen und Jobsuchende
                  diese per Swipe-Mechanik entdecken koennen. Bei gegenseitigem Interesse
                  (Matching) wird ein direkter Chat-Kanal eroeffnet.
                </p>
                <p>
                  2.3 Der Anbieter ist nicht Partei der zwischen Nutzern und Unternehmen
                  entstehenden Arbeits- oder Ausbildungsverhaeltnisse. Die Plattform dient
                  ausschliesslich der Vermittlung und Kontaktanbahnung.
                </p>
                <p>
                  2.4 Der KI-Jobfinder analysiert Nutzerinteressen und -angaben, um
                  passende Berufsvorschlaege zu generieren. Die KI-Empfehlungen sind
                  unverbindlich und stellen keine Berufsberatung im Sinne des SGB III dar.
                </p>
              </div>

              {/* ── 3. Registrierung und Nutzerkonto ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  3
                </span>
                Registrierung und Nutzerkonto
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  3.1 Die Nutzung der Plattform erfordert eine Registrierung. Bei der
                  Registrierung sind wahrheitsgemaesse und vollstaendige Angaben zu machen.
                </p>
                <p>
                  3.2 Jeder Nutzer darf nur ein Nutzerkonto anlegen. Die Zugangsdaten sind
                  vertraulich zu behandeln und duerfen nicht an Dritte weitergegeben werden.
                </p>
                <p>
                  3.3 Die Registrierung fuer Unternehmen erfolgt ueber das Firmen-Dashboard
                  (dashboard.genieportal.de) in einem dreistufigen Prozess:
                  Firmendaten, Benutzerdaten und Paketauswahl.
                </p>
                <p>
                  3.4 Der Anbieter behaelt sich das Recht vor, Registrierungen ohne Angabe
                  von Gruenden abzulehnen oder Nutzerkonten bei Verstoss gegen diese AGB zu
                  sperren oder zu loeschen.
                </p>
                <p>
                  3.5 Nutzer muessen fuer die Registrierung mindestens 14 Jahre alt sein.
                  Bei Minderjaehrigen ist die Zustimmung eines Erziehungsberechtigten erforderlich.
                </p>
              </div>

              {/* ── 4. Leistungen fuer Jobsuchende ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  4
                </span>
                Leistungen fuer Jobsuchende
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  4.1 Die Nutzung der Plattform ist fuer Jobsuchende <span className="text-white font-medium">vollstaendig kostenlos</span>.
                  Es fallen weder Registrierungs- noch Nutzungsgebuehren an.
                </p>
                <p>
                  4.2 Jobsuchende erhalten Zugang zu folgenden Funktionen:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li><span className="text-gray-300">Video-Feed</span> &ndash; Stellenangebote als Kurzvideos durchsuchen per Swipe-Mechanik</li>
                  <li><span className="text-gray-300">KI-Jobfinder</span> &ndash; Persoenliche Berufsvorschlaege basierend auf Interessen und Staerken</li>
                  <li><span className="text-gray-300">Matching</span> &ndash; Bei gegenseitigem Interesse entsteht ein Match</li>
                  <li><span className="text-gray-300">Chat</span> &ndash; Direkter Nachrichtenaustausch mit gematchten Unternehmen</li>
                  <li><span className="text-gray-300">Profilerstellung</span> &ndash; Persoenliches Profil mit Interessen, Staerken und optionalem Video</li>
                </ul>
                <p>
                  4.3 Der Anbieter behaelt sich vor, den Funktionsumfang jederzeit zu erweitern
                  oder anzupassen, solange die Kernfunktionalitaet erhalten bleibt.
                </p>
              </div>

              {/* ── 5. Leistungen fuer Unternehmen ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  5
                </span>
                Leistungen fuer Unternehmen
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  5.1 Unternehmen koennen die Plattform im Rahmen verschiedener Abonnement-Pakete
                  nutzen. Die folgenden Pakete stehen zur Verfuegung:
                </p>

                {/* Pakete-Tabelle */}
                <div className="overflow-x-auto my-6">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-violet-500/20">
                        <th className="text-left py-3 pr-4 text-gray-300 font-semibold">Paket</th>
                        <th className="text-left py-3 pr-4 text-gray-300 font-semibold">Preis / Monat</th>
                        <th className="text-left py-3 text-gray-300 font-semibold">Leistungen</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-400">
                      <tr className="border-b border-violet-500/10">
                        <td className="py-3 pr-4 text-white font-medium">Free</td>
                        <td className="py-3 pr-4">0,00 EUR</td>
                        <td className="py-3">1 Stellenanzeige, Basis-Profil, eingeschraenktes Matching</td>
                      </tr>
                      <tr className="border-b border-violet-500/10">
                        <td className="py-3 pr-4 text-white font-medium">Starter</td>
                        <td className="py-3 pr-4">49,00 EUR</td>
                        <td className="py-3">5 Stellenanzeigen, erweitertes Profil, Matching, Chat, Basis-Analytics</td>
                      </tr>
                      <tr className="border-b border-violet-500/10">
                        <td className="py-3 pr-4 text-white font-medium">Pro</td>
                        <td className="py-3 pr-4">149,00 EUR</td>
                        <td className="py-3">20 Stellenanzeigen, Premium-Profil, Matching, Chat, erweiterte Analytics, Team-Zugang</td>
                      </tr>
                      <tr>
                        <td className="py-3 pr-4 text-white font-medium">Enterprise</td>
                        <td className="py-3 pr-4">399,00 EUR</td>
                        <td className="py-3">Unbegrenzte Stellenanzeigen, Enterprise-Profil, Priority-Matching, Chat, volle Analytics, Team-Verwaltung, dedizierter Support</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p>
                  5.2 Alle Preise verstehen sich als Nettopreise zzgl. der gesetzlichen
                  Umsatzsteuer, sofern anwendbar.
                </p>
                <p>
                  5.3 Der Anbieter behaelt sich vor, den Funktionsumfang der einzelnen Pakete
                  zu erweitern. Bestehende Funktionen werden waehrend der Vertragslaufzeit nicht
                  eingeschraenkt.
                </p>
                <p>
                  5.4 Ein Upgrade des Pakets ist jederzeit moeglich. Ein Downgrade wird zum
                  naechsten Abrechnungszeitraum wirksam.
                </p>
              </div>

              {/* ── 6. Zahlungsbedingungen ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  6
                </span>
                Zahlungsbedingungen
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  6.1 Die Abrechnung der kostenpflichtigen Pakete erfolgt <span className="text-white font-medium">monatlich</span> im
                  Voraus. Der erste Abrechnungszeitraum beginnt mit dem Abschluss des Abonnements.
                </p>
                <p>
                  6.2 Die Zahlung erfolgt ueber <span className="text-white font-medium">PayPal</span>.
                  Mit der Auswahl eines kostenpflichtigen Pakets stimmt das Unternehmen der
                  automatischen monatlichen Abbuchung ueber PayPal zu.
                </p>
                <p>
                  6.3 Die Kuendigungsfrist fuer Abonnements betraegt <span className="text-white font-medium">einen Monat</span> zum
                  Ende des jeweiligen Abrechnungszeitraums. Die Kuendigung kann ueber das
                  Firmen-Dashboard oder per E-Mail an support@genieportal.de erfolgen.
                </p>
                <p>
                  6.4 Bei Zahlungsverzug ist der Anbieter berechtigt, den Zugang des
                  Unternehmens zu den kostenpflichtigen Funktionen einzuschraenken oder zu
                  sperren, bis der ausstehende Betrag beglichen ist.
                </p>
                <p>
                  6.5 Der Anbieter stellt fuer jede Zahlung eine Rechnung in elektronischer
                  Form bereit, die im Firmen-Dashboard abrufbar ist.
                </p>
              </div>

              {/* ── 7. Pflichten der Nutzer ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  7
                </span>
                Pflichten der Nutzer
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  7.1 Alle Nutzer verpflichten sich:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>
                    Wahrheitsgemaesse und vollstaendige Angaben bei der Registrierung und
                    in ihrem Profil zu machen
                  </li>
                  <li>
                    Keine falschen, irrefuehrenden oder taeusschenden Inhalte zu
                    veroeffentlichen
                  </li>
                  <li>
                    Keine rechtswidrigen, belaestigenden, diskriminierenden, gewaltverherrlichenden
                    oder pornografischen Inhalte hochzuladen oder zu verbreiten
                  </li>
                  <li>
                    Die Plattform nicht fuer Spam, unerwuenschte Werbung oder sonstige
                    unerlaubte kommerzielle Zwecke zu nutzen
                  </li>
                  <li>
                    Die Rechte Dritter (insbesondere Urheber-, Marken- und Persoenlichkeitsrechte)
                    zu achten
                  </li>
                  <li>
                    Keine automatisierten Zugriffe (Bots, Scraper, Crawler) auf die Plattform
                    durchzufuehren
                  </li>
                  <li>
                    Die Zugangsdaten vertraulich zu behandeln und bei Verdacht auf Missbrauch
                    unverzueglich den Anbieter zu informieren
                  </li>
                </ul>
                <p>
                  7.2 Unternehmen verpflichten sich darueber hinaus, nur tatsaechlich
                  existierende und zu besetzende Stellen zu veroeffentlichen und
                  das geltende Arbeitsrecht einzuhalten.
                </p>
                <p>
                  7.3 Videos, die auf der Plattform hochgeladen werden, muessen den
                  Inhaltsrichtlinien entsprechen. Der Anbieter behaelt sich das Recht vor,
                  Inhalte ohne Vorankuendigung zu entfernen, die gegen diese AGB oder
                  geltendes Recht verstossen.
                </p>
                <p>
                  7.4 Bei Verstoss gegen die vorstehenden Pflichten ist der Anbieter
                  berechtigt, den Zugang zeitweise oder dauerhaft zu sperren, Inhalte zu
                  loeschen und ggf. Schadensersatzansprueche geltend zu machen.
                </p>
              </div>

              {/* ── 8. Haftung ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  8
                </span>
                Haftung
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  8.1 Der Anbieter haftet unbeschraenkt fuer Vorsatz und grobe Fahrlaessigkeit
                  sowie fuer Schaeden aus der Verletzung des Lebens, des Koerpers oder der
                  Gesundheit.
                </p>
                <p>
                  8.2 Fuer leichte Fahrlaessigkeit haftet der Anbieter nur bei Verletzung
                  wesentlicher Vertragspflichten (Kardinalpflichten). In diesem Fall ist die
                  Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
                </p>
                <p>
                  8.3 Der Anbieter uebernimmt keine Haftung fuer:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-400">
                  <li>Die Richtigkeit, Vollstaendigkeit oder Aktualitaet von Nutzerangaben und Unternehmensprofilen</li>
                  <li>Das Zustandekommen oder den Inhalt von Arbeits- oder Ausbildungsverhaeltnissen</li>
                  <li>Technische Stoerungen, Serverausfaelle oder Datenverluste, sofern diese nicht auf Vorsatz oder grobe Fahrlaessigkeit zurueckzufuehren sind</li>
                  <li>Inhalte und Handlungen Dritter auf der Plattform</li>
                  <li>Die Ergebnisse des KI-Jobfinders, die unverbindliche Empfehlungen darstellen</li>
                </ul>
                <p>
                  8.4 Die Haftung nach dem Produkthaftungsgesetz bleibt unberuehrt.
                </p>
              </div>

              {/* ── 9. Datenschutz ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  9
                </span>
                Datenschutz
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  9.1 Der Schutz personenbezogener Daten ist dem Anbieter ein wichtiges Anliegen.
                  Die Erhebung, Verarbeitung und Nutzung personenbezogener Daten erfolgt
                  ausschliesslich im Einklang mit der Datenschutz-Grundverordnung (DSGVO),
                  dem Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz (TMG).
                </p>
                <p>
                  9.2 Ausfuehrliche Informationen zur Datenverarbeitung, zu den Rechten der
                  Betroffenen und zu den eingesetzten Diensten finden sich in unserer{' '}
                  <a
                    href="/datenschutz"
                    className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
                  >
                    Datenschutzerklaerung
                  </a>.
                </p>
                <p>
                  9.3 Durch die Nutzung der Plattform stimmt der Nutzer der Verarbeitung
                  seiner Daten gemaess der Datenschutzerklaerung zu.
                </p>
              </div>

              {/* ── 10. Kuendigung und Vertragsbeendigung ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  10
                </span>
                Kuendigung und Vertragsbeendigung
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  10.1 Nutzer (Jobsuchende) koennen ihr Konto jederzeit ohne Einhaltung einer
                  Frist loeschen. Die Loesung erfolgt ueber die Kontoeinstellungen in der App
                  oder per E-Mail an support@genieportal.de.
                </p>
                <p>
                  10.2 Unternehmen koennen ihr kostenpflichtiges Abonnement mit einer Frist
                  von <span className="text-white font-medium">einem Monat</span> zum Ende des
                  jeweiligen Abrechnungszeitraums kuendigen. Die Kuendigung kann ueber das
                  Firmen-Dashboard oder per E-Mail erfolgen.
                </p>
                <p>
                  10.3 Bei Kuendigung eines kostenpflichtigen Abonnements bleibt der Zugang
                  bis zum Ende des bereits bezahlten Abrechnungszeitraums bestehen. Danach
                  wird das Konto automatisch auf das Free-Paket zurueckgestuft.
                </p>
                <p>
                  10.4 Das Recht zur ausserordentlichen Kuendigung aus wichtigem Grund bleibt
                  fuer beide Seiten unberuehrt. Ein wichtiger Grund liegt insbesondere vor bei
                  schwerwiegenden Verstoessen gegen diese AGB.
                </p>
                <p>
                  10.5 Nach Kontoloesung werden personenbezogene Daten gemaess den gesetzlichen
                  Aufbewahrungsfristen geloescht oder anonymisiert, sofern keine gesetzliche
                  Aufbewahrungspflicht besteht.
                </p>
              </div>

              {/* ── 11. Aenderungen der AGB ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  11
                </span>
                Aenderungen der AGB
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  11.1 Der Anbieter behaelt sich vor, diese AGB jederzeit mit Wirkung fuer die
                  Zukunft zu aendern oder zu ergaenzen, sofern dies aus sachlich gerechtfertigten
                  Gruenden erforderlich ist (z. B. Aenderung der Rechtslage, hoechstrichterliche
                  Rechtsprechung, Einfuehrung neuer Funktionen).
                </p>
                <p>
                  11.2 Ueber wesentliche Aenderungen wird der Nutzer mindestens vier Wochen vor
                  Inkrafttreten per E-Mail oder ueber die Plattform informiert.
                </p>
                <p>
                  11.3 Widerspricht der Nutzer den geaenderten AGB nicht innerhalb von vier Wochen
                  nach Zugang der Aenderungsmitteilung, gelten die geaenderten AGB als angenommen.
                  Auf die Bedeutung des Schweigens wird in der Aenderungsmitteilung gesondert
                  hingewiesen.
                </p>
                <p>
                  11.4 Im Falle eines Widerspruchs ist der Anbieter berechtigt, das
                  Vertragsverhaeltnis zum Zeitpunkt des Inkrafttretens der neuen AGB zu kuendigen.
                </p>
              </div>

              {/* ── 12. Schlussbestimmungen ── */}
              <h2 className="text-xl font-bold text-white mt-10 mb-4 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 text-sm font-bold flex-shrink-0">
                  12
                </span>
                Schlussbestimmungen
              </h2>
              <div className="pl-11 space-y-3 text-gray-400 leading-relaxed">
                <p>
                  12.1 Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des
                  UN-Kaufrechts (CISG).
                </p>
                <p>
                  12.2 Gerichtsstand fuer alle Streitigkeiten aus oder im Zusammenhang mit
                  diesen AGB ist <span className="text-white font-medium">Schwerin</span>,
                  sofern der Nutzer Kaufmann, juristische Person des oeffentlichen Rechts oder
                  oeffentlich-rechtliches Sondervermoegen ist oder keinen allgemeinen
                  Gerichtsstand im Inland hat.
                </p>
                <p>
                  12.3 Sollten einzelne Bestimmungen dieser AGB unwirksam oder undurchfuehrbar
                  sein oder werden, so bleibt die Wirksamkeit der uebrigen Bestimmungen hiervon
                  unberuehrt (Salvatorische Klausel). Anstelle der unwirksamen oder
                  undurchfuehrbaren Bestimmung tritt eine Regelung, die dem wirtschaftlichen
                  Zweck der unwirksamen Bestimmung am naechsten kommt.
                </p>
                <p>
                  12.4 Die Europaeische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-400 hover:text-violet-300 underline underline-offset-2 transition-colors"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>.
                  Der Anbieter ist weder bereit noch verpflichtet, an
                  Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                  teilzunehmen.
                </p>
                <p>
                  12.5 Muendliche Nebenabreden bestehen nicht. Aenderungen und Ergaenzungen
                  dieser AGB beduerfern der Schriftform. Dies gilt auch fuer die Aufhebung
                  dieses Schriftformerfordernisses.
                </p>
              </div>

              {/* Schluss-Info */}
              <div className="mt-12 pt-8 border-t border-violet-500/10">
                <p className="text-sm text-gray-500 text-center">
                  Stand: Februar 2026 | Butterflies IT UG (haftungsbeschraenkt) |
                  Hagenower Str. 73, 19061 Schwerin |{' '}
                  <a
                    href="mailto:support@genieportal.de"
                    className="text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    support@genieportal.de
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
