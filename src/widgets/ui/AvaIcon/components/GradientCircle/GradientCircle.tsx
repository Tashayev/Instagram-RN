import React from 'react';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

interface Props {
  size: number;
  gap?: number;
  strokeWidth?: number;
}

export const GradientCircle = ({
  size,
  gap = Math.max(2, size * 0.04),
  strokeWidth = Math.max(2, size * 0.04),
}: Props) => {
  const totalSize = size + gap * 2 + strokeWidth * 2;
  const center = totalSize / 2;
  const radius = size / 2 + gap + strokeWidth / 2;
  return (
    <Svg
      width={totalSize}
      height={totalSize}
      viewBox={`0 0 ${totalSize} ${totalSize}`}
      style={{ position: 'absolute' }}
    >
      <Defs>
        <RadialGradient
          id="grad"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(78.585 105.555) rotate(-115.776) scale(126.823 188.634)"
        >
          <Stop offset="24%" stopColor="#FF1B90" />
          <Stop offset="44%" stopColor="#F80261" />
          <Stop offset="69%" stopColor="#ED00C0" />
          <Stop offset="78%" stopColor="#C500E9" />
          <Stop offset="89%" stopColor="#7017FF" />
        </RadialGradient>
        <RadialGradient
          id="grad1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(33.7125 89.7915) rotate(-57.4396) scale(54.951 57.1569)"
        >
          <Stop offset="0" stopColor="#FFd600" />
          <Stop offset="48%" stopColor="#Ff6930" />
          <Stop offset="73%" stopColor="#FE3B36" />
          <Stop offset="100%" stopColor="#fe3b36" stopOpacity="0%" />
        </RadialGradient>
      </Defs>
      <Circle
        cx={center}
        cy={center}
        r={radius}
        stroke="url(#grad)"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <Circle
        cx={center}
        cy={center}
        r={radius}
        stroke="url(#grad1)"
        strokeWidth={strokeWidth}
        fill="none"
      />
    </Svg>
  );
};
