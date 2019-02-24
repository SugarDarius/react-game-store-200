import React from 'react'

export const GamePlatforms = () => {
    const { platforms, className } = props;
    return <div className={ className }>
        { platforms.length > 0 && platforms.map(platform => {
            return <span>{ platform }</span>
        })
        }
    </div>
}