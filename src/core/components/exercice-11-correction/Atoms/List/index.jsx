import React from 'react'
import { Bloc } from '../../index'

export const List = props => {
    const { items, className } = props;
    return <Bloc className={ className }>
        { items.length > 0 && items.map((item, key) => {
            return <span key={ item._id ? item._id : key }>{ item }</span>
        })
        }
    </Bloc>
}