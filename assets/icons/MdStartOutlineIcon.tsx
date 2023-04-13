import * as React from "react"
import { SVGProps } from "react"

export const MdStartOutlineIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="m17.417 7.315-5.692-.49L9.5 1.582l-2.224 5.25-5.692.482 4.322 3.745-1.298 5.565L9.5 13.672l4.893 2.953-1.29-5.565 4.314-3.745ZM9.5 12.192l-2.976 1.797.791-3.388-2.628-2.28 3.467-.301L9.5 4.83l1.354 3.198 3.467.3-2.628 2.28.792 3.389L9.5 12.192Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={3.413}
        x2={15.183}
        y1={8.968}
        y2={16.803}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3378FF" />
        <stop offset={1} stopColor="#7000FF" />
      </linearGradient>
    </defs>
  </svg>
)

