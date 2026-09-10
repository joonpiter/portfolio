"use client";

import { useRef, useState } from "react";
import { geoEquirectangular, geoPath, geoGraticule10 } from "d3-geo";
import { feature, mesh } from "topojson-client";
import world from "world-atlas/countries-110m.json";
import usStates from "us-atlas/states-10m.json";
import { travels, placeLabel } from "@/data/travels";

const W = 360;
const H = 180;

/* Real coastlines (Natural Earth 1:110m) on a plate-carrée projection:
   scale = W / 2π and translate = [W/2, H/2] makes 1 unit == 1 degree, so
   [lng, lat] -> [lng + 180, 90 - lat] and pins line up with the land. */
const projection = geoEquirectangular()
  .scale(W / (2 * Math.PI))
  .translate([W / 2, H / 2]);
const pathGen = geoPath(projection);

/* eslint-disable @typescript-eslint/no-explicit-any */
const w = world as any;
const LAND_PATH = pathGen(feature(w, w.objects.land) as any) || "";
const GRATICULE_PATH = pathGen(geoGraticule10() as any) || "";
// interior borders only (drop the coastline the outline already draws)
const COUNTRY_BORDERS =
  pathGen(mesh(w, w.objects.countries, (a: any, b: any) => a !== b) as any) || "";
const s = usStates as any;
const STATE_BORDERS =
  pathGen(mesh(s, s.objects.states, (a: any, b: any) => a !== b) as any) || "";
/* eslint-enable @typescript-eslint/no-explicit-any */

const MIN_Z = 1;
const MAX_Z = 9;
const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));
const clampPan = (x: number, y: number, z: number) => ({
  x: clamp(x, W - W * z, 0),
  y: clamp(y, H - H * z, 0),
});

