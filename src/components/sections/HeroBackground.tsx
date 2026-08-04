const NODES = [
  { x: 80, y: 90, r: 3 },
  { x: 220, y: 40, r: 2 },
  { x: 340, y: 140, r: 4 },
  { x: 470, y: 60, r: 2.5 },
  { x: 600, y: 160, r: 3 },
  { x: 720, y: 70, r: 2 },
  { x: 860, y: 130, r: 3.5 },
  { x: 980, y: 50, r: 2 },
  { x: 1100, y: 150, r: 3 },
  { x: 1220, y: 80, r: 2.5 },
  { x: 1340, y: 160, r: 3 },
  { x: 150, y: 220, r: 2 },
  { x: 420, y: 250, r: 2.5 },
  { x: 680, y: 230, r: 2 },
  { x: 940, y: 260, r: 2.5 },
  { x: 1180, y: 220, r: 2 },
];

const EDGES: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
  [7, 8],
  [8, 9],
  [9, 10],
  [0, 11],
  [2, 12],
  [4, 12],
  [6, 13],
  [8, 14],
  [10, 15],
  [12, 13],
  [13, 14],
];

export default function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-hex-grid bg-[length:48px_48px] opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_0%,transparent_75%)]" />

      <svg
        className="absolute left-1/2 top-0 h-[420px] w-[1400px] -translate-x-1/2 opacity-70"
        viewBox="0 0 1400 300"
        fill="none"
      >
        <defs>
          <filter id="node-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            stroke="#E8262A"
            strokeOpacity={0.25}
            strokeWidth={1}
          />
        ))}

        {NODES.map((node, i) => (
          <circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="#E8262A"
            filter="url(#node-glow)"
            className="animate-[fadeIn_2s_ease-in-out_infinite_alternate]"
            style={{ animationDelay: `${(i % 5) * 0.4}s` }}
          />
        ))}
      </svg>

      <div className="absolute inset-x-0 top-0 h-[600px] bg-red-glow" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-b from-transparent to-ink" />
    </div>
  );
}
