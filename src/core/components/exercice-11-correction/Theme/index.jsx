import React from 'react'
import { Text, Bloc, ContextConsumer } from "../index";

export const ToggleThemeBloc = props => {
    const { toggleTheme, nextTheme } = props;
    return <Bloc>
        <Text>Switch theme to </Text>
        <a className='pure-button pure-button-primary'
           onClick={ toggleTheme }>{ nextTheme }</a>
    </Bloc>
};

export const ToggleTheme = props => {
    return <ContextConsumer>
        { ({ nextTheme, toggleTheme }) => {
            return <ToggleThemeBloc props={ { ...props } } toggleTheme={ toggleTheme } nextTheme={ nextTheme }/>
        }
        }
    </ContextConsumer>
}