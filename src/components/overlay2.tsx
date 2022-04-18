import React, { useEffect } from "react";
import gsap from "gsap";
import "./overlay2.css";

type Props = {
  message: string;
  backgroundColor1: string;
  backgroundColor2: string;
  fontColor: string;
  repeat?: boolean;
};

const Overlay = ({
  message,
  backgroundColor1,
  backgroundColor2,
  fontColor,
  repeat = false,
}: Props) => {
  const margin = 40;
  const barHeight = 80;
  const width = 1920;
  const height = barHeight + margin;
  const rightGap = 150;

  useEffect(() => {
    const tl = gsap.timeline({ repeat: repeat ? -1 : 1, yoyo: true });
    tl.set({}, {}, 0.5);

    tl.addLabel("l1");

    tl.to(
      "#bar1",
      {
        duration: 1,
        ease: "power3.out",
        x: `+=${width + 1}`,
      },
      "l1"
    );
    tl.to(
      "#bar2",
      {
        duration: 1,
        ease: "power3.out",
        x: `+=${width - rightGap}`,
      },
      "l1+=.4"
    );
    tl.to("#message", { duration: 0.4, opacity: 1.0 });

    tl.set({}, {}, 3);

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
      <g id="bar1" transform={`translate(${-width}, 0)`}>
        <rect
          id="rect"
          x={-1}
          y={0}
          width={width}
          height={barHeight}
          fill={backgroundColor1}
        />
      </g>

      <g id="bar2" transform={`translate(${-width + rightGap}, 0)`}>
        <rect
          id="rect"
          x={-1}
          y={0}
          width={width - rightGap}
          height={barHeight}
          fill={backgroundColor2}
        />
      </g>

      <text
        id="message"
        x={30}
        y={58}
        fontSize="48"
        fill={fontColor}
        fontFamily="Libre Franklin, sans-serif"
        opacity="0"
      >
        {message.toUpperCase()}
      </text>
    </svg>
  );
};

export default Overlay;
