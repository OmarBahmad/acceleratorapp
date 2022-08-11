import React, { useState } from "react"
import { Link } from "gatsby"

import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi"
import {
  NavBarContainer,
  LinkInfo,
  LinkContainer,
  SignInButton,
  DemoResquestButton,
  LogoContainer,
  HamburguerMenu,
  NavBarContent,
} from "./styles"
import Logo from "../../assets/imgs/Logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <NavBarContainer>
        <NavBarContent>
          <LogoContainer>
            <img src={Logo} alt="AcceleratorApp Logo" />
          </LogoContainer>
          <HamburguerMenu
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            {isOpen ? (
              <HiOutlineX size={28} color={"white"} />
            ) : (
              <HiOutlineMenuAlt4 size={28} color={"white"} />
            )}
          </HamburguerMenu>
          <LinkContainer className={isOpen ? "show-nav" : ""}>
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
        </NavBarContent>
      </NavBarContainer>
    </div>
  )
}

export default Navbar
