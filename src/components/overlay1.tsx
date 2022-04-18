import React, { useEffect } from "react";
import gsap from "gsap";
import "./overlay1.css";

type Props = {
  message: string;
  backgroundColor: string;
  fontColor: string;
  repeat?: boolean;
};

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const Overlay = ({
  message,
  backgroundColor,
  fontColor,
  repeat = false,
}: Props) => {
  const margin = 24;
  const barHeight = 80;
  const width = 1920;
  const height = barHeight + margin * 2;
  const verticalBarWidth = 10;
  const horizontalBarWidth = width - 2 * verticalBarWidth - margin * 2;
  const layers = 4;

  useEffect(() => {
    const tl = gsap.timeline({ repeat: repeat ? -1 : 1, yoyo: true });
    tl.set({}, {}, 0.5);

    tl.to("#verticalBar", {
      duration: 0.3,
      ease: "power2.out",
      y: `-=${height}`,
    });
    tl.to(".layer", {
      duration: 0.7,
      stagger: 0.2,
      delay: 0.2,
      ease: "power3.out",
      x: `+=${horizontalBarWidth}`,
    });
    tl.set({}, {}, 4);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100vw",
        aspectRatio: `${width} / ${height}`,
      }}
    >
      <mask id="mask">
        <rect
          x={verticalBarWidth * 2 + margin}
          width={horizontalBarWidth}
          height={height}
          fill="white"
        />
      </mask>
      <g id="verticalBar" transform={`translate(0, ${height})`}>
        <rect
          x={margin}
          y={margin}
          width={verticalBarWidth}
          height={barHeight}
          fill={backgroundColor}
        />
      </g>
      <g mask="url(#mask)">
        {range(1, layers, 1).map((id) => (
          <g
            key={id}
            className="layer"
            transform={`translate(${
              -horizontalBarWidth + 2 * verticalBarWidth
            }, 0)`}
          >
            <rect
              id="rect"
              x={margin - 1}
              y={margin}
              width={horizontalBarWidth}
              height={barHeight}
              fill={`${backgroundColor}55`}
            />
            {id === layers && (
              <text
                x={margin + 24}
                y={margin + 57}
                fontSize="48"
                fill={fontColor}
                fontFamily="Roboto Slab, serif"
              >
                {message}
              </text>
            )}
          </g>
        ))}
      </g>
    </svg>
  );
};

export default Overlay;
