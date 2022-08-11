import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  HeroBannerContainer,
  HeroBannerContent,
  HeroBannerMiniTitle,
  HeroBannerTitle,
  HeroBannerText,
  HeroBannerButton
} from "./styles.js"

const HeroBanner = () => {
  return (
    <HeroBannerContainer>
      <HeroBannerContent>
        <HeroBannerMiniTitle>Join in and connect</HeroBannerMiniTitle>
        <HeroBannerTitle>To faster your innovation potential</HeroBannerTitle>
        <HeroBannerText>
          AcceleratorApp Innovation Community — Tools and community to
          facilitate innovation between all members of our community
        </HeroBannerText>
        <HeroBannerButton>Schedule a Demo</HeroBannerButton>
        <StaticImage src="../../../assets/imgs/Video.png"  alt="AcceleratorApp Logo"
              placeholder="transparent"
              />
      </HeroBannerContent>
    </HeroBannerContainer>
  )
}

export default HeroBanner
