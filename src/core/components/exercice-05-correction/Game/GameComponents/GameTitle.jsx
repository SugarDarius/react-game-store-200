import React from 'react'

export const GameTitle = props => {
    const { children, className } = props;
    return <span className={ className }>{ children }</span>
}