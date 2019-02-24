import React from 'react'

export const ToggleTheme = props => {
    const { handleOnClick, nextTheme = '' } = props
    return <div>
        <span>Switch theme to </span>
        <button onClick={ handleOnClick }>{ nextTheme }</button>
    </div>
}