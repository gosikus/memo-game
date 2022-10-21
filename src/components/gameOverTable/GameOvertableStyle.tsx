import styled from 'styled-components'

export const StyledGameOverTable = styled.div`
    display: grid;
    place-items: center;
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.62);
    background-size: cover;

    .table {
        font-size: 3rem;
        display: grid;
        gap: 1rem;
        place-items: center;
        color: white;
        z-index: 2;
        background-color: rgba(74, 185, 196, 0.78);
        padding: 5rem;
        border: 10px solid rgba(50, 124, 131, 0.78);
        border-radius: 1rem;

        .table__button-restart {
            padding: 0.5rem 1rem;
            border-radius: 1rem;
            border: 5px solid #38858b;
            background-color: #b7efef;
            font-size: 1rem;
            cursor: pointer;
        }
    }
`
