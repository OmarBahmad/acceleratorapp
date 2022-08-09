import styled from "styled-components"

export const NewsLetterContainer = styled.div``

export const NewsLetterContent = styled.div`
`

export const NewsLetterTitle = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.25rem;
  text-align: center;
  color: #fff;
  padding-bottom: 0.625rem;
`

export const NewsLetterLabel = styled.h4`
  font-size: 0.75rem;
  line-height: 1.125rem;
  font-weight: 400;
  text-align: center;
  color: #f3f5f7;
`

export const NewsLetterInput = styled.div`
  width: 27.625rem;
  margin: 0 auto;
  padding: 16px 0 2.1875rem 0;
  border-bottom: solid 0.0938rem rgba(255, 255, 255, 0.25);

  input {
    width: 99%;
    background: transparent;
    border: none;
    padding: 0.3125rem 0;
  }
  ::after {
    padding: 1rem;
    content: "";
    width: 1.5625rem;
    height: 1.5625rem;
    background-image: url("data:image/svg+xml,%3Csvg width='19' height='11' viewBox='0 0 19 11' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.2677 1.25684L17.5 5.25684M17.5 5.25684L14.2677 9.25684M17.5 5.25684H1.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 1.25rem;
    position: absolute;
    transform: translate(-2.4375rem, -0.8125rem);
  }
 
`
