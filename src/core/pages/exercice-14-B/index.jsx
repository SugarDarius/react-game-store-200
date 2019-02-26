import React from 'react';
import { ToggleTheme, Header, GameStore } from "../../components/exercice-14-B/index";

export const Home = props => {
    return (
        <React.Fragment>
            <ToggleTheme/>
            <Header/>
            <GameStore className='gameStore'/>
        </React.Fragment>
    )
};