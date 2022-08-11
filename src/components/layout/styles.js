import styled from 'styled-components';
import PoppinsRegular from '../../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import InterRegular from '../../assets/fonts/Inter/Inter-Regular.ttf';

import background from '../../assets/imgs/Background.png';
import looper from '../../assets/imgs/Looper-3.png';


export const LayoutContainer = styled.div`
  width: 100%;
  font-family: 'Poppins';
  a{
    text-decoration: none;
    color: #fff;
  }
  ul{
    list-style: none;
  }
  li{
    text-decoration: none;
  }

  @font-face {
    font-family: 'Poppins' ;
    src: url(${PoppinsRegular});
  }
  @font-face {
    font-family: 'Inter' ;
    src: url(${InterRegular});
  }

  background-image: url(${background});
  background-size: 100% 48%;
  background-repeat: no-repeat;
  ::after{
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    right: -29.5%;
    background-image: url(${looper});
    background-repeat: no-repeat;
    pointer-events: none;
  }

`;
export const LayoutContent = styled.div`
 max-width: 70.625rem;
  margin: 0 auto;
`;
