import React, { useState, useEffect } from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Carousel from "nuka-carousel"

import FeaturesCardContainer from "./FeaturesCardContainer/FeaturesCardContainer"
import FeaturesCards from "./FeaturesCard/FeaturesCards"
import {
  FeaturesContainer,
  FeaturesContent,
  FeaturesTitleContainer,
  FeaturesTitle,
  FeaturesDescription,
  FeaturesAllCardsContainer,
  FeaturesCardsButtonContainer,
  FeaturesCardsButton,
} from "./styles"

const Features = () => {
  const [width, setWidth] = useState(1500)
  const [domIsLoaded, setDomIsLoaded] = useState(false)
  useEffect(() => setDomIsLoaded(typeof document !== "undefined"),[])  

  function handleWindowSizeChange() {
    if(domIsLoaded){
    setWidth(window.innerWidth)
    }
  }
  useEffect(() => {
    if(domIsLoaded){
      window.addEventListener("resize", handleWindowSizeChange)
      return () => {
        window.removeEventListener("resize", handleWindowSizeChange)
      }
    }
  }, [domIsLoaded])

  const isMobile = width <= 768

  let slides = FeaturesCardContainer.map((card, index) => {
    return <FeaturesCards key={index} {...card} />
  })

  return (
    <FeaturesContainer>
      <FeaturesContent>
        <FeaturesTitleContainer>
          <FeaturesTitle>Features integrated</FeaturesTitle>
          <FeaturesDescription>
            Know all our features that we have for accelerate your business.
          </FeaturesDescription>
        </FeaturesTitleContainer>
        <FeaturesAllCardsContainer>
          {isMobile ? (
            slides.length > 0 && (
              <>
                <Carousel>{slides}</Carousel>
                <FeaturesCardsButtonContainer>
                  <FeaturesCardsButton>
                    Discover its functions
                    <HiOutlineArrowNarrowRight size={25} />
                  </FeaturesCardsButton>
                </FeaturesCardsButtonContainer>
              </>
            )
          ) : (
            <>
              {FeaturesCardContainer.map((card, index) => {
                return <FeaturesCards key={index} {...card} />
              })}
              <FeaturesCardsButtonContainer>
                <FeaturesCardsButton>
                  Discover its functions
                  <HiOutlineArrowNarrowRight size={25} />
                </FeaturesCardsButton>
              </FeaturesCardsButtonContainer>
            </>
          )}
        </FeaturesAllCardsContainer>
      </FeaturesContent>
    </FeaturesContainer>
  )
}

export default Features
