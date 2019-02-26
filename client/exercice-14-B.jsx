import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'

import { AppContainer } from 'react-hot-loader';

import { Exercice14BApp as App } from '../src/exercice-14-B';
import { Context } from "../src/core/components/exercice-14-B/index";

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering exercice-14-B client ...');

ReactDOM.render((
    <AppContainer>
        <Context>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Context>
    </AppContainer>
), node);