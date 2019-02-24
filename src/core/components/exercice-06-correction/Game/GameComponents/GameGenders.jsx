import React from 'react'

export const GameGenders = props => {
    const { genders, className } = props;
    return <div className={ className }>
        { genders.length > 0 && genders.map((gender, key) => {
            return <span key={ key }>{ gender }</span>
        })
        }
    </div>
}