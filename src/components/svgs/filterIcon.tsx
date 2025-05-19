import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function SvgComponent({width, height, ...props}:SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
     // xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.477 7.962a.75.75 0 001.046 1.076L5.477 7.962zM9.6 5h.75a.75.75 0 00-1.273-.538L9.6 5zm-.75 14a.75.75 0 001.5 0h-1.5zm9.673-2.962a.75.75 0 10-1.046-1.076l1.046 1.076zM14.4 19h-.75a.75.75 0 001.273.538L14.4 19zm.75-14a.75.75 0 00-1.5 0h1.5zM6.523 9.038l3.6-3.5-1.046-1.076-3.6 3.5 1.046 1.076zM8.85 5v14h1.5V5h-1.5zm8.627 9.962l-3.6 3.5 1.046 1.076 3.6-3.5-1.046-1.076zM15.15 19V5h-1.5v14h1.5z"
        fill="#000"
      />
    </Svg>
  )
}

export default SvgComponent
