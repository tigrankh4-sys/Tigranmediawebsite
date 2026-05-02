import FooterAccordions from './FooterAccordions';

export default function Footer() {
  return (
    <footer className="tm-footer">
      <div className="tm-footer-top">
        <span className="tm-footer-brand">Tigran Media</span>
        <nav className="tm-footer-nav">
          <a href="/#werkwijze">Werkwijze</a>
          <a href="/#projecten">Projecten</a>
          <a href="/#prijzen">Prijzen</a>
          <a href="/#over">Over</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
      <div className="tm-footer-mid">
        <div>
          <p className="tm-footer-label">Contact</p>
          <div className="tm-footer-contact-row">
            <a href="mailto:info@tigranmedia.be">info@tigranmedia.be</a>
            <a href="tel:+32474114899">+32 474 11 48 99</a>
            <p>Ma–Vr 9:00 – 18:00</p>
            <p>Turnhout, België</p>
          </div>
        </div>
        <div>
          <p className="tm-footer-label">Regio&apos;s</p>
          <FooterAccordions />
        </div>
      </div>
      <div className="tm-footer-bottom">
        <p className="tm-footer-copy">© {new Date().getFullYear()} Tigran Media · BTW BE1035.278.921</p>
        <nav className="tm-footer-legal">
          <a href="/algemene-voorwaarden">Algemene Voorwaarden</a>
          <a href="/privacybeleid">Privacybeleid</a>
        </nav>
      </div>
    </footer>
  );
}
