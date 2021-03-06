import '../shared/stylesheets/normalize.css';
import '../shared/stylesheets/commons.scss';
import './stylesheet.scss';

import React from 'react';
import { Header, ToggleTheme } from '../core/components/exercice-05/index.jsx'

export class Exercice05App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: 'light' }
    }

    render() {
        const nextTheme = this.state.theme === 'light' ? 'dark' : 'light';

        return <main className={ `main ${ this.state.theme }` }>
            <ToggleTheme nextTheme={ nextTheme }
                         handleOnClick={ () => {
                             this.setState({ theme: nextTheme })
                         }
                         }/>
            <Header/>
        </main>
    }
}