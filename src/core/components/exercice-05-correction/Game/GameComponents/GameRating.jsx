import React from 'react'

export const GameRating = props => {
    const { children, className } = props;
    return <p className={ className }>{ children }</p>
}