import React, { FC } from 'react'
import styled from 'styled-components'
import { StyledStepsIndicator } from './StepsIndicatorStyle'

interface StepsIndicatorProps {
    steps: number
}

const StepsIndicator: FC<StepsIndicatorProps> = ({ steps }) => {
    return (
        <StyledStepsIndicator>
            Итоговое количество ходов: {steps}
        </StyledStepsIndicator>
    )
}

export default StepsIndicator
