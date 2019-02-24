import React from 'react'

export const GamePrice = props => {
    const { children, className } = props;
    return <p className={ className }>{ children }</p>
}