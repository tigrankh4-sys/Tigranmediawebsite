import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden',
  description: 'Algemene voorwaarden van Tigran Media voor webdesign-opdrachten — offertes, betalingstermijnen, oplevering, intellectuele eigendom en aansprakelijkheid.',
  alternates: { canonical: 'https://tigranmedia.be/algemene-voorwaarden/' },
  robots: { index: true, follow: true },
};

export default function AlgemeneVoorwaarden() {
  return (
    <main className="legal-page">
      <nav className="legal-nav">
        <a href="/"><img src="/logo.svg" alt="Tigran Media" width={123} height={28} /></a>
      </nav>
      <article className="legal-content">
        <h1>Algemene Voorwaarden</h1>
        <p className="legal-meta">Laatst bijgewerkt: 2 mei 2026</p>

        <h2>1. Identificatie</h2>
        <p>Tigran Media is een eenmanszaak gevestigd in Turnhout, België. BTW BE1035.278.921. Contact: info@tigranmedia.be — +32 474 11 48 99.</p>

        <h2>2. Toepassing</h2>
        <p>Deze voorwaarden gelden voor elke offerte, opdracht en overeenkomst tussen Tigran Media en de klant. Afwijkende voorwaarden van de klant zijn enkel geldig na schriftelijke aanvaarding door Tigran Media.</p>

        <h2>3. Offertes</h2>
        <p>Offertes zijn 30 dagen geldig vanaf de offertedatum, tenzij anders vermeld. De opdracht is pas gegund na schriftelijk akkoord van de klant en betaling van de aanbetaling.</p>

        <h2>4. Prijzen en betaling</h2>
        <p>Alle prijzen zijn exclusief BTW (21%). De betaling verloopt in twee schijven: 50% aanbetaling bij akkoord en 50% bij oplevering. Facturen zijn betaalbaar binnen 14 kalenderdagen.</p>
        <p>Bij laattijdige betaling is van rechtswege en zonder ingebrekestelling een verwijlintrest van 8% per jaar verschuldigd, vermeerderd met een forfaitaire schadevergoeding van 10% van het factuurbedrag (minimum €40).</p>

        <h2>5. Levering en termijnen</h2>
        <p>Tigran Media streeft naar oplevering binnen 7 werkdagen na ontvangst van alle aangeleverde inhoud (teksten, beelden, branding). Termijnen zijn indicatief — vertraging door late aanlevering door de klant valt buiten verantwoordelijkheid van Tigran Media.</p>

        <h2>6. Aanlevering door de klant</h2>
        <p>De klant levert teksten, beelden, logo en alle benodigde inhoud aan in een gangbaar digitaal formaat. Tigran Media is niet verantwoordelijk voor de juistheid van aangeleverde inhoud.</p>

        <h2>7. Revisierondes</h2>
        <p>Het aantal inbegrepen revisierondes wordt vastgelegd in de offerte. Bijkomende revisies worden gefactureerd aan een uurtarief van €75 (excl. BTW).</p>

        <h2>8. Intellectuele eigendom</h2>
        <p>Na volledige betaling van de factuur draagt Tigran Media de gebruiksrechten op de geleverde website over aan de klant. De broncode (Next.js project) wordt aangeleverd in een eigen Git-repository van de klant.</p>
        <p>Tigran Media behoudt het recht om het werk te vermelden in zijn portfolio en in commerciële communicatie, tenzij schriftelijk anders overeengekomen.</p>

        <h2>9. Hosting en domein</h2>
        <p>Hosting (AWS) en domeinregistratie zijn niet inbegrepen in de basisprijs tenzij expliciet vermeld. De klant blijft eigenaar van zijn domeinnaam en hostingaccount.</p>

        <h2>10. Aansprakelijkheid</h2>
        <p>Tigran Media is niet aansprakelijk voor indirecte schade, gederfde winst, verlies van data of bedrijfsonderbreking. De totale aansprakelijkheid is in elk geval beperkt tot het bedrag van de uitgevoerde opdracht.</p>

        <h2>11. Garantie</h2>
        <p>Tigran Media garandeert technisch correct werk gedurende 30 dagen na oplevering. Bugs en fouten in de geleverde code worden in deze periode kosteloos hersteld. Wijzigingen aan de inhoud of nieuwe functionaliteiten vallen hier niet onder.</p>

        <h2>12. Annulering</h2>
        <p>Bij annulering door de klant na akkoord blijft de aanbetaling verworven. Reeds geleverd werk wordt aanvullend gefactureerd op uurbasis.</p>

        <h2>13. Geheimhouding</h2>
        <p>Beide partijen behandelen vertrouwelijke informatie van de andere partij als zodanig en delen deze niet met derden zonder schriftelijke toestemming.</p>

        <h2>14. Toepasselijk recht en bevoegde rechtbank</h2>
        <p>Op deze overeenkomst is uitsluitend Belgisch recht van toepassing. Geschillen worden voorgelegd aan de rechtbanken van het arrondissement Antwerpen, afdeling Turnhout.</p>

        <p className="legal-back"><a href="/">← Terug naar Tigran Media</a></p>
      </article>
    </main>
  );
}
