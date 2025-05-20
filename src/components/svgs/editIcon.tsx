import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SvgComponent({height, width, ...props}:SvgProps) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 24 24"
      fill="none"
     // xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.688 3.002l3.31 3.31L12.312 15H9v-3.31l8.688-8.688zm0 2.12L10.5 12.312V13.5h1.19l7.187-7.188-1.19-1.19zM5 5h7v1.5H6.5v11h11V12H19v7H5V5z"
        fill="#1F2328"
      />
    </Svg>
  )
}

export default SvgComponent
