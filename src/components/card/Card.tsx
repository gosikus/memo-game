import React, { FC, useState } from 'react'
import { StyledCard } from './CardStyle'

export enum CardState {
    Opened,
    Closed,
    Deleted,
}

interface CardProps {
    cardIndex: number
    pairIndex: number
    openCardHandler: (cardIndex: number, pairIndex: number) => void
    cardState: CardState
}

function classStyle(cardState: CardState): string {
    if (cardState === CardState.Opened) {
        return ''
    } else if (cardState === CardState.Closed) {
        return 'is-flipped'
    } else {
        return 'deleted'
    }
}

const Card: FC<CardProps> = ({
    cardIndex,
    pairIndex,
    openCardHandler,
    cardState,
}) => {
    let padToTree = (number: number) =>
        number <= 999 ? `00${number}`.slice(-3) : number

    return (
        <StyledCard onClick={(_) => openCardHandler(cardIndex, pairIndex)}>
            <div className={`card ${classStyle(cardState)}`}>
                <div className="card__face card__face-front">
                    {cardState === CardState.Opened && (
                        <img
                            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToTree(
                                pairIndex
                            )}.png`}
                            alt={'card_face'}
                        />
                    )}
                </div>

                <div className="card__face card__face-back">
                    <img
                        src="/images/logo.png"
                        alt="card_back"
                    />
                </div>
            </div>
        </StyledCard>
    )
}

export default Card
