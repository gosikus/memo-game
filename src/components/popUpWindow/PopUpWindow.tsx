import React from 'react'
import styled from 'styled-components'
import { StyledPopUpWindow } from './PopUpWindowStyle'

const PopUpWindow = () => {
    return (
        <StyledPopUpWindow>
            <div className="table">
                <p>На Вашем устройстве игра временно не поддерживается</p>
                <img
                    src="https://www.pngall.com/wp-content/uploads/5/Pokemon-Go-Character-PNG-Picture.png"
                    alt=""
                />
            </div>
        </StyledPopUpWindow>
    )
}

export default PopUpWindow
