
/*
*   React Game Store 200 - client - exercice-01
*   author: Aurélien Dupays Dexemple
*/

import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { Exercice01App as App } from '../src/exercice-01';

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering exercice-01 client ...');

ReactDOM.render((
    <AppContainer>
        <App />
    </AppContainer>
), node);