export function PinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 14.5V21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="9" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function ArrowRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Bow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className}>
      <path
        d="M30 20 8 6c-4 4-4 22 0 26Z"
        fill="currentColor"
        stroke="#00000022"
        strokeWidth="1"
      />
      <path
        d="M30 20 52 6c4 4 4 22 0 26Z"
        fill="currentColor"
        stroke="#00000022"
        strokeWidth="1"
      />
      <circle cx="30" cy="20" r="6" fill="currentColor" stroke="#00000022" strokeWidth="1" />
    </svg>
  );
}

export function Star({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className}>
      <path
        d="M20 4c1.2 6.8 3 10.9 6.5 14.5S34.8 22.8 36 24c-6.8 1.2-10.9 3-14.5 6.5S22.8 38.8 20 40c-1.2-6.8-3-10.9-6.5-14.5S5.2 22.8 4 24c6.8-1.2 10.9-3 14.5-6.5S30.8 5.2 20 4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Heart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className}>
      <path
        d="M12 21s-7.5-4.6-10-9.3C.4 8 2.4 4 6.4 4c2 0 3.7 1.1 4.6 2.7C11.9 5.1 13.6 4 15.6 4c4 0 6 4 4.4 7.7C17.5 16.4 12 21 12 21Z"
        fill="currentColor"
      />
    </svg>
  );
}
