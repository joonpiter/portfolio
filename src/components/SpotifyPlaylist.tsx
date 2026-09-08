import { myspace } from "@/data/content";

/**
 * MySpace-style profile song. Accepts any Spotify share link (playlist, album,
 * or track) or a bare id in `myspace.playlist` and renders the official embed.
 */
function toEmbedSrc(input: string): string | null {
  const raw = input.trim();
  // already an embed URL
  if (raw.includes("open.spotify.com/embed/")) return raw;

  let type = "playlist";
  let id = raw;

  const urlMatch = raw.match(
    /open\.spotify\.com\/(playlist|album|track|artist)\/([A-Za-z0-9]+)/
  );
  const uriMatch = raw.match(/spotify:(playlist|album|track|artist):([A-Za-z0-9]+)/);
  if (urlMatch) {
    type = urlMatch[1];
    id = urlMatch[2];
  } else if (uriMatch) {
    type = uriMatch[1];
    id = uriMatch[2];
  }

  if (!/^[A-Za-z0-9]+$/.test(id)) return null;
  return `https://open.spotify.com/embed/${type}/${id}?utm_source=generator&theme=0`;
}

export default function SpotifyPlaylist({
  compact = false,
}: {
  compact?: boolean;
}) {
  const src = toEmbedSrc(myspace.playlist);
  if (!src) return null;

  return (
    <div className="module">
      <p className="module-head">Profile Playlist</p>
      <div className="p-2">
        <iframe
          title="Isabel's playlist"
          src={src}
          width="100%"
          height={compact ? 152 : 352}
          loading="lazy"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          className="block border-0"
          style={{ borderRadius: 12 }}
        />
      </div>
    </div>
  );
}
