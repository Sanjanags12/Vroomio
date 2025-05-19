import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SvgComponent({width, height , ...props}:SvgProps) {
  return (
    <Svg
      width="30px"
      height="30px"
      viewBox="0 0 24 24"
      fill="none"
      //xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19 7.906V18a2 2 0 01-2 2H7a2 2 0 01-2-2V7.906M2 10l8.853-6.197a2 2 0 012.294 0L22 10"
        stroke="#000"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default SvgComponent
