import Link from 'next/link';
import { Orbit, Home, Building2, Users, BookOpen, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center px-4">
      <div className="max-w-lg w-full text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-violet-500/10 border border-violet-500/20 rounded-full flex items-center justify-center">
            <Orbit className="w-10 h-10 text-violet-400" />
          </div>
        </div>

        {/* 404 Badge */}
        <div className="inline-block bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
          Fehler 404
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Seite nicht gefunden
        </h1>

        {/* Text */}
        <p className="text-lg text-gray-400 mb-2">
          Diese Seite ist im Genie-Universum leider nicht zu finden.
        </p>
        <p className="text-gray-500 mb-8">
          Aber keine Sorge – es gibt noch viel zu entdecken!
        </p>

        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white font-semibold px-6 py-3 rounded-full transition-all shadow-lg shadow-violet-500/20 mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        {/* Quick links */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500 mb-4 font-medium">Vielleicht suchst du das hier:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/bereiche"
              className="flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-violet-500/5 transition-colors group"
            >
              <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                <Orbit className="w-5 h-5 text-violet-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-200 text-sm">5 Portale</div>
                <div className="text-xs text-gray-500">Alle Bereiche entdecken</div>
              </div>
            </Link>

            <Link
              href="/fuer-unternehmen"
              className="flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-violet-500/5 transition-colors group"
            >
              <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                <Building2 className="w-5 h-5 text-violet-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-200 text-sm">Für Unternehmen</div>
                <div className="text-xs text-gray-500">Recruiting neu gedacht</div>
              </div>
            </Link>

            <Link
              href="/fuer-bewerber"
              className="flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-violet-500/5 transition-colors group"
            >
              <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                <Users className="w-5 h-5 text-violet-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-200 text-sm">Für Bewerber</div>
                <div className="text-xs text-gray-500">Traumjob finden</div>
              </div>
            </Link>

            <Link
              href="/konzept"
              className="flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:border-violet-500/30 hover:bg-violet-500/5 transition-colors group"
            >
              <div className="w-10 h-10 bg-violet-500/10 rounded-lg flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                <BookOpen className="w-5 h-5 text-violet-400" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-200 text-sm">Konzept</div>
                <div className="text-xs text-gray-500">So funktioniert's</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
