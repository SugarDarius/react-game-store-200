import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'

import { AppContainer } from 'react-hot-loader';

import { Exercice13App as App } from '../src/exercice-13';
import { Context } from "../src/core/components/exercice-13/index";

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering exercice-13 client ...');

ReactDOM.render((
    <AppContainer>
        <Context>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Context>
    </AppContainer>
), node);