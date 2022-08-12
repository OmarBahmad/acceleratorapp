import React from "react"
import {
  CommunityCardContainer,
  CommunityCardContent,
  CommunitTitle,
  CommunityDescription,
  CommunityFeatures,
  CommunityFeatureTitle,
  CommunityFeatureDescription,
  CommunityFeatureDescriptionItem,
  CommunityButton,
} from "./styles"

const CommunityCard = ({
  title,
  description,
  featureTitle,
  featureDescription,
}) => {
  return (
    <CommunityCardContainer>
      <CommunityCardContent>
        <CommunitTitle className={title.replace("/", "").replace(" ", "")}>
          {title}
        </CommunitTitle>
        <CommunityDescription>{description}</CommunityDescription>
        <CommunityFeatures>
          <CommunityFeatureTitle>{featureTitle}</CommunityFeatureTitle>
          <CommunityFeatureDescription>
            {featureDescription?.map((feature, key) => {
              return (
                <CommunityFeatureDescriptionItem key={key}>
                  {feature}
                </CommunityFeatureDescriptionItem>
              )
            })}
          </CommunityFeatureDescription>
        </CommunityFeatures>
        <CommunityButton>Get Started</CommunityButton>
      </CommunityCardContent>
    </CommunityCardContainer>
  )
}

export default CommunityCard
