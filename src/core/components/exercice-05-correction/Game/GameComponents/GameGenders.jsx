import React from 'react'

export const GameGenders = () => {
    const { genders, className } = props;
    return <div className={ className }>
        { genders.length > 0 && genders.map(gender => {
            return <span>{ gender }</span>
        })
        }
    </div>
}