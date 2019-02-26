import React from 'react'
import { GameTitle } from "./GameComponents/GameTitle";
import { GameDescription } from "./GameComponents/GameDescription";
import { GamePlatforms } from "./GameComponents/GamePlatforms";
import { GameGenders } from "./GameComponents/GameGenders";
import { GamePrice } from "./GameComponents/GamePrice";
import { GameThumbnails } from "./GameComponents/GameThumbnails";
import { GameRating } from "./GameComponents/GameRating";
import { GameReleaseDate } from "./GameComponents/GameReleaseDate";
import { GameDevelopers } from "./GameComponents/GameDevelopers";

export const Game = props => {
    const { className } = props
    const { title, description, platforms, genders, price, rating, developers, releaseDate, thumbnail } = props.game;
    return <div className={ className }>
        <GameTitle>{ title }</GameTitle>
        <GameDescription>{ description }</GameDescription>
        <GamePlatforms platforms={ platforms }/>
        <GameGenders genders={ genders }/>
        <GamePrice>{ price }</GamePrice>
        <GameRating>{ rating }</GameRating>
        <GameDevelopers developers={ developers } className={ '' }/>
        <GameReleaseDate>{ releaseDate }</GameReleaseDate>
        <GameThumbnails src={ thumbnail } alt={ title }/>
    </div>
}