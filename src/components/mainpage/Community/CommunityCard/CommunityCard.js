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
  Title,
  Description,
  FeatureTitle,
  FeatureDescription,
}) => {
  return (
    <CommunityCardContainer>
      <CommunityCardContent>
        <CommunitTitle className={Title.replace('/', '').replace(' ', '')}>{Title}</CommunitTitle>
        <CommunityDescription>{Description}</CommunityDescription>
        <CommunityFeatures>
          <CommunityFeatureTitle>{FeatureTitle}</CommunityFeatureTitle>
          <CommunityFeatureDescription>
            {FeatureDescription?.map((feature, key) => {
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
