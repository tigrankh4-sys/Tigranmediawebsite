const mono = "'DM Mono', ui-monospace, monospace";
const serif = "'Cormorant Garamond', Georgia, serif";

export function DividerStar() {
  return (
    <svg viewBox="0 0 480 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" aria-hidden="true" style={{ width: '100%', maxWidth: 480, height: 24, display: 'block', margin: '0 auto' }}>
      <line x1="0" y1="12" x2="220" y2="12" strokeWidth="1" />
      <g transform="translate(240 12)" strokeWidth="1.2" strokeLinecap="round">
        <line x1="-6" y1="0" x2="6" y2="0" /><line x1="0" y1="-6" x2="0" y2="6" />
        <line x1="-4.2" y1="-4.2" x2="4.2" y2="4.2" /><line x1="-4.2" y1="4.2" x2="4.2" y2="-4.2" />
      </g>
      <line x1="260" y1="12" x2="480" y2="12" strokeWidth="1" />
    </svg>
  );
}

export function DividerDiamonds() {
  return (
    <svg viewBox="0 0 480 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" aria-hidden="true" style={{ width: '100%', maxWidth: 480, height: 24, display: 'block', margin: '0 auto' }}>
      <line x1="0" y1="12" x2="170" y2="12" strokeWidth="1" />
      <g fill="currentColor" stroke="none">
        <rect x="186" y="8" width="8" height="8" transform="rotate(45 190 12)" />
        <rect x="236" y="8" width="8" height="8" transform="rotate(45 240 12)" />
        <rect x="286" y="8" width="8" height="8" transform="rotate(45 290 12)" />
      </g>
      <line x1="310" y1="12" x2="480" y2="12" strokeWidth="1" />
    </svg>
  );
}

export function DividerDouble() {
  return (
    <svg viewBox="0 0 480 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" aria-hidden="true" style={{ width: '100%', maxWidth: 480, height: 24, display: 'block', margin: '0 auto' }}>
      <line x1="0" y1="9" x2="480" y2="9" strokeWidth="1" />
      <line x1="0" y1="15" x2="480" y2="15" strokeWidth="0.5" />
    </svg>
  );
}

export function Ornament() {
  return (
    <svg viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" strokeLinecap="round" aria-hidden="true" style={{ width: 120, height: 40, display: 'block' }}>
      <line x1="6" y1="20" x2="44" y2="20" strokeWidth="1" />
      <circle cx="50" cy="20" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="60" cy="20" r="3.5" />
      <circle cx="70" cy="20" r="2.5" fill="currentColor" stroke="none" />
      <line x1="76" y1="20" x2="114" y2="20" strokeWidth="1" />
    </svg>
  );
}

export function SealEst() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 160, height: 160, display: 'block' }}>
      <defs>
        <path id="seal-top" d="M 22 100 a 78 78 0 1 1 156 0" />
        <path id="seal-bot" d="M 28 116 a 72 72 0 0 0 144 0" />
      </defs>
      <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="100" cy="100" r="78" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <text fontFamily={mono} fontSize="11" letterSpacing="3" fill="currentColor">
        <textPath href="#seal-top" startOffset="50%" textAnchor="middle">— ORIGINAL WORK —</textPath>
      </text>
      <text fontFamily={mono} fontSize="9" letterSpacing="3" fill="currentColor">
        <textPath href="#seal-bot" startOffset="50%" textAnchor="middle">SINCE MMXXIV</textPath>
      </text>
      <g transform="translate(100 100)" textAnchor="middle" fill="currentColor" fontFamily={serif}>
        <text y="-6" fontSize="14" letterSpacing="2">EST.</text>
        <text y="22" fontSize="38" fontStyle="italic">2025</text>
      </g>
    </svg>
  );
}

export function StampApproved() {
  return (
    <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 200, height: 120, display: 'block' }}>
      <g transform="rotate(-6 100 60)" fill="none" stroke="currentColor">
        <rect x="14" y="14" width="172" height="92" strokeWidth="2" />
        <rect x="20" y="20" width="160" height="80" strokeWidth="0.6" />
        <text x="100" y="55" textAnchor="middle" fontFamily={serif} fontSize="32" fill="currentColor" stroke="none" letterSpacing="3">APPROVED</text>
        <text x="100" y="78" textAnchor="middle" fontFamily={mono} fontSize="10" fill="currentColor" stroke="none" letterSpacing="4">— BY THE STUDIO —</text>
        <text x="100" y="93" textAnchor="middle" fontFamily={mono} fontSize="8" fill="currentColor" stroke="none" letterSpacing="2">№ 014 / 01·V·MMXXVI</text>
      </g>
    </svg>
  );
}

export function NumberMarker({ n = "01", label = "STEP" }: { n?: string; label?: string }) {
  return (
    <svg viewBox="0 0 220 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 220, height: 100, display: 'block' }}>
      <text x="0" y="64" fontFamily={serif} fontSize="72" fill="currentColor">{n}</text>
      <line x1="0" y1="78" x2="220" y2="78" stroke="currentColor" strokeWidth="1" />
      <text x="0" y="94" fontFamily={mono} fontSize="10" fill="currentColor" letterSpacing="3">{label}</text>
    </svg>
  );
}

