import React, { FC } from 'react'
import styled from 'styled-components'
import StepsIndicator from '../stepsIndicator/StepsIndicator'
import { StyledGameOverTable } from './GameOvertableStyle'

interface GameOverProps {
    steps: number
    restartGame: () => void
}

const GameOverTable: FC<GameOverProps> = ({ steps, restartGame }) => {
    return (
        <StyledGameOverTable>
            <div className="table">
                <StepsIndicator steps={steps} />
                <button className="table__button-restart" onClick={restartGame}>
                    Начать заново
                </button>
            </div>
        </StyledGameOverTable>
    )
}

export default GameOverTable
