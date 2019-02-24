import React from 'react'

export const GameDescription = props => {
    const { children, className } = props;
    return <p className={ className }>{ children }</p>
}