"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

// Spline's <spline-viewer> web component, loaded at runtime from Spline's
// own CDN. Unlike the @splinetool/react-spline package, this isn't run
// through webpack/Turbopack at all, so it doesn't hit the bundler asset
// resolution issues that package's compiled bundle has for its optional
// DRACO/boolean decoders.

// Spline serves scene.splinecode with no Cache-Control header, so browsers
// guess how long to keep it and can hold an old copy for hours after you
// republish. Changing this value changes the URL, which forces every browser
// to fetch the new scene. Bump it (any new string works) each time you
// republish the room in Spline. Because the URL no longer ends in
// ".splinecode", the viewer logs "only accepts .splinecode files" in the
// console. That warning is harmless: it still loads the file normally.
const SCENE_VERSION = "2026-09-28.2";
const SCENE_URL = `https://prod.spline.design/MW-bcCyWXY4aSNeD/scene.splinecode?v=${SCENE_VERSION}`;

export default function Scene3D() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    // Without this, scrolling the mouse wheel over the embed gets captured
    // by Spline's own orbit/zoom controls instead of scrolling the page —
    // a visitor just trying to keep reading gets stuck zoomed into the
    // scene. Intercepting on the capture phase stops it before it ever
    // reaches spline-viewer's internal listener.
    const blockWheelCapture = (e: WheelEvent) => e.stopImmediatePropagation();
    box.addEventListener("wheel", blockWheelCapture, { capture: true });
    return () =>
      box.removeEventListener("wheel", blockWheelCapture, { capture: true });
  }, []);

  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@2.0.43/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      {/*
        Break out of the page's narrow max-w-3xl text column so the box can
        actually reach its max-width. This only repositions/widens the box —
        the viewer still fills it 1:1 and the scene's HTML hotspot layer (a
        sibling <iframe> in the viewer's shadow DOM) stays pinned to it, so
        alignment is unaffected. Framing itself is the Spline camera's job.
      */}
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <div
          ref={boxRef}
          style={{
            // Small negative top margin tucks the box up under the caption
            // above without cropping into the room. Tune the -1.5rem.
            margin: "-1.5rem auto 0",
            aspectRatio: "5 / 4",
            width: "100%",
            maxWidth: "1300px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <spline-viewer
            url={SCENE_URL}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              // Crop the scene's remaining headroom. A transform on the viewer
              // moves the canvas AND the hotspot iframe as one, so the
              // hotspots stay put relative to the render. Dial toward
              // scale(1) once the Spline camera fully covers the frame.
              transform: "scale(1.16) translateY(-9%)",
              transformOrigin: "center top",
            }}
          />
        </div>
      </div>
    </>
  );
}
