"use client";
import React from "react";

type BubbleData = {
  name: string;
  value: number;
  color: string;
  size: number;
  style?: React.CSSProperties; // top/left/bottom/right positioning
  rotate?: number; // rotation for the rings
};

function RingsSVG({ size, rotate }: { size: number; rotate?: number }) {
  // size = bubbleSize * scaleFactor (svg bigger than bubble so rings are outside)
  const center = size / 2;
  const rInner = size / 2 - 22; // inner ring radius
  const rOuter = size / 2 - 8;  // outer ring radius
  const circInner = 2 * Math.PI * rInner;
  const circOuter = 2 * Math.PI * rOuter;

  // arcs lengths (portion visible) - tweak factors to taste
  const arcInner = circInner * 0.28;
  const gapInner = circInner - arcInner;

  const arcOuter = circOuter * 0.22;
  const gapOuter = circOuter - arcOuter;

  const rot = rotate ?? -40;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="pointer-events-none"
      style={{ transform: `rotate(${rot}deg)` }}
    >
      <circle
        cx={center}
        cy={center}
        r={rOuter}
        fill="none"
        stroke="rgba(255,255,255,0.95)"
        strokeWidth={3}
        strokeLinecap="round"
        strokeDasharray={`${arcOuter} ${gapOuter}`}
      />
      <circle
        cx={center}
        cy={center}
        r={rInner}
        fill="none"
        stroke="rgba(255,255,255,0.95)"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray={`${arcInner} ${gapInner}`}
        style={{ transform: "rotate(30deg)", transformOrigin: "center" }}
      />
      <circle
        cx={center}
        cy={center}
        r={rOuter + 6}
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth={6}
      />
    </svg>
  );
}

export default function PercentageBubbles() {
  const data: BubbleData[] = [
    { name: "Malaria", value: 85, color: "#8A7FF3", size: 110, style: { top: 10, left: 60 }, rotate: -20 },
    { name: "Dengue", value: 92, color: "#4DC9D0", size: 120, style: { bottom: 40, left: 30 }, rotate: -10 },
    { name: "Paludismo", value: 85, color: "#FFA648", size: 160, style: { top: 60, left: 130 }, rotate: -50 },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-[16px] font-semibold text-[#111] mb-1">Percentagens</h2>
      <p className="text-sm text-gray-500 mb-8">
        Total de percentagens gerados segundo a população
      </p>

      <div className="relative w-[380px] h-[320px]">
        {data.map((d) => {
          const bubbleSize = d.size;
          const svgSize = Math.round(bubbleSize * 1.35);
          const svgOffset = (bubbleSize - svgSize) / 2;
          const fontValue = Math.max(12, Math.round(bubbleSize * 0.18));
          const fontLabel = Math.max(10, Math.round(bubbleSize * 0.08));

          return (
            <div
              key={d.name}
              className="absolute rounded-full flex items-center justify-center text-white shadow-md transition-transform duration-200"
              style={{
                width: bubbleSize,
                height: bubbleSize,
                background: d.color,
                overflow: "visible",
                // positioning (top/left/bottom/right)
                ...d.style,
              }}
              aria-label={`${d.name} ${d.value}%`}
              role="img"
            >
              {/* Rings (SVG) positioned so it can overflow outside the bubble */}
              <div
                style={{
                  position: "absolute",
                  width: svgSize,
                  height: svgSize,
                  left: svgOffset,
                  top: svgOffset,
                  pointerEvents: "none",
                }}
              >
                <RingsSVG size={svgSize} rotate={d.rotate} />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center justify-center text-center px-3">
                <div style={{ fontSize: fontValue, fontWeight: 700 }}>{d.value}%</div>
                <div style={{ fontSize: fontLabel, marginTop: 6 }}>{d.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
