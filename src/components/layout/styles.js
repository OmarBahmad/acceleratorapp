import styled from 'styled-components';
import PoppinsRegular from '../../assets/fonts/Poppins/Poppins-SemiBold.ttf';
import InterRegular from '../../assets/fonts/Inter/Inter-Regular.ttf';


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
`;
export const LayoutContent = styled.div`
 max-width: 70.625rem;
  margin: 0 auto;
`;
