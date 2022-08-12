import React from "react"

import CommunityCardContent from "./CommunityCardContent/CommunityCardContent"
import CommunityCard from "./CommunityCard/CommunityCard"
import {
  CommunityContainer,
  CommunityContent,
  CommunitTitle,
  CommunityLabel,
  CommunitDescription,
  CommunityTitleContainer,
  CommunityAllCardsContainer,
} from "./styles"

const Community = () => {
  return (
    <CommunityContainer>
      <CommunityContent>
        <CommunityTitleContainer>
          <CommunitTitle>Community</CommunitTitle>
          <CommunityLabel>Lorem ipsum dolor sit amet</CommunityLabel>
          <CommunitDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </CommunitDescription>
        </CommunityTitleContainer>
        <CommunityAllCardsContainer>
          {CommunityCardContent.map((item, key) => {
            return (
              <CommunityCard
               {... item}
                key={key}
              />
            )
          })}
        </CommunityAllCardsContainer>
      </CommunityContent>
    </CommunityContainer>
  )
}

export default Community
