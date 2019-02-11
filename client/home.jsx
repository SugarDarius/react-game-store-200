
/*
*   React Game Store 200 - client - home
*   author: Aurélien Dupays Dexemple
*/

import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { HomeApp as App } from '../src/home';

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering home client ...');

ReactDOM.render((
    <AppContainer>
        <App />
    </AppContainer>
), node);