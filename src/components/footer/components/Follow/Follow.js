import React from "react"
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti"

import { FollowContainer, FollowContent } from "./styles"
import { FooterLinkTitle, FooterLinkList, FooterLinkItem } from "../../styles"

const Follow = () => {
  return (
    <FollowContainer>
      <FollowContent>
        <FooterLinkTitle>Follow</FooterLinkTitle>
        <FooterLinkList>
          <FooterLinkItem>
            <a href="/">
              <TiSocialLinkedin color={"white"} size={28} />
            </a>
          </FooterLinkItem>
          <FooterLinkItem>
            <a href="/">
              <TiSocialFacebook color={"white"} size={28} />
            </a>
          </FooterLinkItem>
          <FooterLinkItem>
            <a href="/">
              <TiSocialInstagram color={"white"} size={28} />
            </a>
          </FooterLinkItem>
          <FooterLinkItem>
            <a href="/">
              <TiSocialTwitter color={"white"} size={28} />
            </a>
          </FooterLinkItem>
        </FooterLinkList>
      </FollowContent>
    </FollowContainer>
  )
}

export default Follow
