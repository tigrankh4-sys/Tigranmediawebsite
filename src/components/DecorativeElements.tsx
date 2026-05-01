export function DividerStar() {
  return (
    <svg
      viewBox="0 0 480 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="none"
      style={{ width: '100%', maxWidth: 480, height: 24, display: 'block', margin: '0 auto' }}
      aria-hidden="true"
    >
      <line x1="0" y1="12" x2="220" y2="12" strokeWidth="1" />
      <g transform="translate(240 12)" strokeWidth="1.2" strokeLinecap="round">
        <line x1="-6" y1="0" x2="6" y2="0" />
        <line x1="0" y1="-6" x2="0" y2="6" />
        <line x1="-4.2" y1="-4.2" x2="4.2" y2="4.2" />
        <line x1="-4.2" y1="4.2" x2="4.2" y2="-4.2" />
      </g>
      <line x1="260" y1="12" x2="480" y2="12" strokeWidth="1" />
    </svg>
  );
}

export function Ticker() {
  return (
    <div style={{ width: '100%', overflow: 'hidden', color: 'rgba(240,235,224,0.35)' }}>
      <svg
        viewBox="0 0 960 60"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 60, display: 'block' }}
        aria-hidden="true"
        preserveAspectRatio="xMidYMid meet"
      >
        <line x1="0" y1="1" x2="960" y2="1" stroke="currentColor" strokeWidth="1" />
        <line x1="0" y1="59" x2="960" y2="59" stroke="currentColor" strokeWidth="1" />
        <g fontFamily="'DM Mono', monospace" fontSize="11" fill="currentColor" letterSpacing="4">
          <text x="28" y="36">DESIGN</text>
          <text x="148" y="36">✦</text>
          <text x="176" y="36">BUILD</text>
          <text x="272" y="36">✦</text>
          <text x="300" y="36">LAUNCH</text>
          <text x="420" y="36">✦</text>
          <text x="448" y="36">REPEAT</text>
          <text x="568" y="36">✦</text>
          <text x="596" y="36">DESIGN</text>
          <text x="716" y="36">✦</text>
          <text x="744" y="36">BUILD</text>
          <text x="840" y="36">✦</text>
          <text x="868" y="36">LAUNCH</text>
        </g>
      </svg>
    </div>
  );
}
