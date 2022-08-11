import styled from "styled-components"

export const IconsContainer = styled.div``
export const IconsContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  height:  70vh;
  width: 100%;
  @media screen and (max-width:560px){
    height: 44vh;
  }
  @media screen and (max-width:400px){
    height: 30vh;
  }
  @media screen and (max-width:280px){
    height: 20vh;
  }
`

export const PizzaContainer = styled.div`
  padding: 4.1% 4%;
  box-shadow: 0px 16px 48px rgb(0 0 0 / 18%);
  border-radius: 20%;
  position: relative;
  bottom: -7%;
  margin:1%;
  /* @media screen and (max-width:510px){
    bottom: 0%;
  } */
`
export const RocketContainer = styled.div`
  padding: 1.5% 1%;
  box-shadow: 0px 16px 48px rgb(0 0 0 / 18%);
  border-radius: 20%;
  position: relative;
  bottom: 13%;
  margin:1%;

`

export const RectangleContainer = styled.div`
  padding: 3.8% 3.8%;
  box-shadow: 0px 16px 48px rgb(0 0 0 / 18%);
  border-radius: 20%;
  position: relative;
  bottom: 24%;
  margin:1%;

`

export const FileContainer = styled.div`
  padding: 3.3% 4.1%;
  box-shadow: 0px 16px 48px rgb(0 0 0 / 18%);
  border-radius: 20%;
  position: relative;
  bottom: 13%;
  margin:1%;

`

export const ArrowContainer = styled.div`
  padding: 2% 1.1%;
  box-shadow: 0px 16px 48px rgb(0 0 0 / 18%);
  border-radius: 20%;
  position: relative;
  bottom: -7%;
  margin:1%;
  /* @media screen and (max-width:510px){
    bottom: 0%;
  }
  @media screen and (max-width:376px){
    bottom: 0%;
  } */

`
