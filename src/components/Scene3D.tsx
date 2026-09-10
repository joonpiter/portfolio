"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

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
      <Script
        type="module"
        src="https://unpkg.com/@splinetool/viewer@2.0.43/build/spline-viewer.js"
        strategy="afterInteractive"
      />
      {/*
        The viewer fills this box exactly — framing is handled by the Spline
        camera. No CSS transform here: the scene's HTML hotspot layer is a
        sibling <iframe> in the viewer's shadow DOM, and any reframing that
        isn't tuned against would slide the render out from under the hotspots.
      */}
      <div
        ref={boxRef}
        style={{
          aspectRatio: "5 / 4",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <spline-viewer
          url="https://prod.spline.design/MW-bcCyWXY4aSNeD/scene.splinecode"
          style={{ display: "block", width: "100%", height: "100%" }}
        />
      </div>
    </>
  );
}
