'use client';

import { useState } from 'react';

type Fields = { name: string; email: string; phone: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

export function ContactForm() {
  const [fields, setFields] = useState<Fields>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const e: Errors = {};
    if (!fields.name.trim()) e.name = 'Introdu numele.';
    if (!fields.email.trim()) e.email = 'Introdu adresa de email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Email invalid.';
    if (!fields.phone.trim()) e.phone = 'Introdu numărul de telefon.';
    if (!fields.message.trim()) e.message = 'Introdu mesajul.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p className="text-accent font-body">
        Mulțumim! Mesajul tău a fost trimis. Te contactăm în curând.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <h2 className="font-heading text-sm uppercase tracking-widest text-accent mb-4">
        Trimite un mesaj
      </h2>
      <div>
        <label htmlFor="contact-name" className="block text-sm text-text-muted mb-1">
          Nume *
        </label>
        <input
          id="contact-name"
          type="text"
          value={fields.name}
          onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
          className="w-full px-4 py-3 bg-bg border border-white/20 rounded-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="Numele tău"
          required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.name}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm text-text-muted mb-1">
          Email *
        </label>
        <input
          id="contact-email"
          type="email"
          value={fields.email}
          onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
          className="w-full px-4 py-3 bg-bg border border-white/20 rounded-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="email@exemplu.ro"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-phone" className="block text-sm text-text-muted mb-1">
          Telefon *
        </label>
        <input
          id="contact-phone"
          type="tel"
          value={fields.phone}
          onChange={(e) => setFields((f) => ({ ...f, phone: e.target.value }))}
          className="w-full px-4 py-3 bg-bg border border-white/20 rounded-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent"
          placeholder="07xx xxx xxx"
          required
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.phone}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm text-text-muted mb-1">
          Mesaj *
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={fields.message}
          onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
          className="w-full px-4 py-3 bg-bg border border-white/20 rounded-sm text-text placeholder:text-text-muted/60 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent resize-y"
          placeholder="Cum te putem ajuta?"
          required
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 bg-accent text-bg font-heading text-sm uppercase tracking-widest hover:bg-accent/90 transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
      >
        Trimite
      </button>
    </form>
  );
}
