'use client';

import { useState } from 'react';
import { Send, Loader2, Check } from 'lucide-react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('https://api.genieportal.de/v1/api/public/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject: subject || 'Allgemeine Anfrage',
          message,
          domain: 'genieportal.de',
        }),
      });

      if (!res.ok) throw new Error('Senden fehlgeschlagen');

      setSent(true);
    } catch {
      setError('Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
          <Check className="h-8 w-8 text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">Nachricht gesendet!</h3>
        <p className="text-gray-400">
          Vielen Dank für Ihre Nachricht. Wir melden uns in der Regel innerhalb von 24 Stunden bei Ihnen.
        </p>
        <button
          onClick={() => { setSent(false); setName(''); setEmail(''); setSubject(''); setMessage(''); }}
          className="mt-6 text-sm text-violet-400 hover:text-violet-300 transition-colors"
        >
          Neue Nachricht schreiben
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
            Name *
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ihr Name"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-colors text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
            E-Mail *
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ihre@email.de"
            className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">
          Betreff
        </label>
        <input
          id="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Worum geht es?"
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-colors text-sm"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
          Nachricht *
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ihre Nachricht an uns..."
          className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500/50 transition-colors text-sm resize-none"
        />
      </div>

      {error && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-pink-600 px-6 py-3.5 text-base font-medium text-white hover:from-violet-500 hover:to-pink-500 transition-all shadow-lg shadow-violet-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
      >
        {sending ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Wird gesendet...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Nachricht senden
          </>
        )}
      </button>
    </form>
  );
}
