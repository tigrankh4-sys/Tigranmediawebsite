'use client';
import { useState } from 'react';
import React from 'react';

interface Props { cls: string; }

export default function ContactForm({ cls }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const fd = new FormData(e.currentTarget);
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_API ?? '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          naam: fd.get('naam'),
          bedrijf: fd.get('bedrijf'),
          email: fd.get('email'),
          pakket: fd.get('pakket'),
          bericht: fd.get('bericht'),
          honeypot: fd.get('honeypot'),
        }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return <p className={`${cls}-form-status`}>Uw aanvraag is verzonden. Wij nemen binnen 24u contact op.</p>;
  }

  return (
    <form className={`${cls}-form`} onSubmit={handleSubmit}>
      <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className={`${cls}-field form-field`}><label htmlFor={`${cls}-naam`}>Naam</label><input id={`${cls}-naam`} type="text" name="naam" placeholder="Jan Janssen" required /></div>
      <div className={`${cls}-field form-field`}><label htmlFor={`${cls}-bedrijf`}>Bedrijf</label><input id={`${cls}-bedrijf`} type="text" name="bedrijf" placeholder="Jouw Bedrijf BV" /></div>
      <div className={`${cls}-field form-field`}><label htmlFor={`${cls}-email`}>E-mail</label><input id={`${cls}-email`} type="email" name="email" placeholder="jan@bedrijf.be" required /></div>
      <div className={`${cls}-field form-field`}>
        <label htmlFor={`${cls}-pakket`}>Pakket interesse</label>
        <select id={`${cls}-pakket`} name="pakket" defaultValue="">
          <option value="" disabled>Selecteer pakket</option>
          <option value="Starter">Starter</option>
          <option value="Groei">Groei</option>
          <option value="Full Service">Full Service</option>
        </select>
      </div>
      <div className={`${cls}-field form-field`}><label htmlFor={`${cls}-bericht`}>Bericht</label><textarea id={`${cls}-bericht`} name="bericht" rows={4} placeholder="Vertel ons over uw project..." /></div>
      <button type="submit" className={`${cls}-submit`} disabled={status === 'loading'}>
        {status === 'loading' ? 'Verzenden...' : 'Verstuur →'}
      </button>
      {status === 'error' && <p className={`${cls}-form-status`}>Er ging iets mis. Probeer opnieuw of mail naar info@tigranmedia.be</p>}
    </form>
  );
}
