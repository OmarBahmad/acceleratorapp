import React from "react"
import { Link } from "gatsby"

import { DocumentationContainer, DocumentationContent } from "./styles"
import { FooterLinkTitle, FooterLinkList, FooterLinkItem } from "../../styles"

const Documentation = () => {
  return (
    <DocumentationContainer>
      <DocumentationContent>
        <FooterLinkTitle>Documentation</FooterLinkTitle>
        <FooterLinkList>
          <FooterLinkItem>
            <Link to="/">Documentation</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Release Log</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">FAQ</Link>
          </FooterLinkItem>
          <FooterLinkItem>
            <Link to="/">Legal</Link>
          </FooterLinkItem>
        </FooterLinkList>
      </DocumentationContent>
    </DocumentationContainer>
  )
}

export default Documentation
