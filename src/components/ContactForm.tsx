'use client';
import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';

interface Props { cls: string; }

const VALID_PAKKETTEN = ['Starter', 'Groei', 'Full Service', 'Op Maat'];

const COMMON_TYPOS: Record<string, string> = {
  'gmial.com': 'gmail.com', 'gmal.com': 'gmail.com', 'gmail.co': 'gmail.com', 'gmail.cm': 'gmail.com',
  'hotmial.com': 'hotmail.com', 'hotmal.com': 'hotmail.com', 'hotmail.co': 'hotmail.com',
  'outlok.com': 'outlook.com', 'outloo.com': 'outlook.com',
  'telnet.be': 'telenet.be', 'telent.be': 'telenet.be',
  'skynt.be': 'skynet.be', 'sknet.be': 'skynet.be',
};

function suggestEmail(email: string): string | null {
  const at = email.lastIndexOf('@');
  if (at < 0) return null;
  const domain = email.slice(at + 1).toLowerCase();
  const fix = COMMON_TYPOS[domain];
  return fix ? email.slice(0, at + 1) + fix : null;
}

export default function ContactForm({ cls }: Props) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [emailHint, setEmailHint] = useState<string | null>(null);
  const [submittedName, setSubmittedName] = useState<string>('');
  const [pakket, setPakket] = useState<string>('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const initial = params.get('pakket') ?? '';
    if (initial && VALID_PAKKETTEN.includes(initial)) setPakket(initial);
  }, []);

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const v = e.target.value.trim();
    setEmailHint(v ? suggestEmail(v) : null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const fd = new FormData(e.currentTarget);
    const naam = String(fd.get('naam') ?? '').trim();
    setSubmittedName(naam);
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
    const firstName = submittedName.split(' ')[0] || '';
    return (
      <div className={`${cls}-form-success`}>
        <p className={`${cls}-form-status`}>
          Bedankt{firstName ? `, ${firstName}` : ''}. Ik bel of mail u binnen 24 uur terug
          {firstName ? ' — vandaag nog als het kan' : ''}.
        </p>
        <p className={`${cls}-form-status-sub`}>
          Intussen — bekijk hoe wij voor anderen werken:&nbsp;
          <a href="/projecten/forest-bean/" target="_blank" rel="noopener noreferrer">Forest &amp; Bean</a>
          {' · '}
          <a href="/projecten/dakwerken/" target="_blank" rel="noopener noreferrer">Van Damme Dakwerken</a>
        </p>
        <p className={`${cls}-form-status-sub`}>
          Of bel direct: <a href={`tel:${siteConfig.phone}`}>{siteConfig.phoneDisplay}</a>
        </p>
      </div>
    );
  }

  return (
    <form className={`${cls}-form`} onSubmit={handleSubmit}>
      <input type="text" name="honeypot" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <div className={`${cls}-field form-field`}><label htmlFor={`${cls}-naam`}>Naam</label><input id={`${cls}-naam`} type="text" name="naam" placeholder="Jan Janssen" required /></div>
      <div className={`${cls}-field form-field`}><label htmlFor={`${cls}-bedrijf`}>Bedrijf</label><input id={`${cls}-bedrijf`} type="text" name="bedrijf" placeholder="Jouw Bedrijf BV" /></div>
      <div className={`${cls}-field form-field`}>
        <label htmlFor={`${cls}-email`}>E-mail</label>
        <input
          id={`${cls}-email`}
          type="email"
          name="email"
          placeholder="jan@bedrijf.be"
          required
          onBlur={handleEmailBlur}
          onChange={() => emailHint && setEmailHint(null)}
        />
        {emailHint && (
          <p className={`${cls}-email-hint`}>
            Bedoelde u <button type="button" onClick={(e) => { const input = (e.currentTarget.closest('form')?.querySelector(`#${cls}-email`)) as HTMLInputElement | null; if (input) { input.value = emailHint; setEmailHint(null); } }}>{emailHint}</button>?
          </p>
        )}
      </div>
      <div className={`${cls}-field form-field`}>
        <label htmlFor={`${cls}-pakket`}>Pakket interesse</label>
        <select id={`${cls}-pakket`} name="pakket" value={pakket} onChange={(e) => setPakket(e.target.value)}>
          <option value="" disabled>Selecteer pakket</option>
          <option value="Starter">Starter</option>
          <option value="Groei">Groei</option>
          <option value="Full Service">Full Service</option>
          <option value="Op Maat">Op Maat</option>
        </select>
      </div>
      <div className={`${cls}-field form-field`}>
        <label htmlFor={`${cls}-bericht`}>Bericht</label>
        <textarea
          id={`${cls}-bericht`}
          name="bericht"
          rows={5}
          placeholder="Wat wilt u maken? Wanneer moet het live? Heeft u al een budget in gedachten? Bestaande site (URL)?"
        />
      </div>
      <button type="submit" className={`${cls}-submit`} disabled={status === 'loading'}>
        {status === 'loading' ? 'Verzenden...' : 'Verstuur →'}
      </button>
      {status === 'error' && <p className={`${cls}-form-status`}>Er ging iets mis. Probeer opnieuw of mail naar info@tigranmedia.be</p>}
    </form>
  );
}
