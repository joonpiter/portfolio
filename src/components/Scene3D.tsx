"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { SplineNav } from "./SplineNav";

// Spline's <spline-viewer> web component, loaded at runtime from Spline's
// own CDN. Unlike the @splinetool/react-spline package, this isn't run
// through webpack/Turbopack at all, so it doesn't hit the bundler asset
// resolution issues that package's compiled bundle has for its optional
// DRACO/boolean decoders.
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
      <SplineNav />
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@2.0.43/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      {/*
        Break out of the page's narrow max-w-3xl text column so the scene
        can actually read as a big centerpiece (the reference's room fills
        most of the viewport width, not a narrow text column).
      */}
      <div className="relative left-1/2 w-screen -translate-x-1/2">
        <div
          ref={boxRef}
          style={{
            // Pull the whole block up so it tucks under the text above
            // instead of leaving a seam. Tune the -3rem.
            marginTop: "-3rem",
            aspectRatio: "16 / 10",
            width: "100%",
            maxWidth: "1120px",
            marginInline: "auto",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/*
            The scene's own camera framing leaves empty headroom above the
            room, which read as a big gap under the text. Overscanning the
            viewer (taller than the box, plus a scale-up) and shifting it up
            crops that empty space out and lets the room fill the frame edge
            to edge. `top` is a percentage of this box's height, so it tracks
            the box as it resizes.
          */}
          <spline-viewer
            url="https://prod.spline.design/MW-bcCyWXY4aSNeD/scene.splinecode"
            style={{
              position: "absolute",
              left: 0,
              top: "-33%",
              display: "block",
              width: "100%",
              height: "138%",
              transform: "scale(1.12)",
              transformOrigin: "center top",
            }}
          />
        </div>
      </div>
    </>
  );
}
