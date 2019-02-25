import React from 'react'

export const Date = props => {
    const { children, className } = props;
    return <span className={ className }>{ children }</span>
}