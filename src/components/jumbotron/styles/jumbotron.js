import styled from 'styled-components/macro';

export const Inner = styled.div`
    display: flex;
    flex-direction: ${({ direction }) => direction};
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    width: 100%;
    margin: auto;

    @media (max-width: 1000px) {
        flex-direction: column;
    }

`;

export const Pane = styled.div `
    width: 50%; 
`;

export const Title = styled.h1 `
    font-weight: 900;
`;

export const SubTitle = styled.h2 ``;

export const Image = styled.image ``;

export const Container = styled.div ``;