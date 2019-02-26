import React from 'react'

export const Button = props => {
    const { className, children, type } = props;
    return <button className={ className } type={ type }>{ children }</button>
}