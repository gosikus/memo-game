import React, { useState } from 'react'
import Header from '../header/Header'

import { generateRandomCardPositions } from './../../common'
import { OptionsPanel } from '../optionsPanel/OptionsPanel'
import CardBox from '../cardBox/CardBox'
import GameOverTable from '../gameOverTable/GameOverTable'
import SparkleStyle from '../sparkleStyle/SparkleStyle'
import { StyledMainPage } from './MainPageStyle'

const MainPage = () => {
    const [steps, setSteps] = useState(0)
    const [cards, setCards] = useState<number[]>(generateRandomCardPositions(5))
    const [gameOver, setGameOver] = useState(false)
    const [pairsCount, setPairsCount] = useState(5)

    const newPairsCount = (pairs: number) => {
        setPairsCount(pairs)
        const randomCards = generateRandomCardPositions(pairs)
        setCards(randomCards)
    }

    const handleGameOver = () => {
        setGameOver(true)
    }

    const restartGame = () => {
        setSteps(0)
        setGameOver(false)
        newPairsCount(pairsCount)
    }

    return (
        <StyledMainPage>
            <SparkleStyle />
            <Header />
            <OptionsPanel setPairsCount={newPairsCount} />
            <CardBox
                cards={cards}
                handleGameOver={handleGameOver}
                steps={steps}
                setSteps={setSteps}
            />
            {gameOver && (
                <GameOverTable steps={steps} restartGame={restartGame} />
            )}
        </StyledMainPage>
    )
}

export default MainPage
