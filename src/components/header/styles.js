import styled from "styled-components"

export const NavBarContainer = styled.nav`
  display: flex;
  gap: 2rem;
  background: #2e75cd;
  height: 4.625rem;
  justify-content: space-between;
`

export const LogoContainer = styled.div`
align-self:center;
`

export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  list-style: none;
  gap: 3.5rem;
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
  a {
    padding: 15px 24px;
    border: solid 1px #fff;
    border-radius: 4px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
  }
`

export const DemoResquestButton = styled.li`
  a {
    padding: 13px 16px;
    border-radius: 4px;
    color: #206ecf !important;
    background: #fff;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
`
