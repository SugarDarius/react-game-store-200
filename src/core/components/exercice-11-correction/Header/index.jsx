import React from 'react'
import { Title, Bloc } from '../index'

const properties = {
    className: "header",
    title: "Hello world Game Store",
    titleClassName: "title"
}

export const Header = () => {
    return <Bloc className={ properties.className }>
        <Title className={ properties.titleClassName }>{ properties.title }</Title>
    </Bloc>
}