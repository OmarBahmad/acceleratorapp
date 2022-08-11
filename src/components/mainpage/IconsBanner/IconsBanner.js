import React from "react"
import Icons from "./Icons/Icons"

import { IconsBannerContainer, IconsBannerContent } from "./styles.js"

const IconsBanner = () => {
  return (
    <IconsBannerContainer>
      <IconsBannerContent>
        <Icons />
      </IconsBannerContent>
    </IconsBannerContainer>
  )
}

export default IconsBanner
