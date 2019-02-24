import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';

import { Exercice03CorrectionApp as App } from '../src/exercice-03-correction';

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering exercice-03-correction client ...');

ReactDOM.render((
    <AppContainer>
        <App />
    </AppContainer>
), node);