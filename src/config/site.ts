/**
 * Site configuration — non-secret values used at build time.
 * Edit values here and rebuild to deploy.
 */
export const siteConfig = {
  /**
   * Direct booking link (Cal.com / Calendly / TidyCal).
   * Empty string = "Gratis Discovery Call" CTAs link to #contact (form).
   * Set this to enable single-click booking and reduce friction.
   * Example: 'https://cal.com/tigranmedia/discovery'
   */
  calUrl: 'https://cal.com/tigranmedia/discovery-call',

  /** Phone number used in tel: links and visible CTAs */
  phone: '+32474114899',
  phoneDisplay: '+32 474 11 48 99',

  /** Primary contact email */
  email: 'info@tigranmedia.be',

  /**
   * Social profiles (used in Schema.org sameAs).
   * Empty entries are filtered out.
   */
  socials: {
    linkedin: 'https://www.linkedin.com/in/tigran-khachatryan-01b67a361/',
    instagram: 'https://www.instagram.com/tigran.media',
    facebook: '',
    googleMapsUrl: 'https://maps.app.goo.gl/B8Sr9GkisvR26wWP7',
  },
};

/** Returns array of non-empty social URLs for use in JSON-LD sameAs */
export function getSameAs(): string[] {
  return Object.values(siteConfig.socials).filter((url) => url.length > 0);
}

/** True if a calendar booking URL is configured */
export const hasDirectBooking = siteConfig.calUrl.length > 0;

/** Returns the booking URL if configured, otherwise the contact-form anchor */
export function getDiscoveryCallHref(): string {
  return siteConfig.calUrl || '#contact';
}
