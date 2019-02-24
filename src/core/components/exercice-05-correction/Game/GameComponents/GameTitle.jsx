import React from 'react'

export const GameTitle = () => {
    const { children, className } = props;
    return <span className={ className }>{ children }</span>
}