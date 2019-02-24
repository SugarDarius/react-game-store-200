import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { Exercice07App as App } from '../src/exercice-07';

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering exercice-07 client ...');

ReactDOM.render((
    <AppContainer>
        <App />
    </AppContainer>
), node);