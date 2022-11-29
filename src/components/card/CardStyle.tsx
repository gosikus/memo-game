import styled from 'styled-components'

export const StyledCard = styled.div`
    width: 200px;
    height: 260px;
    perspective: 600px;
    color: white;

    img {
      padding: 0.5rem;
        width: 100%;
      font-size: 1.5rem;
    }

    .card {
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transform-style: preserve-3d;
        transform-origin: right;
        transition: transform 0.5s;
    }

    .card.is-flipped {
        transform: translateX(-100%) rotateY(-180deg);
    }

    .card.deleted {
        transition: opacity 0.5s;
        opacity: 0.2;
        );
    }

    .card__face {
        position: absolute;
        border-radius: 1rem;
        width: 100%;
        height: 100%;
        display: grid;
        transition: background-color 0.5s;
        place-items: center;
        font-weight: bold;
        font-size: 40px;
        backface-visibility: hidden;
    }

    .card__face:hover {
        background-color: rgba(0, 225, 173, 0.44);
    }

    .card__face-front {
        background: white;
        background: linear-gradient(
            to right bottom,
            rgba(255, 255, 255, 0.7),
            rgba(255, 255, 255, 0.3)
        );
    }

    .card__face-back {
        background: white;
        background: linear-gradient(
            to right bottom,
            rgba(251, 255, 245, 0.7),
            rgba(255, 255, 255, 0.3)
        );
        transform: rotateY(180deg);
    }
`
