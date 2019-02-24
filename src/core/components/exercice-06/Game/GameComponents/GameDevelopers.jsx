import React from 'react'

export const GameDevelopers = props => {
    const { developers, className } = props;
    return <div className={ className }>
        { developers.length > 0 && developers.map((developer, key) => {
            return <span key={key}>{ developer }</span>
        })
        }
    </div>
}