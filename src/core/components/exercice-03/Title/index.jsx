import React from 'react'

const properties = {
    title: "Hello world Game Store",
    className: "title"
}

export const Title = () => {
    return <h1 className={ properties.className }>{ `${ properties.title }: A new beginning!` }</h1>
}