import React from 'react'

export const GameThumbnails = props => {
    const { src, alt, className } = props;
    console.log(src);
    return <img className={`${className} pure-img`} alt={ alt } src={ src }/>
}