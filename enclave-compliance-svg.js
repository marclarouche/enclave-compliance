<div className="flex items-center gap-2">
  <svg className="h-10 w-auto" viewBox="0 0 540 80" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <style>{`
        .hex-stroke { stroke: #006680; stroke-width: 4; fill: none; stroke-linejoin: round; }
        .integrated-e { font-family: 'Rockwell', 'Georgia', 'Cambria', serif; font-size: 34px; font-weight: bold; fill: #006680; }
        .suffix-text { font-family: 'Rockwell', 'Georgia', 'Cambria', serif; font-size: 32px; font-weight: bold; fill: #1A1A1A; letter-spacing: -0.5px; }
      `}</style>
    </defs>

    {/* Hexagon containing leading E */}
    <g transform="translate(10, 8)">
      <polygon points="32,2 58,17 58,47 32,62 6,47 6,17" className="hex-stroke" />
      <text x="32" y="44" textAnchor="middle" className="integrated-e">E</text>
    </g>

    {/* Remaining text */}
    <text x="72" y="49" className="suffix-text">nclave-Compliance</text>
  </svg>
</div>