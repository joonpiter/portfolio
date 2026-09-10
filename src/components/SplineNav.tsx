"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Bridges "Open Link" clicks inside the Spline scene to the Next.js router.
 *
 * Spline fires a link action one of two ways:
 *   • same-tab   → window.location.assign(url)   (works on its own; a hard nav)
 *   • new tab/win → window.open(url, "_blank")   (often silently eaten by the
 *                                                 popup blocker in an embed,
 *                                                 because the call is several
 *                                                 async hops from the click)
 *
 * So while the scene is mounted we wrap window.open: a URL on this site becomes
 * a soft client-side navigation, anything external falls through to the real
 * window.open. A scene can also drive navigation explicitly by posting
 *   window.postMessage({ type: "spline-nav", href: "/experience" },
 *                      window.location.origin)
 *
 * Renders nothing.
 */
export function SplineNav() {
  const router = useRouter();

  // Explicit postMessage bridge. Only same-origin messages carrying an
  // internal path are honoured.
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      const data = e.data as { type?: string; href?: string };
      if (data?.type !== "spline-nav" || typeof data.href !== "string") return;
      if (!data.href.startsWith("/")) return;
      router.push(data.href);
    };
    window.addEventListener("message", onMsg);
    return () => window.removeEventListener("message", onMsg);
  }, [router]);

  // Intercept the window.open Spline uses for "Open Link" actions.
  useEffect(() => {
    const nativeOpen = window.open.bind(window);

    window.open = (...args: Parameters<typeof window.open>) => {
      const raw = args[0];
      const url = typeof raw === "string" ? raw : raw?.toString();
      if (url) {
        try {
          const target = new URL(url, window.location.href);
          if (target.origin === window.location.origin) {
            router.push(target.pathname + target.search + target.hash);
            return null;
          }
        } catch {
          // not a parseable URL — let the native handler deal with it
        }
      }
      return nativeOpen(...args);
    };

    return () => {
      window.open = nativeOpen;
    };
  }, [router]);

  return null;
}
