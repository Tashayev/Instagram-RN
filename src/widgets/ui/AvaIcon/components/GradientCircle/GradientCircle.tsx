import React from 'react';
import Svg, { Defs, RadialGradient, Stop, Circle } from 'react-native-svg';

interface Props {
  size: number;
}

export const GradientCircle = ({ size }: Props) => {
  const SIZE = size;
  const style ={
    svg:{ position: 'absolute', top: -3, left: -3 }
  }as const
  return (
    <Svg
      width={SIZE + 6}
      height={SIZE + 6}
      viewBox={`0 0 ${SIZE + 6} ${SIZE + 6}`}
      fill="none"
      style={style.svg}
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
          <Stop offset="14%" stopColor="#FF1B90" />
          <Stop offset="34%" stopColor="#F80261" />
          <Stop offset="58%" stopColor="#ED00C0" />
          <Stop offset="90%" stopColor="#7017FF" />
        </RadialGradient>
        <RadialGradient
          id="grad1"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(33.7125 89.7915) rotate(-57.4396) scale(54.951 57.1569)"
        >
          <Stop offset="14%" stopColor="#FFd600" />
          <Stop offset="68%" stopColor="#Ff6930" />
          <Stop offset="73%" stopColor="#c500e9" />
          <Stop offset="100%" stopColor="#fe3b36" />
        </RadialGradient>
      </Defs>
      <Circle
        cx={(SIZE + 6) / 2}
        cy={(SIZE + 6) / 2}
        r={SIZE / 2 + 2}
        stroke="url(#grad)"
        strokeWidth="3"
      />
      <Circle
        cx={(SIZE + 6) / 2}
        cy={(SIZE + 6) / 2}
        r={SIZE / 2 + 2}
        stroke="url(#grad1)"
        strokeWidth="3"
      />
    </Svg>
  );
};
