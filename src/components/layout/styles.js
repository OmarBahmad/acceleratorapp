import styled from "styled-components"
import PoppinsRegular from "../../assets/fonts/Poppins/Poppins-SemiBold.ttf"
import InterRegular from "../../assets/fonts/Inter/Inter-Regular.ttf"

import background from "../../assets/imgs/Background.png"
import looper from "../../assets/imgs/Looper-3.png"

export const LayoutContainer = styled.div`
  width: 100%;
  font-family: "Poppins";
  a {
    text-decoration: none;
    color: #fff;
  }
  ul {
    list-style: none;
  }
  li {
    text-decoration: none;
  }

  @font-face {
    font-family: "Poppins";
    src: url(${PoppinsRegular});
  }
  @font-face {
    font-family: "Inter";
    src: url(${InterRegular});
  }

  background-image: url(${background});
  background-size: 100% 1132px;
  overflow: hidden;
  background-repeat: no-repeat;
  ::before {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 61%;
    top: 0;
    right: 0;
    background-image: url(${looper});
    background-repeat: no-repeat;
    pointer-events: none;
    @media screen and (max-width: 1120px) {
      width: 87%;
    }
    @media screen and (max-width: 700px) {
      width: 114%;
    }
    @media screen and (max-width: 550px) {
      width: 198%;
    }
  }
`
export const LayoutContent = styled.div``
