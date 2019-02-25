import React from 'react';
import { Game } from "./Game";
import { GameFetchError } from "./GameFetchError";
import { GameListEmpty } from "./GameListEmpty";

export class GameStore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            error: '',
            gameTitle: '',
            gameDescription: '',
            gamePlatforms: [],
            gameDevelopers: [],
            gameGenders: [],
            gamePrice: 0,
            gameRating: 0,
            gameReleaseDate: '',
            gameThumbnail: '',
            gameUpdatedAt: '',
        }
    }

    onInputValueChange(event) {
        this.setState({ [ event.target.name ]: event.target.value })
    }

    onFormSubmit(e) {
        e.preventDefault()
        const game = {
            title: this.state.gameTitle,
            description: this.state.gameDescription,
            platforms: this.state.gamePlatforms,
            genders: this.state.gameGenders,
            developers: this.state.gameDevelopers,
            price: this.state.gamePrice,
            rating: this.state.gameRating,
            releaseDate: this.state.gameReleaseDate,
            thumbnail: this.state.gameThumbnail,
            updatedAt: this.state.gameUpdatedAt
        }

        fetch('http://localhost:5010/api/game', {
            method: 'POST',
            body: JSON.stringify(game)
        })
            .then(response => response.json())
            .then(gameAdded => {
                const games = [ ...this.state.games, {
                    _id: gameAdded._id,
                    ...game
                } ]
                this.setState({ games: [ ...games ] })
                console.log(this.state.games)
            })
            .catch(error => this.setState({ error: error }))
    }

    componentDidMount() {
        fetch('http://localhost:5010/api/game/9af3c847-4c1a-471a-a7eb-b768cb8887d5')
            .then(response => response.json())
            .then(game => {
                this.setState({ games: [ game ] })
            })
            .catch(error => this.setState({ error: error }))
    }

    render() {
        const { className } = this.props

        return <div className={ className }>
            { this.state.error !== '' ?
                <GameFetchError className="fetchError">An error occurred, please come back later</GameFetchError> :
                (this.state.games.length > 0 && this.state.games[ 0 ]) ?
                    <Game game={ this.state.games[ 0 ] } className='game'/> :
                    <GameListEmpty className="listEmpty">No games to show :/</GameListEmpty>
            }

            <form onSubmit={ this.onFormSubmit.bind(this) }>
                <p>Title: </p><input type='text'
                                     value={ this.state.gameTitle }
                                     name="gameTitle"
                                     onChange={ this.onInputValueChange.bind(this) }/>
                <p>Description: </p><input type='text'
                                           value={ this.state.gameDescription }
                                           name="gameDescription"
                                           onChange={ this.onInputValueChange.bind(this) }/>
                <p>Price: </p><input type='number'
                                     value={ this.state.gamePrice }
                                     name="gamePrice"
                                     onChange={ this.onInputValueChange.bind(this) }/>
                <p>Rating: </p><input type='number'
                                      value={ this.state.gameRating }
                                      name="gameRating"
                                      onChange={ this.onInputValueChange.bind(this) }/>

                <input type='submit' value='Add game'/>
            </form>
        </div>
    }
}