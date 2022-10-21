import React, { FC } from 'react'
import styled from 'styled-components'

interface OptionProps {
    amountOfPairs: number
}

const Option: FC<OptionProps> = ({ amountOfPairs }) => {
    return <option value={amountOfPairs}>{amountOfPairs}</option>
}

export default Option
