import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SvgComponent({width, height, ...props}:SvgProps) {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      //xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      {...props}
    >
      <Path strokeWidth={2} d="M11.99 6L12 6" />
      <Path strokeWidth={2} d="M11.99 12L12 12" />
      <Path strokeWidth={2} d="M11.99 18L12 18" />
    </Svg>
  )
}

export default SvgComponent
