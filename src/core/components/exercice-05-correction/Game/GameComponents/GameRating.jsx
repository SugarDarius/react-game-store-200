import React from 'react'

export const GameRating = () => {
    const { children, className } = props;
    return <p className={ className }>{ children }</p>
}