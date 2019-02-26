import '../shared/stylesheets/normalize.css';
import '../shared/stylesheets/commons.scss';
import '../shared/stylesheets/pure-min.css';
import './stylesheet.scss';

import React from 'react';
import {
    Header,
    ToggleTheme,
    GameStore,
    ContextConsumer,
    Main
} from '../core/components/exercice-13/index.jsx'

export class Exercice13App extends React.Component {
    render() {

        return (
            <div className='pure-g'>
                <div className='pure-u-24-24'>
                    <ContextConsumer>
                        { ({ theme }) => {
                            return <Main className={ `main ${ theme }` } />
                        } }
                    </ContextConsumer>
                </div>
            </div>
        )
    }
}