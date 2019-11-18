import '../shared/stylesheets/normalize.css';
import '../shared/stylesheets/commons.scss';
import '../shared/stylesheets/pure-min.css';
import './stylesheet.scss';

import React from 'react';
import { Header, ToggleTheme, GameStore } from '../core/components/exercice-09-correction/index.jsx'

export class Exercice09HooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { theme: 'light' }
    }

    render() {
        const nextTheme = this.state.theme === 'light' ? 'dark' : 'light';

        return (
            <div className='pure-g'>
                <div className='pure-u-24-24'>
                    <main className={`main ${this.state.theme}`}>
                        <ToggleTheme
                            nextTheme={nextTheme}
                            handleOnClick={e => {
                                e.preventDefault();
                                this.setState({ theme: nextTheme })
                            }}
                        />
                        <Header />
                        <GameStore className='gameStore' />
                    </main>
                </div>
            </div>
        )
    }
}
