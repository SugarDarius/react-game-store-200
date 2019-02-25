import '../shared/stylesheets/normalize.css';
import '../shared/stylesheets/commons.scss';
import './stylesheet.scss';

import React from 'react';
import { Header, ToggleTheme, GameStore } from '../core/components/exercice-07-correction/index.jsx'

export class Exercice07CorrectionApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: 'light' }
    }

    render() {
        const nextTheme = this.state.theme === 'light' ? 'dark' : 'light';

        return <main className={ `main ${ this.state.theme }` }>
            <ToggleTheme nextTheme={ nextTheme }
                         handleOnClick={ e => {
                             e.preventDefault();
                             this.setState({ theme: nextTheme })
                         }
                         }/>
            <Header/>
            <GameStore/>
        </main>
    }
}