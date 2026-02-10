'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Orbit, Menu, X } from 'lucide-react';
import { LoginButton, UserMenu, useAuth } from '@/lib/genie-auth';

const navLinks = [
  { href: '/bereiche', label: 'Bereiche' },
  { href: '/app', label: 'Die App' },
  { href: '/fuer-unternehmen', label: 'Für Unternehmen' },
  { href: '/fuer-bewerber', label: 'Für Bewerber' },
  { href: '/ueber-uns', label: 'Über uns' },
  { href: '/hilfe', label: 'Hilfe' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isLoggedIn, isLoading } = useAuth();

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-3">
        <div className="bg-[#030014]/80 backdrop-blur-xl rounded-2xl border border-violet-500/10 px-4 sm:px-6 shadow-2xl shadow-violet-500/5">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <Orbit className="h-4.5 w-4.5 text-white" />
              </div>
              <span className="font-bold text-lg text-white">Genieportal</span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white px-3 py-2 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              {!isLoading && (isLoggedIn ? <UserMenu /> : <LoginButton />)}
              <Link
                href="https://dashboard.genieportal.de/register"
                className="rounded-full bg-gradient-to-r from-violet-600 to-pink-600 px-5 py-2 text-sm font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25"
              >
                Für Unternehmen
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menü"
            >
              {mobileOpen ? <X className="h-5 w-5 text-gray-300" /> : <Menu className="h-5 w-5 text-gray-300" />}
            </button>
          </div>

          {mobileOpen && (
            <div className="lg:hidden pb-4 border-t border-violet-500/10 mt-2 pt-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white hover:bg-white/5 px-3 py-2.5 rounded-lg transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <hr className="my-2 border-violet-500/10" />
                <div className="px-3 py-2">
                  {!isLoading && (isLoggedIn ? <UserMenu /> : <LoginButton />)}
                </div>
                <Link
                  href="https://dashboard.genieportal.de/register"
                  className="text-sm font-medium text-center text-white bg-gradient-to-r from-violet-600 to-pink-600 px-4 py-2.5 rounded-full mt-1"
                  onClick={() => setMobileOpen(false)}
                >
                  Für Unternehmen registrieren
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
