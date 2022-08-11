import React from "react"

import NewsLetter from "./components/NewsLetter/Newsletter"
import Community from "./components/Community/Community"
import Modules from "./components/Modules/Modules"
import Company from "./components/Company/Company"
import Documentation from "./components/Documentation/Documentation"
import Follow from "./components/Follow/Follow"
import Copyright from "./components/Copyright/Copyright"
import { FooterContainer, FooterContent, FooterInformations } from "./styles"

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <NewsLetter />
        <FooterInformations>
          <Community />
          <Modules />
          <Company />
          <Documentation />
          <Follow />
        </FooterInformations>
        <Copyright />
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
