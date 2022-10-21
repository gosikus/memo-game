import styled from 'styled-components'

export const StyledOptionsPanel = styled.form`
    display: flex;
    background: linear-gradient(
        to right bottom,
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.2)
    );
    gap: 2rem;
    padding: 2rem;
    border-radius: 1rem;
    width: 100%;
    justify-content: center;
    align-items: center;
    color: white;
    select {
        text-decoration: none;
        border: 1px solid white;
        border-radius: 0.2rem;
        padding: 0.3rem 1rem;
        align-self: baseline;
        outline: none;
    }
    select:hover {
    }
`
