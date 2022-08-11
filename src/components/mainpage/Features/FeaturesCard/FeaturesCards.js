import React from "react"

import {
  FeaturesCardsContainer,
  FeaturesCardsContent,
  FeaturesCardsIcon,
  FeaturesCardsTitle,
  FeaturesCardsDescription,
} from "./styles"

const FeaturesCards = ({ title, description }) => {
  return (
    <FeaturesCardsContainer>
      <FeaturesCardsContent>
        <FeaturesCardsIcon
          className={title
            .replaceAll("/", "")
            .replaceAll(" ", "")
            .replaceAll(".", "")}
        />
        <FeaturesCardsTitle>{title}</FeaturesCardsTitle>
        <FeaturesCardsDescription>{description}</FeaturesCardsDescription>
      </FeaturesCardsContent>
    </FeaturesCardsContainer>
  )
}

export default FeaturesCards
