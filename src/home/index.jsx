/*
*   React Game Store 200 - src - Home
*   author: Aurélien Dupays Dexemple
*/

import '../shared/stylesheets/normalize.css';
import '../shared/stylesheets/commons.scss';

import './stylesheet.scss';

import React from 'react';

import SfeirLogo from '../images/sfeir-logo.png';

export const HomeApp = () => (
    <div className='app-box'>
        <img src={ SfeirLogo } className='app-box__logo'/>
        <h1>React Game Store</h1>
    </div>
)