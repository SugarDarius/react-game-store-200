import React from 'react';
import { GameList } from "./GameList";
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
            .then(game => {
                const games = [ ...this.state.games, {
                    _id: game._id,
                    ...game
                } ]
                this.setState({ games: [ ...games ] })
            })
            .catch(error => this.setState({ error: error }))
    }

    componentDidMount() {
        fetch('http://localhost:5010/api/games')
            .then(response => response.json())
            .then(games => {
                this.setState({ games: [ ...games ] })
            })
            .catch(error => this.setState({ error: error }))
    }

    render() {
        const { className } = this.props

        return <div className={ className }>
            { this.state.error !== '' ?
                <GameFetchError className="fetchError">An error occurred, please come back later</GameFetchError> :
                this.state.games.length > 0 ? <GameList games={ this.state.games } className='gameList'/> :
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