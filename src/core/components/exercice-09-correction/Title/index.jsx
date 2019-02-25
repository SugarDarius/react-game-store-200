import React from 'react'

export const Title = props => {
    let { title, className } = props;
    return <h1 className={ className }>{ `${ title }: A new beginning!` }</h1>
}