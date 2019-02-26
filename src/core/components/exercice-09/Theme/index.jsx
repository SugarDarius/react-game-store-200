import React from 'react'

export const ToggleTheme = props => {
    const { handleOnClick, nextTheme = '' } = props
    return <div>
        <span>Switch theme to </span>
        <a
            className='pure-button pure-button-primary'
            onClick={ handleOnClick }>{ nextTheme }
        </a>
    </div>
}