import React from "react"
import { Link } from "gatsby"

import { CommunityContainer, CommunityContent } from "./styles"
import { FooterLinkTitle, FooterLinkList, FooterLinkItem } from "../../styles"

const Community = () => {
  return (
    <CommunityContainer>
      <CommunityContent>
        <FooterLinkTitle>Community</FooterLinkTitle>
        <FooterLinkList>
          <FooterLinkItem>
            <Link to="/">Incubator/Accelerator</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Corporations</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Startups</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Investor</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Open Challenges</Link>
          </FooterLinkItem>
        </FooterLinkList>
      </CommunityContent>
    </CommunityContainer>
  )
}

export default Community
