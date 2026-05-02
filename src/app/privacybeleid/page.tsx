import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacybeleid',
  description: 'Hoe Tigran Media omgaat met uw persoonsgegevens, welke data we verwerken, hoe lang we ze bewaren en uw GDPR-rechten als klant of bezoeker.',
  alternates: { canonical: 'https://tigranmedia.be/privacybeleid/' },
  robots: { index: true, follow: true },
};

export default function Privacybeleid() {
  return (
    <main className="legal-page">
      <nav className="legal-nav">
        <a href="/"><img src="/logo.svg" alt="Tigran Media" width={123} height={28} /></a>
      </nav>
      <article className="legal-content">
        <h1>Privacybeleid</h1>
        <p className="legal-meta">Laatst bijgewerkt: 2 mei 2026</p>

        <h2>Wie zijn wij</h2>
        <p>Tigran Media — eenmanszaak gevestigd in Turnhout, België. BTW BE1035.278.921. Contact: <a href="mailto:info@tigranmedia.be">info@tigranmedia.be</a> / +32 474 11 48 99.</p>

        <h2>Welke gegevens verwerken wij</h2>
        <p>Bij gebruik van het contactformulier verwerken wij: naam, bedrijfsnaam, e-mailadres en de inhoud van uw bericht. Het IP-adres van uw apparaat wordt tijdelijk verwerkt om misbruik te voorkomen (rate limiting).</p>

        <h2>Waarom verwerken wij uw gegevens</h2>
        <p>Uitsluitend om uw aanvraag te beantwoorden en, indien u akkoord gaat, een offerte op te stellen. Wij gebruiken uw gegevens niet voor marketing en delen ze niet met derden voor commerciële doeleinden.</p>

        <h2>Rechtsgrond</h2>
        <p>De verwerking gebeurt op basis van uw expliciete vraag tot contact (uitvoering van precontractuele maatregelen, art. 6.1.b GDPR).</p>

        <h2>Bewaartermijn</h2>
        <p>Niet-ondertekende offertes en aanvragen verwijderen wij na 12 maanden. Klantgegevens van actieve opdrachten houden wij bij voor de duur van het project en de wettelijke boekhoudkundige termijn (7 jaar voor facturen).</p>

        <h2>Met wie delen wij gegevens</h2>
        <p>Wij gebruiken de volgende verwerkers, allen GDPR-conform:</p>
        <ul>
          <li><strong>AWS</strong> (Amazon Web Services, EU-regio) — hosting en e-mailverzending.</li>
          <li><strong>Hostinger</strong> — e-mailprovider voor info@tigranmedia.be.</li>
        </ul>
        <p>Buiten deze partijen geven wij geen gegevens door.</p>

        <h2>Cookies</h2>
        <p>Deze website plaatst geen tracking-cookies. Wij gebruiken geen Google Analytics, Facebook Pixel of vergelijkbare scripts.</p>

        <h2>Uw rechten</h2>
        <p>U hebt recht op inzage, correctie, verwijdering en overdraagbaarheid van uw gegevens. Een verzoek mailt u naar <a href="mailto:info@tigranmedia.be">info@tigranmedia.be</a>. Wij antwoorden binnen 30 dagen.</p>
        <p>Klachten kan u richten aan de Gegevensbeschermingsautoriteit, Drukpersstraat 35, 1000 Brussel — <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer">gegevensbeschermingsautoriteit.be</a>.</p>

        <h2>Wijzigingen</h2>
        <p>Wij behouden ons het recht om dit beleid aan te passen. De meest recente versie staat altijd op deze pagina.</p>

        <p className="legal-back"><a href="/">← Terug naar Tigran Media</a></p>
      </article>
    </main>
  );
}
