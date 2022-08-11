import styled from "styled-components"

export const CookiesBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background: #fff;
  z-index: 20;
  box-shadow: 0rem 0.5rem 1.5rem 0.5rem rgba(0, 0, 0, 0.08);
  border-radius: 0px;
  @media screen and (max-width: 940px) {
    height: 8.125rem;
  }
  @media screen and (max-width: 710px) {
    height: 11.25rem;
  }
  @media screen and (max-width: 500px) {
    height: 14.375rem;
  }
  @media screen and (max-width: 320px) {
    height: 18.75rem;
  }
`

export const CookiesBarContent = styled.div`
  max-width: 70.625rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 940px) {
    flex-direction: column;
  }
`

export const CookiesBarText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.9375rem;
  line-height: 1.375rem;
  color: #1f304c;
  width: 44%;
  @media screen and (max-width: 940px) {
    width: 70%;
  }
`

export const CookiesBarButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  @media screen and (max-width: 940px) {
    justify-content: space-between;
    width: 70%;
    gap: 0;
  }
  @media screen and (max-width: 710px) {
    flex-wrap: wrap;
    gap: 0.3125rem;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
  a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.25rem;
    color: #0d122b;
  }
`

export const CookiesBarAcceptButton = styled.button`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  gap: 0.5rem;
  background: #206ecf;
  border-radius: 0.25rem;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`

export const CookiesBarKnowMoreButton = styled.button`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.375rem;
  display: flex;
  align-items: center;
  color: #206ecf;
  background: #ffffff;
  box-shadow: 0rem 0.5rem 1.5rem 0.5rem rgba(0, 0, 0, 0.08);
  border-radius: 0rem;
  border: solid 0.0625rem #206ecf;
  padding: 0.625rem 1.5rem;
  cursor: pointer;
  gap: 0.5rem;
  @media screen and (max-width: 500px) {
    width: 100%;
    justify-content: center;
  }
`
