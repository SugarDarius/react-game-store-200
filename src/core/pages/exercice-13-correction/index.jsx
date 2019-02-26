import React from 'react';
import { ToggleTheme, Header, GameStore } from "../../components/exercice-13-correction/index";

export const Home = props => {
    return (
        <React.Fragment>
            <ToggleTheme/>
            <Header/>
            <GameStore className='gameStore'/>
        </React.Fragment>
    )
};