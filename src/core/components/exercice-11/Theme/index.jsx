import React from 'react'
import { Text, Bloc } from "../index";

export const ToggleTheme = props => {
    const { handleOnClick, nextTheme = '' } = props
    return <Bloc>
        <Text>Switch theme to </Text>
        <a
            className='pure-button pure-button-primary'
            onClick={handleOnClick}>{nextTheme}
        </a>
    </Bloc>
}