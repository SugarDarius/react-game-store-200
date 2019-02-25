import React from 'react'
import { Title, List, Number, Text, Date, Image, Bloc } from "../index";

export const Game = props => {
    const { className } = props
    const { title, description, platforms, genders, price, rating, developers, releaseDate, thumbnails } = props.game;
    return <Bloc className={ className }>
        <Title className="gameTitle">{ title }</Title>
                <Text>{ description }</Text>
                <List items={ platforms }/>
                <List items={ genders }/>
                <Number>{ price }</Number>
                <Number>{ rating }</Number>
                <List items={ developers }/>
                <Date>{ releaseDate }</Date>
                <Image src={ thumbnails } alt={ title }/>
        </Bloc>
}