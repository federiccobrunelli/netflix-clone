import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;

  @media (max-width: 550px) {
    padding: 20% 45px;
  }
`;

export const Title = styled.h1`
  color: white;
  max-width: 645px;
  font-size: 4rem;
  font-weight: bold;
  margin: auto;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
