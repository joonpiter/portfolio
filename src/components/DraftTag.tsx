/** Marks draft content in `npm run dev`. Drafts never reach production (see
 *  src/data/drafts.ts), so this tag is never seen on the live site. */
export default function DraftTag({ show }: { show?: boolean }) {
  if (!show) return null;
  return (
    <span className="ml-2 inline-block rounded bg-card px-1.5 py-0.5 align-middle font-sans text-[10.5px] font-medium uppercase tracking-wide text-muted">
      Draft
    </span>
  );
}
