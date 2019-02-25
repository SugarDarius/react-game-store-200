import React from 'react'
import { Title } from '../index'

const properties = {
    className: "header",
    title: "Hello world Game Store",
    titleClassName: "title"
}

export const Header = () => {
    return <div className={ properties.className }>
        <Title title={ properties.title } className={ properties.titleClassName }/>
    </div>
}