export default function TravelMap() {
  const [active, setActive] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const drag = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const moved = useRef(false);

  const pxToVb = (px: number) => {
    const r = svgRef.current?.getBoundingClientRect();
    return r ? (px / r.width) * W : px;
  };

  const zoomAround = (vx: number, vy: number, nextZ: number) => {
    const nz = clamp(nextZ, MIN_Z, MAX_Z);
    const np = clampPan(
      vx - (nz / zoom) * (vx - pan.x),
      vy - (nz / zoom) * (vy - pan.y),
      nz
    );
    setZoom(nz);
    setPan(np);
  };

  const onWheel = (e: React.WheelEvent) => {
    const r = svgRef.current?.getBoundingClientRect();
    if (!r) return;
    e.preventDefault();
    const vx = ((e.clientX - r.left) / r.width) * W;
    const vy = ((e.clientY - r.top) / r.height) * H;
    zoomAround(vx, vy, zoom * (e.deltaY < 0 ? 1.2 : 1 / 1.2));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, px: pan.x, py: pan.y };
    moved.current = false;
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current) return;
    const dx = pxToVb(e.clientX - drag.current.x);
    const dy = pxToVb(e.clientY - drag.current.y);
    if (Math.abs(dx) + Math.abs(dy) > 0.6) moved.current = true;
    setPan(clampPan(drag.current.px + dx, drag.current.py + dy, zoom));
  };
  const onPointerUp = (e: React.PointerEvent) => {
    (e.currentTarget as Element).releasePointerCapture?.(e.pointerId);
    drag.current = null;
    setDragging(false);
  };

  const zoomBtn = (f: number) => zoomAround(W / 2, H / 2, zoom * f);
  const reset = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const tip =
    active !== null
      ? (() => {
          const p = travels[active];
          const [px, py] = projection([p.lng, p.lat]) as [number, number];
          const sx = px * zoom + pan.x;
          const sy = py * zoom + pan.y;
          if (sx < 0 || sx > W || sy < 0 || sy > H) return null;
          return { label: placeLabel(p), left: (sx / W) * 100, top: (sy / H) * 100 };
        })()
      : null;

  return (
    <div className="module">
      <p className="module-head">
        Map <span className="font-normal opacity-70">· {travels.length} stops</span>
      </p>

      <div className="p-3">
        <div className="relative">
          <svg
            ref={svgRef}
            viewBox="0 0 360 180"
            className="block h-auto w-full select-none rounded-md"
            style={{
              background: "var(--card)",
              touchAction: "none",
              cursor: dragging ? "grabbing" : "grab",
            }}
            role="img"
            aria-label="Zoomable world map with pins for places visited"
            onWheel={onWheel}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            <defs>
              <filter id="landShadow" x="-4%" y="-4%" width="108%" height="112%">
                <feDropShadow dx="0" dy="0.6" stdDeviation="0.7" floodColor="#000" floodOpacity="0.2" />
              </filter>
            </defs>

            <rect x="0" y="0" width={W} height={H} fill="var(--maroon)" opacity="0.06" />

            <g transform={`translate(${pan.x} ${pan.y}) scale(${zoom})`}>
              <path
                d={GRATICULE_PATH}
                fill="none"
                stroke="var(--foreground)"
                strokeWidth="0.25"
                opacity="0.12"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d={LAND_PATH}
                fill="var(--tan)"
                stroke="var(--tan-dark)"
                strokeWidth="0.5"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                filter="url(#landShadow)"
              />
              <path d={LAND_PATH} fill="#fff" opacity="0.05" />

              {/* country borders — fade in as you zoom past ~1.5x */}
              {zoom > 1.5 && (
                <path
                  d={COUNTRY_BORDERS}
                  fill="none"
                  stroke="var(--foreground)"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  opacity={clamp((zoom - 1.5) / 1, 0, 1) * 0.85}
                />
              )}
              {/* US state lines — dashed, appear only when zoomed in close */}
              {zoom > 3 && (
                <path
                  d={STATE_BORDERS}
                  fill="none"
                  stroke="var(--maroon-dark)"
                  strokeWidth="0.8"
                  strokeDasharray="2.2 1.6"
                  vectorEffect="non-scaling-stroke"
                  opacity={clamp((zoom - 3) / 1.5, 0, 1) * 0.75}
                />
              )}

              {travels
                .map((p, i) => {
                  const [x, y] = projection([p.lng, p.lat]) as [number, number];
                  return { p, i, x, y };
                })
                .sort((a, b) => a.y - b.y)
                .map(({ p, i, x, y }) => {
                  const on = active === i;
                  const s = (on ? 0.42 : 0.32) / zoom;
                  return (
                    <g
                      key={`${p.city}-${i}`}
                      tabIndex={0}
                      role="button"
                      aria-label={placeLabel(p)}
                      onMouseEnter={() => setActive(i)}
                      onMouseLeave={() => setActive((v) => (v === i ? null : v))}
                      onFocus={() => setActive(i)}
                      onBlur={() => setActive((v) => (v === i ? null : v))}
                      onClick={() => {
                        if (!moved.current) setActive((v) => (v === i ? null : i));
                      }}
                      style={{ cursor: "pointer", outline: "none" }}
                    >
                      <ellipse
                        cx={x}
                        cy={y}
                        rx={(on ? 3 : 2.2) / zoom}
                        ry={(on ? 1.2 : 0.85) / zoom}
                        fill="#000"
                        opacity="0.18"
                      />
                      {p.home ? (
                        // home base — a star centred on the location
                        <polygon
                          transform={`translate(${x} ${y}) scale(${(on ? 0.42 : 0.34) / zoom})`}
                          points="0,-11 2.59,-3.56 10.46,-3.4 4.18,1.36 6.47,8.9 0,4.4 -6.47,8.9 -4.18,1.36 -10.46,-3.4 -2.59,-3.56"
                          fill="var(--rust)"
                          stroke="#fff"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      ) : (
                        <g transform={`translate(${x} ${y}) scale(${s})`}>
                          <g transform="translate(-12 -23)">
                            <path
                              d="M12 1.5C7.3 1.5 3.5 5.3 3.5 10c0 6.2 8.5 12.5 8.5 12.5S20.5 16.2 20.5 10C20.5 5.3 16.7 1.5 12 1.5z"
                              fill="var(--rust)"
                              stroke="#fff"
                              strokeWidth="1.8"
                              strokeLinejoin="round"
                            />
                            <circle cx="12" cy="10" r="3.1" fill="#fff" />
                          </g>
                        </g>
                      )}
                      <circle
                        cx={x}
                        cy={y - (p.home ? 0 : 2.4 / zoom)}
                        r={7 / zoom}
                        fill="transparent"
                      />
                    </g>
                  );
                })}
            </g>
          </svg>

          {/* zoom controls */}
          <div className="absolute right-2 top-2 flex flex-col overflow-hidden border border-border bg-card text-[13px] font-bold leading-none text-foreground shadow-[1px_1px_0_rgba(0,0,0,0.15)]">
            <button
              type="button"
              onClick={() => zoomBtn(1.6)}
              className="border-b border-border px-2 py-1 hover:bg-background"
              aria-label="Zoom in"
            >
              +
            </button>
            <button
              type="button"
              onClick={() => zoomBtn(1 / 1.6)}
              className="border-b border-border px-2 py-1 hover:bg-background"
              aria-label="Zoom out"
            >
              −
            </button>
            <button
              type="button"
              onClick={reset}
              className="px-2 py-1 text-[10px] hover:bg-background"
              aria-label="Reset view"
            >
              RESET
            </button>
          </div>

          {tip && (
            <div
              className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[calc(100%+16px)] whitespace-nowrap border border-maroon-dark bg-maroon px-2 py-1 text-[11px] font-bold text-white shadow-[2px_2px_0_rgba(0,0,0,0.2)]"
              style={{ left: `${tip.left}%`, top: `${tip.top}%` }}
            >
              {tip.label}
            </div>
          )}
        </div>

        <p className="mt-2 text-[11px] text-muted">
          Scroll or use +/− to zoom, drag to pan. Hover or tap a pin for the city.
        </p>
      </div>
    </div>
  );
}
