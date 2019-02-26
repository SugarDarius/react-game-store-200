import React from 'react'

export const Title = props => {
    let { children, className } = props;
    return <h1 className={ className }>{ children }</h1>
}