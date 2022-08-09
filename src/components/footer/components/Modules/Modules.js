import React from "react"
import { Link } from "gatsby"

import {ModulesContainer, ModulesContent } from "./styles"
import { FooterLinkTitle, FooterLinkList, FooterLinkItem } from "../../styles"

const Modules = () => {
  return (
    <ModulesContainer>
      <ModulesContent>
        <FooterLinkTitle>Modules</FooterLinkTitle>
        <FooterLinkList>
          <FooterLinkItem>
            <Link to="/">Coaching Module</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Data Module</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Ecosystem Module</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">LMS Module</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Events</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Application Processing</Link>
          </FooterLinkItem>
        </FooterLinkList>
      </ModulesContent>
    </ModulesContainer>
  )
}

export default Modules
