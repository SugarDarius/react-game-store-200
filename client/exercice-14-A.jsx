import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'

import { AppContainer } from 'react-hot-loader';

import { Exercice14AApp as App } from '../src/exercice-14-A';
import { Context } from "../src/core/components/exercice-14-A/index";
import { applyMiddleware, createStore } from "redux";
import { appReducers } from "../src/core/components/exercice-14-A-correction/Reducers";
import thunk from "redux-thunk";

const DEV = process.env.NODE_ENV === 'development';
const node = document.getElementById('react-mount-node');

DEV && console.log('Rendering exercice-14-A client ...');

//const store = createStore(appReducers, applyMiddleware(thunk));

ReactDOM.render((
    <AppContainer>
        <Context>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Context>
    </AppContainer>
), node);