import React from "react"
import { Link } from "gatsby"

import { CompanyContainer, CompanyContent } from "./styles"
import { FooterLinkTitle, FooterLinkList, FooterLinkItem } from "../../styles"

const Company = () => {
  return (
    <CompanyContainer>
      <CompanyContent>
        <FooterLinkTitle>Company</FooterLinkTitle>
        <FooterLinkList>
          <FooterLinkItem>
            <Link to="/">About Us</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Carrers</Link>
            <span>We're hiring!</span>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Blog</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Pricing</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Contact Us</Link>
          </FooterLinkItem>
        </FooterLinkList>
      </CompanyContent>
    </CompanyContainer>
  )
}

export default Company
