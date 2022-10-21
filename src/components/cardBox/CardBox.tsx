import React, { FC, useEffect, useState } from 'react'
import Card, { CardState } from '../card/Card'
import styled from 'styled-components'
// import { CardInfo } from './'
import { CardInfo } from '../../common'
import StepsIndicator from '../stepsIndicator/StepsIndicator'
import { StyledCardsBox, StyledBox } from './CardBoxStyle'
// стили

// пропсы
interface CardBoxProps {
    cards: number[]
    handleGameOver: () => void
    steps: number
    setSteps: React.Dispatch<React.SetStateAction<number>>
}

function initInfo(cardIndexes: number[]): CardInfo[] {
    return cardIndexes.map((pairIndex, index) => {
        return {
            state: CardState.Closed,
            cardIndex: index,
            pairIndex,
        }
    })
}

// компонент
const CardBox: FC<CardBoxProps> = ({
    cards,
    steps,
    setSteps,
    handleGameOver,
}) => {
    const [cardsInfo, setCardsInfo] = useState<CardInfo[]>(initInfo(cards))
    const [openedCardsIndexes, setOpenedCardsIndexes] = useState<number[]>([])
    const [needCheckCards, setNeedCheckCards] = useState<boolean>(false)

    const [deleted, setDeleted] = useState(0)

    useEffect(() => {
        setCardsInfo(initInfo(cards))
    }, [cards])

    useEffect(() => {
        if (needCheckCards) {
            setTimeout(checkCards, 1000)
            setNeedCheckCards(false)
        }
    }, [needCheckCards])

    // const [value,setValue] = useState<boolean>(false)

    const checkCards = () => {
        console.log('checkCards')
        const [firstCardIndex, secondCardIndex] = openedCardsIndexes
        const firstCardPairIndex = cards[firstCardIndex]
        const secondCardPairIndex = cards[secondCardIndex]

        setSteps(steps + 1)
        if (firstCardPairIndex === secondCardPairIndex) {
            setCardsInfo((prev) => {
                prev[firstCardIndex].state = CardState.Deleted
                prev[secondCardIndex].state = CardState.Deleted
                if (cardsInfo.every((i) => i.state === CardState.Deleted)) {
                    handleGameOver()
                }
                return prev
            })
        } else {
            setCardsInfo((prev) => {
                prev[firstCardIndex].state = CardState.Closed
                prev[secondCardIndex].state = CardState.Closed
                return prev
            })
        }
        setOpenedCardsIndexes([])
    }

    const openCard = (cardIndex: number, pairIndex: number) => {
        if (openedCardsIndexes.includes(cardIndex)) {
            console.log('already opened')
            return
        }

        if (cardsInfo[cardIndex].state === CardState.Deleted) {
            console.log('already deleted')
            return
        }

        const openedCardsCount = openedCardsIndexes.length

        if (openedCardsCount >= 2) {
            console.log('too many cards in array')
            return
        }

        setCardsInfo((prev) => {
            prev[cardIndex].state = CardState.Opened
            return prev
        })

        setOpenedCardsIndexes([...openedCardsIndexes, cardIndex])

        if (openedCardsCount + 1 === 2) {
            console.log(`setNeedCheckCards`)
            setNeedCheckCards(true)
        }
    }

    return (
        <StyledBox>
            <StepsIndicator steps={steps} />
            <StyledCardsBox>
                {cardsInfo.map((cardInfo, index) => (
                    <Card
                        key={`cardsInfo_${index}`}
                        // value={value}
                        pairIndex={cardInfo.pairIndex}
                        cardIndex={cardInfo.cardIndex}
                        openCardHandler={openCard}
                        cardState={cardsInfo[cardInfo.cardIndex].state}
                    />
                ))}
            </StyledCardsBox>
        </StyledBox>
    )
}

export default CardBox
