import styled from 'styled-components'

export const StyledPopUpWindow = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.62);
    background-size: cover;

    .table {
        font-size: 1.5rem;
        gap: 1rem;
        margin: 0.5rem;
        text-align: center;
        color: white;
        z-index: 2;
        background-color: rgba(74, 185, 196, 0.78);
        padding: 1rem;
        border: 10px solid rgba(50, 124, 131, 0.78);
        border-radius: 1rem;
    }
    img {
        height: 120px;
        width: auto;
    }

    @media (min-width: 1120px) {
        display: none;
    }
`
