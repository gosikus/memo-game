import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Option from '../option/Option'
import { StyledOptionsPanel } from './OptionspanelStyle'

export interface Props {
    setPairsCount: (pairs: number) => void
}

export const OptionsPanel: FC<Props> = ({ setPairsCount }) => {
    const amountOfPairs = [5, 10, 15, 20]

    return (
        <StyledOptionsPanel>
            <h2>Количество пар:</h2>
            <select
                onChange={(event) =>
                    setPairsCount(Number.parseInt(event.target.value))
                }
                name="Количество пар"
                id=""
            >
                {amountOfPairs.map((i) => (
                    <Option key={i} amountOfPairs={i} />
                ))}
            </select>
        </StyledOptionsPanel>
    )
}
