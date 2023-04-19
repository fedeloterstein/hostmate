import * as React from 'react';
import { SVGProps } from 'react';

export const LocationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={7} height={10} fill="none" {...props}>
    <path
      fill="url(#a)"
      d="M3.5 0A3.497 3.497 0 0 0 0 3.5c0 .87.25 1.685.705 2.42.475.77 1.1 1.43 1.58 2.2.235.375.405.725.585 1.13.13.275.235.75.63.75s.5-.475.625-.75c.185-.405.35-.755.585-1.13.48-.765 1.105-1.425 1.58-2.2.46-.735.71-1.55.71-2.42C7 1.565 5.435 0 3.5 0Zm0 4.875a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={0.809}
        x2={7.088}
        y1={4.909}
        y2={7.689}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3378FF" />
        <stop offset={1} stopColor="#7000FF" />
      </linearGradient>
    </defs>
  </svg>
);