export function ArrowLong() {
  return (
    <svg viewBox="0 0 240 24" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" strokeLinecap="square" aria-hidden="true" style={{ width: 240, height: 24, display: 'block' }}>
      <line x1="0" y1="12" x2="222" y2="12" strokeWidth="1" />
      <polyline points="210,4 226,12 210,20" strokeWidth="1" strokeLinejoin="miter" />
    </svg>
  );
}

export function ArrowDiag() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" aria-hidden="true" style={{ width: 80, height: 80, display: 'block' }}>
      <line x1="14" y1="66" x2="64" y2="16" strokeWidth="1.2" />
      <polyline points="46,16 64,16 64,34" strokeWidth="1.2" />
    </svg>
  );
}

export function ArrowCurved() {
  return (
    <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" aria-hidden="true" style={{ width: 200, height: 80, display: 'block' }}>
      <path d="M 6 60 Q 100 -10 184 50" strokeWidth="1.2" />
      <polyline points="174,38 186,52 172,58" strokeWidth="1.2" strokeLinejoin="miter" />
    </svg>
  );
}

export function AsteriskBig() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 80, height: 80, display: 'block' }}>
      <text x="40" y="62" textAnchor="middle" fontFamily={serif} fontSize="72" fill="currentColor">*</text>
    </svg>
  );
}

export function AsteriskFlower() {
  return (
    <svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" aria-hidden="true" style={{ width: 80, height: 80, display: 'block' }}>
      <g transform="translate(40 40)">
        {[0, 30, 60, 90, 120, 150].map((a, i) => (
          <line key={i} x1="0" y1="-26" x2="0" y2="26" transform={`rotate(${a})`} />
        ))}
        <circle cx="0" cy="0" r="3" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

export function QuoteOpen() {
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: 80, height: 80, display: 'block' }}>
      <text x="6" y="90" fontFamily={serif} fontSize="140" fill="currentColor" fontStyle="italic">&ldquo;</text>
    </svg>
  );
}

export function CornerFrame({ children }: { children?: React.ReactNode }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" strokeWidth="1" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <polyline points="6,30 6,6 30,6" />
        <polyline points="190,6 214,6 214,30" />
        <polyline points="214,110 214,134 190,134" />
        <polyline points="30,134 6,134 6,110" />
      </svg>
      {children}
    </div>
  );
}

export function UnderlineSquiggle() {
  return (
    <svg viewBox="0 0 240 20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" strokeLinecap="round" aria-hidden="true" style={{ width: '100%', maxWidth: 240, height: 20, display: 'block' }}>
      <path d="M 4 12 Q 24 2 44 12 T 84 12 T 124 12 T 164 12 T 204 12 T 236 12" strokeWidth="1.4" />
    </svg>
  );
}

export function UnderlineDouble() {
  return (
    <svg viewBox="0 0 240 20" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" aria-hidden="true" style={{ width: '100%', maxWidth: 240, height: 20, display: 'block' }}>
      <line x1="0" y1="8" x2="232" y2="8" strokeWidth="1" />
      <line x1="0" y1="13" x2="180" y2="13" strokeWidth="0.6" />
      <circle cx="236" cy="8" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Ticker() {
  return (
    <svg viewBox="0 0 480 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ width: '100%', height: 60, display: 'block' }}>
      <line x1="0" y1="2" x2="480" y2="2" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="58" x2="480" y2="58" stroke="currentColor" strokeWidth="1" />
      <g fontFamily={mono} fontSize="11" fill="currentColor" letterSpacing="4">
        <text x="14" y="36">DESIGN</text>
        <text x="114" y="36">★</text>
        <text x="136" y="36">BUILD</text>
        <text x="216" y="36">★</text>
        <text x="238" y="36">LAUNCH</text>
        <text x="346" y="36">★</text>
        <text x="368" y="36">REPEAT</text>
      </g>
    </svg>
  );
}

export function PriceTag() {
  return (
    <svg viewBox="0 0 200 90" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" aria-hidden="true" style={{ width: 180, height: 81, display: 'block' }}>
      <path d="M 30 8 L 188 8 Q 196 8 196 16 L 196 74 Q 196 82 188 82 L 30 82 L 4 45 Z" strokeWidth="1" />
      <circle cx="22" cy="45" r="4" />
      <text x="110" y="42" textAnchor="middle" fontFamily={mono} fontSize="10" fill="currentColor" stroke="none" letterSpacing="3">VANAF</text>
      <text x="110" y="68" textAnchor="middle" fontFamily={serif} fontSize="22" fontStyle="italic" fill="currentColor" stroke="none">€500</text>
    </svg>
  );
}

export function Checkmark() {
  return (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" aria-hidden="true" style={{ width: 24, height: 24, display: 'block', flexShrink: 0 }}>
      <rect x="4" y="4" width="32" height="32" strokeWidth="1" />
      <polyline points="11,21 18,28 30,13" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter" />
    </svg>
  );
}

export function RouteDots() {
  return (
    <svg viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" aria-hidden="true" style={{ width: 240, height: 40, display: 'block' }}>
      <circle cx="10" cy="20" r="4" fill="currentColor" />
      <line x1="20" y1="20" x2="220" y2="20" strokeWidth="1" strokeDasharray="2 6" />
      <circle cx="230" cy="20" r="4" />
    </svg>
  );
}
