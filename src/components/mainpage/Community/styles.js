import styled from "styled-components"

export const CommunityContainer = styled.div``

export const CommunityContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  max-width: 70.625rem;
  margin: 0 auto;
`
export const CommunityTitleContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: center;
  align-items: flex-start;
`
export const CommunitTitle = styled.h4`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.875rem;
  color: #206ecf;
  margin: 0 0 0.5rem 0;
  padding: 0;
`

export const CommunityLabel = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 3.5rem;
  letter-spacing: 0.0788rem;
  padding: 0;
  color: #1f2024;
  margin: 0 0 0.5rem 0;
`

export const CommunitDescription = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #6b788a;
  margin: 0 0 5.375rem 0;
  padding: 0;
`

export const CommunityAllCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
  align-items: center;
  gap: 1.125rem;

  h2{
    display: flex;
  }
  .Corporations{
    ::before{
      content: "";
      width: 2rem;
      height: 2rem;  
      display: block;
      padding-right:1rem;
      position: relative;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.718506' y='0.857666' width='32.144' height='32.144' rx='8.03561' fill='%23206ECF'/%3E%3Cpath d='M8.33569 10.0252C8.33569 8.98558 9.17845 8.14282 10.218 8.14282H13.0416C14.0812 8.14282 14.9239 8.98558 14.9239 10.0252V12.8487C14.9239 13.8883 14.0812 14.7311 13.0416 14.7311H10.218C9.17845 14.7311 8.33569 13.8883 8.33569 12.8487V10.0252Z' fill='white'/%3E%3Cpath d='M8.33569 18.4958C8.33569 17.4562 9.17845 16.6134 10.218 16.6134H13.0416C14.0812 16.6134 14.9239 17.4562 14.9239 18.4958V21.3193C14.9239 22.3589 14.0812 23.2016 13.0416 23.2016H10.218C9.17845 23.2016 8.33569 22.3589 8.33569 21.3193V18.4958Z' fill='white'/%3E%3Cpath d='M16.8063 10.0252C16.8063 8.98558 17.649 8.14282 18.6886 8.14282H21.5122C22.5518 8.14282 23.3945 8.98558 23.3945 10.0252V12.8487C23.3945 13.8883 22.5518 14.7311 21.5122 14.7311H18.6886C17.649 14.7311 16.8063 13.8883 16.8063 12.8487V10.0252Z' fill='white'/%3E%3Cpath d='M16.8063 18.4958C16.8063 17.4562 17.649 16.6134 18.6886 16.6134H22.4533C23.4929 16.6134 24.3357 17.4562 24.3357 18.4958V22.2605C24.3357 23.3001 23.4929 24.1428 22.4533 24.1428H18.6886C17.649 24.1428 16.8063 23.3001 16.8063 22.2605V18.4958Z' fill='white'/%3E%3C/svg%3E%0A");

    }
  }
  .Investor{
    ::before{
      content: "";
      width: 2rem;
      height: 2rem;  
      display: block;
      padding-right:1rem;
      position: relative;
      background-repeat: no-repeat;
      background-image: url("data:image/svg+xml,%3Csvg width='34' height='33' viewBox='0 0 34 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.94981' y='0.142822' width='32.144' height='32.144' rx='8.03561' fill='%23206ECF'/%3E%3Cpath d='M25.0591 22.2418H11.3302C11.1454 22.2418 10.9953 22.0917 10.9953 21.9069V8.17798H8.98623V21.9069C8.98623 23.1994 10.0377 24.2509 11.3302 24.2509H25.0591V22.2418Z' fill='white'/%3E%3Cpath d='M19.7015 12.8659V10.8568H25.0585V16.2151H23.0493V14.287L18.6963 18.6401L16.0175 15.9613L13.7143 18.2644L12.2939 16.8439L16.0181 13.1197L18.6969 15.7985L21.6296 12.8659H19.7015Z' fill='white'/%3E%3C/svg%3E%0A");
    
    }
  }
  .Startup{
    ::before{
      content: "";
      width: 2rem;
      height: 2rem;  
      display: block;
      padding-right:1rem;
      position: relative;
      background-repeat: no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg width='33' height='34' viewBox='0 0 33 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.718506' y='0.857666' width='32.144' height='32.144' rx='8.03561' fill='%23206ECF'/%3E%3Cpath d='M10.6147 18.9246H8.77476V18.2558C8.76463 17.3181 9.01299 16.3956 9.49257 15.5897C9.97215 14.7838 10.6644 14.1256 11.4935 13.6872C12.3102 13.2845 13.1947 13.0373 14.1018 12.9582C13.7055 13.4486 13.308 13.9699 12.9094 14.5218C12.0116 15.9163 11.2434 17.39 10.6147 18.9246ZM19.1969 20.806C17.8026 21.705 16.3288 22.4742 14.7941 23.104V24.9439H15.4629C16.4006 24.9541 17.3231 24.7057 18.129 24.2261C18.9349 23.7466 19.5931 23.0543 20.0315 22.2252C20.4342 21.4085 20.6814 20.524 20.7605 19.6169C20.2723 20.0115 19.7511 20.4078 19.1969 20.806ZM24.8262 10.8929C24.7373 13.8042 22.6412 16.6915 18.4177 19.7212C17.2683 20.4663 16.0558 21.109 14.7941 21.642V21.2655C14.7911 20.6456 14.5435 20.0519 14.1051 19.6136C13.6668 19.1752 13.0731 18.9276 12.4532 18.9246H12.0767C12.6103 17.6629 13.254 16.4506 14.0002 15.3017C17.0225 11.0848 19.9051 8.98876 22.8118 8.89246C24.2604 8.89246 24.8262 9.48435 24.8262 10.8929ZM20.8134 14.5774C20.8134 14.1339 20.6372 13.7086 20.3236 13.3951C20.0101 13.0815 19.5848 12.9053 19.1413 12.9053C18.6979 12.9053 18.2726 13.0815 17.959 13.3951C17.6455 13.7086 17.4693 14.1339 17.4693 14.5774C17.4693 15.0208 17.6455 15.4461 17.959 15.7597C18.2726 16.0732 18.6979 16.2494 19.1413 16.2494C19.5848 16.2494 20.0101 16.0732 20.3236 15.7597C20.6372 15.4461 20.8134 15.0208 20.8134 14.5774ZM9.69371 24.8001C10.4468 24.6664 12.2626 24.2932 12.8692 23.6872C13.0556 23.5009 13.2034 23.2797 13.3042 23.0363C13.405 22.7928 13.4569 22.5319 13.4569 22.2684C13.4569 22.0049 13.405 21.7439 13.3042 21.5005C13.2034 21.257 13.0556 21.0358 12.8692 20.8495C12.6829 20.6631 12.4617 20.5153 12.2182 20.4145C11.9748 20.3137 11.7139 20.2618 11.4503 20.2618C10.9182 20.2618 10.4078 20.4732 10.0315 20.8495C9.42551 21.4561 9.05165 23.2719 8.91855 24.025L8.75336 24.9653L9.69371 24.8001Z' fill='white'/%3E%3Cpath d='M9.69381 24.7995C10.447 24.6657 12.263 24.2925 12.8697 23.6865C13.056 23.5001 13.2039 23.2789 13.3047 23.0354C13.4056 22.7919 13.4575 22.531 13.4575 22.2674C13.4575 22.0039 13.4056 21.7429 13.3047 21.4995C13.2039 21.256 13.056 21.0348 12.8697 20.8484C12.6833 20.6621 12.4621 20.5142 12.2186 20.4134C11.9751 20.3125 11.7142 20.2606 11.4506 20.2606C10.9184 20.2606 10.408 20.4721 10.0316 20.8484C9.42559 21.4551 9.05168 23.2711 8.91857 24.0243L8.75336 24.9647L9.69381 24.7995Z' fill='white'/%3E%3C/svg%3E%0A");
    }
  }
  .OpenChallenge{
    ::before{
      content: "";
      width: 2rem;
      height: 2rem;  
      display: block;
      padding-right:1rem;
      position: relative;
      background-image: url("data:image/svg+xml,%3Csvg width='33' height='33' viewBox='0 0 33 33' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='0.718506' y='0.857666' width='32.144' height='32.144' rx='8.03561' fill='%23206ECF'/%3E%3Cpath d='M24.3356 16.8577C24.3356 21.2759 20.7539 24.8577 16.3356 24.8577C11.9174 24.8577 8.33563 21.2759 8.33563 16.8577C8.33563 12.4394 11.9174 8.85767 16.3356 8.85767C20.7539 8.85767 24.3356 12.4394 24.3356 16.8577Z' fill='white'/%3E%3Cpath d='M17.2245 14.191C17.2245 13.7001 16.8266 13.3021 16.3356 13.3021C15.8447 13.3021 15.4467 13.7001 15.4467 14.191V15.9688H13.669C13.178 15.9688 12.7801 16.3667 12.7801 16.8577C12.7801 17.3486 13.178 17.7466 13.669 17.7466H15.4467V19.5243C15.4467 20.0153 15.8447 20.4132 16.3356 20.4132C16.8266 20.4132 17.2245 20.0153 17.2245 19.5243V17.7466H19.0023C19.4932 17.7466 19.8912 17.3486 19.8912 16.8577C19.8912 16.3667 19.4932 15.9688 19.0023 15.9688H17.2245V14.191Z' fill='%23206ECF'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
    
    }
    
  }

  @media screen and (max-width: 1130px) {
  justify-content: center;
  }
`
