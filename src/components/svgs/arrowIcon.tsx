import * as React from "react"
import Svg, { G, Path, SvgProps } from "react-native-svg"

function SvgComponent({height, width, ...props}:SvgProps) {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
     // xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G
        opacity={0.4}
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M10.45 6.72L6.73 3 3.01 6.72M6.73 21V3" />
      </G>
      <Path
        d="M13.55 17.28L17.27 21l3.72-3.72M17.27 3v18"
        stroke="#292D32"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
