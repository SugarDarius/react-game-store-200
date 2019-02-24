import React from 'react'

export const GamePlatforms = props => {
    const { platforms, className } = props;
    return <div className={ className }>
        { platforms.length > 0 && platforms.map((platform, key) => {
            return <span key={key}>{ platform }</span>
        })
        }
    </div>
}