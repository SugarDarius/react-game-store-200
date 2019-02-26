import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Game, GameLibrary } from '../index'
import { Home } from '../../../pages/exercice-14-A-correction';

export const Main = props => {
    const { className } = props;
    return (
        <main className={ className }>
            <Switch>
                <Route exact path='/' component={ Home }/>
                <Route exact path='/games' component={ GameLibrary } />
                <Route path='/game/:id' component={ Game }/>
            </Switch>
        </main>
    )
};