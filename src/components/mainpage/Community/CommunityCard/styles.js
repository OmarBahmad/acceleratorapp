import styled from "styled-components"

export const CommunityCardContainer = styled.div`
  width: 26.5%;
  height: fit-content;
  background: #ffffff;
  box-shadow: 0rem 0.5rem 1.5rem 0.5rem rgba(0, 0, 0, 0.08);
  border-radius: 0.75rem;
  padding: 2rem;

  @media screen and (max-width: 1130px) {
    width: 40%;
  }
  @media screen and (max-width: 730px) {
    width: 60%;
  }
  @media screen and (max-width: 500px) {
    width: 80%;
  }
  .IncubatorAccelerator {
    width: 106%;
    ::before {
      content: "";
      width: 2rem;
      height: 2rem;
      display: block;
      padding-right: 1rem;
      position: relative;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.718506' y='0.857666' width='32.144' height='32.144' rx='8.03561' fill='%23206ECF'/%3E%3Cg clip-path='url(%23clip0_1_578)'%3E%3Cpath d='M17.3532 11.9524H16.0834C15.7466 11.9524 15.4236 12.0951 15.1855 12.3491C14.9473 12.6031 14.8135 12.9477 14.8135 13.3069V22.8095C14.8135 23.5459 15.4105 24.1429 16.1469 24.1429H17.2897C18.0261 24.1429 18.6231 23.5459 18.6231 22.8095V13.3069C18.6231 12.9477 18.4893 12.6031 18.2511 12.3491C18.013 12.0951 17.69 11.9524 17.3532 11.9524Z' fill='white'/%3E%3Cpath d='M23.4485 8.14282H22.1787C21.8419 8.14282 21.5189 8.2833 21.2807 8.53335C21.0426 8.7834 20.9088 9.12253 20.9088 9.47616V22.8095C20.9088 23.5459 21.5058 24.1428 22.2421 24.1428H23.385C24.1214 24.1428 24.7183 23.5459 24.7183 22.8095V9.47616C24.7183 9.12253 24.5846 8.7834 24.3464 8.53335C24.1083 8.2833 23.7853 8.14282 23.4485 8.14282Z' fill='white'/%3E%3Cpath d='M11.258 15.762H9.98816C9.65138 15.762 9.32839 15.9091 9.09025 16.1711C8.85211 16.433 8.71832 16.7883 8.71832 17.1588V22.8096C8.71832 23.546 9.31528 24.1429 10.0517 24.1429H11.1945C11.9309 24.1429 12.5278 23.546 12.5278 22.8096V17.1588C12.5278 16.7883 12.3941 16.433 12.1559 16.1711C11.9178 15.9091 11.5948 15.762 11.258 15.762Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_578'%3E%3Crect width='16' height='16' fill='white' transform='translate(8.71832 8.14282)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
      @media screen and (max-width: 1130px) {
        width: 2rem !important;
    }
    
    }
    @media screen and (max-width: 1130px) {
      width: fit-content;
    }
  }
`

export const CommunityCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
`

export const CommunitTitle = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  width: 100%;
  color: #363c45;
  margin: 0;
`
export const CommunityDescription = styled.p`
  white-space: pre-wrap;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.4375rem;
  color: #33475b;
  width: 100%;
  margin: 1.4375rem 0 2rem 0;
`

export const CommunityFeatures = styled.div`
  padding: 2rem 0 4.5rem 0;
  border-top: solid 0.0625rem #cbd6e2;
  width: 100%;
`

export const CommunityFeatureTitle = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.8125rem;
  color: #33475b;
  width: 100%;
`

export const CommunityFeatureDescription = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  padding: 0;
`

export const CommunityFeatureDescriptionItem = styled.li`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.8125rem;
  color: #33475b;
  padding-left: 1.5rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  justify-content: flex-start;
  ::before {
    content: "";
    background-image: url("data:image/svg+xml,%3Csvg width='17' height='17' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8.75477 16.6421C13.1932 16.6421 16.7912 13.0441 16.7912 8.60566C16.7912 4.16725 13.1932 0.569214 8.75477 0.569214C4.31636 0.569214 0.718323 4.16725 0.718323 8.60566C0.718323 13.0441 4.31636 16.6421 8.75477 16.6421ZM8.52984 10.0578L11.7773 7.01686L11.0907 6.28368L8.17312 9.01577L6.40417 7.4867L5.74731 8.24661L7.85813 10.0712L8.2 10.3667L8.52984 10.0578Z' fill='%23206ECF'/%3E%3C/svg%3E%0A");
    background-repeat: no-repeat;
    display: block;
    width: 1.0625rem;
    height: 1.0625rem;
    left: -8%;
    position: relative;
  }
`

export const CommunityButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.7537rem 1.5073rem;
  gap: 0.5025rem;
  width: 17.3344rem;
  height: 3.0144rem;
  background: #206ecf;
  border-radius: 0.2512rem;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  display: flex;
  align-items: center;
  color: #ffffff;
  border: none;
`
