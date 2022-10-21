import styled from 'styled-components'

export const StyledCardsBox = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    max-width: 1200px;
    gap: 10px;
`

export const StyledBox = styled.div`
    background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.2)
    );
    backdrop-filter: blur(0.5rem);
    padding: 2rem;
    margin: 2rem 0;
    border-radius: 1rem;
`
