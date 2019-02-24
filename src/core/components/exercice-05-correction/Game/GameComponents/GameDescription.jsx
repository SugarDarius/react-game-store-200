import React from 'react'

export const GameDescription = () => {
    const { children, className } = props;
    return <p className={ className }>{ children }</p>
}