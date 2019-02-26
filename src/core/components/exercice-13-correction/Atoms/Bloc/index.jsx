import React from 'react'

export const Bloc = props => {
    const { className, children } = props
    return <div className={ className }>{ children }</div>
}