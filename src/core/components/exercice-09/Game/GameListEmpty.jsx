import React from 'react'

export const GameListEmpty = props => {
    const { className, children } = props
    return <div className={ className }>{ children }</div>
}