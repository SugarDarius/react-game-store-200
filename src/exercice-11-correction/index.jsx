import '../shared/stylesheets/normalize.css';
import '../shared/stylesheets/commons.scss';
import '../shared/stylesheets/pure-min.css';
import './stylesheet.scss';

import React from 'react';
import {
    Header,
    ToggleTheme,
    GameStore,
    ContextConsumer
} from '../core/components/exercice-11-correction/index.jsx'

export class Exercice11CorrectionApp extends React.Component {
    render() {

        return (
            <div className='pure-g'>
                <div className='pure-u-24-24'>
                    <ContextConsumer>
                        { ({ theme }) => {
                            return <main className={ `main ${ theme }` }>
                                <ToggleTheme/>
                                <Header/>
                                <GameStore className='gameStore'/>
                            </main>
                        } }
                    </ContextConsumer>
                </div>
            </div>
        )
    }
}