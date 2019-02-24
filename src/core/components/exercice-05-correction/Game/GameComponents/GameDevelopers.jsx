import React from 'react'

export const GameDevelopers = () => {
    const { developers, className } = props;
    return <div className={ className }>
        { developers.length > 0 && developers.map(developer => {
            return <span>{ developer }</span>
        })
        }
    </div>
}