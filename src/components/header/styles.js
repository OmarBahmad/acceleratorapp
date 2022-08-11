import styled from "styled-components"

export const NavBarContainer = styled.div`
  background: rgba(0, 0, 0, 0.05);
  height: 4.625rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`

export const NavBarContent = styled.nav`
  width: 100%;
  margin: 0 auto;
  max-width: 70.625rem;
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  img {
    transition: 0 !important;
  }
  @media screen and (max-width: 1060px) {
    gap: 0;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    .show-nav {
      display: block;
      opacity: 1;
      visibility: visible;
      background: rgba(0, 0, 0, 0.6);
    }
  }
  @media screen and (max-width: 490px) {
    .show-nav {
      display: block;
      opacity: 1;
      visibility: visible;
      background: rgba(0, 0, 0, 0.9);
    }
  }
`

export const LogoContainer = styled.div`
  align-self: center;
  img {
    margin-top: 0.3125rem;
  }
`

export const LinkContainer = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  padding: 0;
  justify-content: space-between;
  width: 58%;
  list-style: none;
  @media screen and (max-width: 1024px) {
    z-index: 10;
    display: none;
    opacity: 0;
    visibility: hidden;
    position: relative;
    top: 16.75rem;
    border-radius: 0.5rem;
  }
  @media screen and (max-width: 490px) {
    width: 100%;
    padding: 0;
    position: absolute;
    top: 3.75rem;
    border-radius: 0px;
  }
`

export const HamburguerMenu = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    z-index: 10;
    position: absolute;
    right: 4%;
    top: 1.375rem;
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
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  @media screen and (max-width: 1024px) {
    margin: 2.9375rem 2.1875rem 2.1875rem 0;
    a {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 490px) {
    margin: 3rem auto;
    width: fit-content;
  }
  @media screen and (max-width: 260px) {
    a {
      font-size: 1rem;
    }
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
  @media screen and (max-width: 1024px) {
    margin: 2.9375rem 2.1875rem 2.1875rem 0;
    a {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 490px) {
    margin: 3rem auto;
    width: fit-content;
  }
  @media screen and (max-width: 260px) {
    a {
      font-size: 1rem;
    }
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
  @media screen and (max-width: 1024px) {
    margin: 2.9375rem 2.1875rem 2.1875rem 0;
    min-width: 14.5rem;
    a {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 490px) {
    margin: 3rem auto;
    width: fit-content;
  }
  @media screen and (max-width: 260px) {
    min-width: 9.25rem;
    a {
      font-size: 1rem;
    }
  }
`
