import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { Exercice08App as App } from '../src/exercice-08';

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering exercice-08 client ...');

ReactDOM.render((
    <AppContainer>
        <App />
    </AppContainer>
), node);