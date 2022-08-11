import styled from 'styled-components';

export const FollowContainer = styled.div`
  min-width: 6rem;
  @media screen and (max-width: 768px) {
    width: 35%;
    ul{
      display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    align-items: center;
    }
  }
`;
export const FollowContent = styled.div`
  svg{
    fill: #b6c0cd;
    padding: 0.25rem;
    border: 0.125rem solid rgba(255, 255, 255, 0.25);
    border-radius: 0.3125rem;
  }
`;
