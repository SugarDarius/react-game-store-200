import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter } from 'react-router-dom';

import { AppContainer } from 'react-hot-loader';

import { Exercice14CApp as App } from '../src/exercice-14-C-correction';
import { Context } from "../src/core/components/exercice-14-C-correction/index";
import { appReducers } from '../src/core/components/exercice-14-C-correction/Reducers';
import thunk from 'redux-thunk'

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering exercice-14-C-correction client ...');

const store = createStore(appReducers, applyMiddleware(thunk));

ReactDOM.render((
    <AppContainer>
        <Provider store={ store }>
            <Context>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </Context>
        </Provider>
    </AppContainer>
), node);