import React from "react"
import { Link } from "gatsby"
import { VscGlobe } from "react-icons/vsc"

import {
  CopyrightContainer,
  CopyrightContent,
  LinksContainer,
  CopyrightLanguage,
  CopyrightText,
  Language,
  DivisionLine,
} from "./styles"

const Copyright = () => {
  return (
    <CopyrightContainer>
      <CopyrightContent>
        <LinksContainer>
          <Link to="/">Privacy</Link>
          <Link to="/">Cookies</Link>
          <DivisionLine />
          <Link to="/">Terms Of Use</Link>
          <Link to="/">DPA</Link>
          <Link to="/">Subproccesors</Link>
        </LinksContainer>
        <CopyrightLanguage>
          <CopyrightText>
            Copyright © {new Date().getFullYear()} AcceleratorApp All Rights
            Reserved.
          </CopyrightText>

          <Language>
            <VscGlobe size={18} />
            English
          </Language>
        </CopyrightLanguage>
      </CopyrightContent>
    </CopyrightContainer>
  )
}

export default Copyright
