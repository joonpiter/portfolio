"use client";

import { useEffect, useRef, useState } from "react";

const KEY = "profile_views";
const SESSION_KEY = "profile_view_counted";
const BASE = 35789; // starting point, pre-counter history

/**
 * A real (if humble) hit counter: it persists in the visitor's browser via
 * localStorage and ticks up once per browsing session. No backend, so the
 * number is per-device rather than global — but it genuinely moves.
 */
export default function ViewCounter() {
  const [views, setViews] = useState<number | null>(null);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return; // guard React StrictMode double-invoke
    ran.current = true;

    let stored = BASE;
    try {
      const raw = window.localStorage.getItem(KEY);
      stored = raw ? parseInt(raw, 10) || BASE : BASE;

      const countedThisSession =
        window.sessionStorage.getItem(SESSION_KEY) === "1";
      if (!countedThisSession) {
        stored += 1;
        window.localStorage.setItem(KEY, String(stored));
        window.sessionStorage.setItem(SESSION_KEY, "1");
      }
    } catch {
      // storage blocked (private mode, etc.) — just show the base
    }
    setViews(stored);
  }, []);

  return (
    <span suppressHydrationWarning>
      {(views ?? BASE).toLocaleString("en-US")}
    </span>
  );
}
