import React from 'react'

export const GameFetchError = props => {
    const { className, children } = props
    return <div className={ className }>{ children }</div>
}