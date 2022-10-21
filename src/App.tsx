import React from 'react'
import './App.css'
import StyledGlobal from './styles/globalStyle'
import MainPage from './components/mainPage/MainPage'
import PopUpWindow from './components/popUpWindow/PopUpWindow'

function App() {
    return (
        <div className="App">
            <StyledGlobal />
            <MainPage />
            <PopUpWindow />
        </div>
    )
}

export default App
