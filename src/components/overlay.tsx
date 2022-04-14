import React, { useEffect, useState } from "react";
import gsap from "gsap";

type Props = {
  width?: number;
  height?: number;
  message: string;
};

const range = (start: number, stop: number, step: number) =>
  Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);

const Overlay = ({ width = 1450, height = 80 }: Props) => {
  const verticalBarWidth = 10;
  const horizontalBarWidth = width - 2 * verticalBarWidth;
  const layers = 3;

  const [message, setMessage] = useState("");

  useEffect(() => {
    var text =
      new URLSearchParams(window.location.search).get("text") ??
      "This is a sample message";
    setMessage(text);

    const tl = gsap.timeline({ repeat: 1, yoyo: true });
    tl.delay(0.5);

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
    tl.set({}, {}, 5);
  }, []);

  return (
    <svg
      width={width}
      height={height}
      style={{ position: "fixed", bottom: 24, left: 24 }}
    >
      <mask id="mask">
        <rect
          x={verticalBarWidth * 2}
          width={horizontalBarWidth}
          height={height}
          fill="white"
        />
      </mask>
      <g id="verticalBar" transform={`translate(0, ${height})`}>
        <rect width={verticalBarWidth} height={height} fill="#279ce2" />
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
              x="0"
              width={horizontalBarWidth}
              height={height}
              fill="#279ce277"
            />
            {id === layers && (
              <text x="24" y="57" fontSize="48" fill="white">
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
