import React from 'react'

export const GameThumbnails = props => {
    const { src, alt, className } = props;
    return <img className={ className } alt={alt} src={src} />
}