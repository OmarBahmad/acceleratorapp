import React from "react"
import { Link } from "gatsby"
import {NavBarContainer , LinkInfo, LinkContainer, SignInButton, DemoResquestButton, LogoContainer} from "./styles"
import Logo from "../../assets/imgs/logo.png"

const Navbar = () => {
  return (
    <div>
      <NavBarContainer>
        <LogoContainer>
          <img src={Logo} alt="AcceleratorApp Logo" />
        </LogoContainer>
        <LinkContainer>
          <LinkInfo>
            <Link to="/">Community</Link>
          </LinkInfo>
          <LinkInfo>
            <Link to="/">Modules</Link>
          </LinkInfo>
          <LinkInfo>
            <Link to="/">Company</Link>
          </LinkInfo>
          <LinkInfo>
            <Link to="/">Pricing</Link>
          </LinkInfo>
          <SignInButton>
            <Link to="/">Sign In</Link>
          </SignInButton>
          <DemoResquestButton>
            <Link to="/">Request a Demo</Link>
          </DemoResquestButton>
        </LinkContainer>
      </NavBarContainer>
    </div>
  )
}

export default Navbar;
