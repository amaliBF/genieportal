import Link from 'next/link';
import { Orbit, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#020010] text-gray-500 border-t border-violet-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 text-white mb-4">
              <div className="w-7 h-7 rounded-md bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center">
                <Orbit className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold">Genieportal</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-md">
              Recruiting neu gedacht mit Video-Matching, KI-Jobfinder und
              direktem Chat. Für Ausbildung, Praktikum, Beruf, Minijob und Werkstudent.
            </p>

            {/* Portale */}
            <h4 className="font-semibold text-gray-300 mb-3 text-sm">Die Job-Portale</h4>
            <div className="flex flex-wrap gap-2 mb-6">
              <a href="https://ausbildungsgenie.de" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 text-xs transition-colors border border-white/5">
                Ausbildungsgenie <ExternalLink className="h-3 w-3" />
              </a>
              <a href="https://praktikumsgenie.de" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 text-xs transition-colors border border-white/5">
                Praktikumsgenie <ExternalLink className="h-3 w-3" />
              </a>
              <a href="https://berufsgenie.de" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 text-xs transition-colors border border-white/5">
                Berufsgenie <ExternalLink className="h-3 w-3" />
              </a>
              <a href="https://minijobgenie.de" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 text-xs transition-colors border border-white/5">
                Minijobgenie <ExternalLink className="h-3 w-3" />
              </a>
              <a href="https://werkstudentengenie.de" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 text-xs transition-colors border border-white/5">
                Werkstudentengenie <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Genieportal */}
          <div>
            <h4 className="font-semibold text-gray-300 mb-3 text-sm">Genieportal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bereiche" className="hover:text-white transition-colors">Bereiche</Link></li>
              <li><Link href="/app" className="hover:text-white transition-colors">Die App</Link></li>
              <li><Link href="/fuer-unternehmen" className="hover:text-white transition-colors">Für Unternehmen</Link></li>
              <li><Link href="/konzept" className="hover:text-white transition-colors">Konzept</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Kontakt</Link></li>
              <li><a href="https://dashboard.genieportal.de/login" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">Betriebe-Login <ExternalLink className="h-3 w-3" /></a></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="font-semibold text-gray-300 mb-3 text-sm">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link></li>
              <li><Link href="/agb" className="hover:text-white transition-colors">AGB</Link></li>
            </ul>

            <h4 className="font-semibold text-gray-300 mb-3 text-sm mt-8">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:support@genieportal.de" className="hover:text-white transition-colors">
                  support@genieportal.de
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Sub Footer */}
      <div className="border-t border-violet-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div>
              © {new Date().getFullYear()} Genieportal – Butterflies IT UG (haftungsbeschränkt). Alle Rechte vorbehalten.
            </div>
            <div>
              Ein Projekt der Butterflies IT UG
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
