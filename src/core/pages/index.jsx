import React from 'react';
import { ToggleTheme } from "../components/exercice-13/Theme";
import { Header } from "../components/exercice-13/Header";
import { GameStore } from "../components/exercice-13/Game";

export const Home = props => {
    return (
        <React.Fragment>
            <ToggleTheme/>
            <Header/>
            <GameStore className='gameStore'/>
        </React.Fragment>
    )
};