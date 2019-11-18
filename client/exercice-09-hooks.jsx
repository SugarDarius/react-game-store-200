import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { Exercice09HooksApp as App } from '../src/exercice-09-hooks';

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering exercice-09-hooks client ...');

ReactDOM.render((
    <AppContainer>
        <App />
    </AppContainer>
), node);
