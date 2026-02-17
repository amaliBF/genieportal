'use client';

import { useState } from 'react';
import { Smartphone, Bell, CheckCircle, Loader2 } from 'lucide-react';

const API_URL = 'https://api.genieportal.de/v1';
const DOMAIN = 'genieportal.de';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function AppNotifyForm({
  title = 'Die Genie-App kommt bald!',
  description = 'Wir arbeiten mit Hochdruck an der App. Trag dich ein und erfahre als Erstes, wenn sie verfügbar ist.',
  variant = 'banner',
}: {
  title?: string;
  description?: string;
  variant?: 'banner' | 'inline' | 'section';
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch(`${API_URL}/api/public/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, domain: DOMAIN }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Fast geschafft! Bitte bestätige deine E-Mail-Adresse.');
      } else {
        setStatus('error');
        setMessage(data.message || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.');
      }
    } catch {
      setStatus('error');
      setMessage('Verbindungsfehler. Bitte versuche es später erneut.');
    }
  };

  if (variant === 'inline') {
    return (
      <div className="bg-violet-500/10 border border-violet-500/20 rounded-2xl p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-3">
          <Bell className="h-5 w-5 text-violet-400" />
          <span className="text-sm font-semibold text-violet-300 uppercase tracking-wide">Bald verfügbar</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 text-sm">{description}</p>
        {status === 'success' ? (
          <div className="flex items-center gap-2 text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <span className="text-sm">{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold rounded-xl text-sm hover:from-violet-500 hover:to-pink-500 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bell className="h-4 w-4" />}
              Benachrichtigen
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-red-400 text-sm mt-2">{message}</p>}
      </div>
    );
  }

  if (variant === 'section') {
    return (
      <div className="text-center">
        <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 text-violet-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Bell className="h-4 w-4" />
          Bald verfügbar
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{title}</h2>
        <p className="text-gray-400 mb-6 max-w-lg mx-auto">{description}</p>
        {status === 'success' ? (
          <div className="inline-flex items-center gap-2 text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 px-6">
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Deine E-Mail-Adresse"
              className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-pink-500 transition-all disabled:opacity-60 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bell className="h-4 w-4" />}
              Erinnere mich
            </button>
          </form>
        )}
        {status === 'error' && <p className="text-red-400 text-sm mt-3">{message}</p>}
      </div>
    );
  }

  // variant === 'banner' (default) — dark theme CTA
  return (
    <div className="text-center">
      <Smartphone className="h-10 w-10 text-violet-400 mx-auto mb-4" />
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400 mb-6 max-w-lg mx-auto">{description}</p>
      {status === 'success' ? (
        <div className="inline-flex items-center gap-2 text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 px-6">
          <CheckCircle className="h-5 w-5" />
          <span>{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Deine E-Mail-Adresse"
            className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400 backdrop-blur"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-pink-500 transition-all disabled:opacity-60 flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25"
          >
            {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> : <Bell className="h-4 w-4" />}
            Erinnere mich
          </button>
        </form>
      )}
      {status === 'error' && <p className="text-red-400 text-sm mt-3">{message}</p>}
    </div>
  );
}
