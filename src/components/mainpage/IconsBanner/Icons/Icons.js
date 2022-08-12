import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  IconsContainer,
  IconsContent,
  PizzaContainer,
  RocketContainer,
  RectangleContainer,
  FileContainer,
  ArrowContainer,
} from "./styles.js"

const Icons = () => {
  return (
    <IconsContainer>
      <IconsContent>
        <PizzaContainer>
          <StaticImage
            src={`../../../../assets/imgs/Pizza.png`}
            alt="AcceleratorApp Logo"
            placeholder="transparent"
            quality={100}
          />
        </PizzaContainer>
        <RocketContainer>
          <StaticImage
            src={`../../../../assets/imgs/Rocket.png`}
            alt="AcceleratorApp Logo"
            placeholder="transparent"
            quality={100}
          />
        </RocketContainer>
        <RectangleContainer>
          <StaticImage
            src={`../../../../assets/imgs/Rectangles.png`}
            alt="AcceleratorApp Logo"
            placeholder="transparent"
            quality={100}
          />
        </RectangleContainer>
        <FileContainer>
          <StaticImage
            src={`../../../../assets/imgs/File.png`}
            alt="AcceleratorApp Logo"
            placeholder="transparent"
            quality={100}
          />
        </FileContainer>
        <ArrowContainer>
          <StaticImage
            src={`../../../../assets/imgs/Arrow.png`}
            alt="AcceleratorApp Logo"
            placeholder="transparent"
            quality={100}
          />
        </ArrowContainer>
      </IconsContent>
    </IconsContainer>
  )
}

export default Icons
