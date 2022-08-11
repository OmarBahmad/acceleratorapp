import styled from "styled-components"

export const CopyrightContainer = styled.div`
  a {
    color: #b6c0cd !important;
  }
`

export const CopyrightContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  margin-top: 1.6875rem;
  @media screen and (max-width: 768px) {
    justify-content: start;
    padding: 0.9375rem;
    gap: 19%;
  }
`

export const LinksContainer = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: #f3f5f7;
  display: flex;
  gap: 2rem;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 16.375rem;
    margin: 0 auto;
    align-content: center;
    justify-content: center;
    gap: 0.9375rem;
    margin-bottom: 2.6875rem;
  }
`

export const CopyrightLanguage = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.5rem;
  color: #ffffff;
  display: flex;
  gap: 1.5rem;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
  @media screen and (max-width: 400px) {
    gap: 0.5rem;
  }
  @media screen and (max-width: 350px) {
    gap: 0;
  }
`

export const CopyrightText = styled.div`
  border-right: 0.125rem solid rgba(255, 255, 255, 0.25);
  padding-right: 1.5rem;
  font-weight: 400;
  font-size: 0.625rem;
  line-height: 1.5rem;
  color: #ffffff;
  @media screen and (max-width: 400px) {
    padding-right: 0.625rem;
  }
  @media screen and (max-width: 350px) {
border-right: none;
padding-right: 0.3125rem;
  }
`

export const Language = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  gap: 0.625rem;
  @media screen and (max-width: 768px) {
    font-size: 0rem;
  }
  @media screen and (max-width: 350px) {
    margin: 0 auto;
  }
`
export const DivisionLine = styled.div`
  display: none;

  width: 16.375rem;
  height: 0.0625rem;
  background: rgba(255, 255, 255, 0.2);

  @media screen and (max-width: 768px) {
    display: block;
  }
`
