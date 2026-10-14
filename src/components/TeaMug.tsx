/** A little mug of tea with the bag's tag hanging over the rim and steam
 *  drifting up. The steam and tag motion live in globals.css (.mug-steam,
 *  .mug-tag) so they can switch off under prefers-reduced-motion. */
export default function TeaMug({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="20 6 120 130"
      className={className}
      role="img"
      aria-label="A steaming mug of tea"
    >
      {/* steam */}
      <g
        fill="none"
        stroke="var(--muted)"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path className="mug-steam" d="M62 56c-5-6 5-10 0-16s5-10 0-16" />
        <path
          className="mug-steam"
          style={{ animationDelay: "0.9s" }}
          d="M75 52c-5-6 5-10 0-16s5-10 0-16"
        />
        <path
          className="mug-steam"
          style={{ animationDelay: "1.8s" }}
          d="M88 56c-5-6 5-10 0-16s5-10 0-16"
        />
      </g>

      {/* handle: a thick ink stroke with a thinner card stroke on top reads
          as an outlined loop */}
      <path
        d="M106 80h8a15 15 0 0 1 0 30h-8"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M106 80h8a15 15 0 0 1 0 30h-8"
        fill="none"
        stroke="var(--card)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* body */}
      <path
        d="M42 68v54a10 10 0 0 0 10 10h46a10 10 0 0 0 10-10V68"
        fill="var(--card)"
        stroke="var(--foreground)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <rect x="43.25" y="94" width="63.5" height="9" fill="var(--maroon)" />

      {/* tea, seen over the rim */}
      <ellipse
        cx="75"
        cy="68"
        rx="33"
        ry="6"
        fill="#b9844f"
        stroke="var(--foreground)"
        strokeWidth="2.5"
      />

      {/* tea bag string over the rim, tag swinging outside the mug */}
      <path
        d="M60 69Q52 56 44 63Q36 70 33 92"
        fill="none"
        stroke="var(--foreground)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <g className="mug-tag">
        <rect
          x="26"
          y="91"
          width="14"
          height="17"
          rx="2"
          fill="var(--maroon)"
          stroke="var(--foreground)"
          strokeWidth="1.5"
        />
        <circle cx="33" cy="95" r="1.4" fill="var(--card)" />
      </g>
    </svg>
  );
}
