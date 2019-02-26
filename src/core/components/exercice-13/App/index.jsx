import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from '../../../pages'

export const Main = props => {
    const { className } = props;
    return (
        <main className={ className }>
            <Switch>
                <Route exact path='/' component={ Home }/>
            </Switch>
        </main>
    )
};