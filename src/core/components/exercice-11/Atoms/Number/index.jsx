import React from 'react'

export const Number = props => {
    const { children, className } = props;
    return <p className={ className }>{ children }</p>
}