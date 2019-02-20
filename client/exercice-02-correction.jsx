import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { Exercice02CorrectionApp as App } from '../src/exercice-02-correction';

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering exercice-02-correction client ...');

ReactDOM.render((
    <AppContainer>
        <App />
    </AppContainer>
), node);