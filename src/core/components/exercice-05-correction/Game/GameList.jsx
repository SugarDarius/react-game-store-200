import React from 'react'
import { Game } from './Game.jsx'

export const GameList = props => {
    const { games } = props

    return <>
        {
            games.length > 0 && games.map(game => {
                return <Game game={ game } key={game._id} className='game'/>
            })
        }
    </>
}