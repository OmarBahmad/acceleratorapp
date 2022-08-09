import styled from "styled-components"

export const FooterContainer = styled.div`
  background: #1b1e22;
`

export const FooterContent = styled.div`
  margin: 0 auto;
  max-width: 70.625rem;
  padding: 1rem 0;
`

export const FooterInformations = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 2px solid rgba(255, 255, 255, 0.25);
`

export const FooterLinkTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  color: #f3f5f7;
  padding-bottom: 0.4375rem;
  border-bottom: solid 0.0938rem rgba(255, 255, 255, 0.25);
`

export const FooterLinkList = styled.ul`
  padding: 0;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: space-between;
  align-items: flex-start;
`

export const FooterLinkItem = styled.li`
  a {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 0.75rem;
    line-height: 1.125rem;
    color: #b6c0cd;
  }
  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 0.5rem;
    line-height: 0.75rem;
    color: #f3f5f7;
    padding: 0.125rem 0.25rem;
    gap: 0.625rem;
    background: #206ecf;
    border-radius: 0.125rem;
    align-self: center;
    margin-left: 0.4375rem;
  }
`
