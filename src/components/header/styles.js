import styled from "styled-components"

export const NavBarContainer = styled.div`
  background: #2e75cd;
  height: 4.625rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`

export const NavBarContent = styled.nav`
  margin: 0 auto;
  max-width: 70.625rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  @media screen and (max-width: 1060px) {
    gap: 0;
  }
`

export const LogoContainer = styled.div`
  align-self: center;
`

export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  list-style: none;
  gap: 3.5rem;
  @media screen and (max-width: 1024px) {
    display: none;
    flex-direction: column;
    gap: 1rem;
    transition: all 2s;
  }
`

export const HamburguerMenu = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`

export const LinkInfo = styled.li`
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  a {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
`
export const SignInButton = styled.li`
  min-width: 5.9375rem;
  a {
    padding: 0.9375rem 1.5rem;
    border: solid 0.0625rem #fff;
    border-radius: 0.25rem;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.375rem;
  }
`

export const DemoResquestButton = styled.li`
  min-width: 9.25rem;
  a {
    padding: 0.8125rem 1rem;
    border-radius: 0.25rem;
    color: #206ecf !important;
    background: #fff;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`
