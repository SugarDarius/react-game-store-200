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
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(game)
        })
            .then(response => response.json())
            .then(gameAdded => {
                const games = [ {
                    _id: gameAdded._id,
                    ...game
                }, ...this.state.games];
                this.setState({ games: [ ...games ] })
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
        return <div className='pure-g'>
            <div className='pure-u-12-24'>
                {
                    this.state.error !== '' ? (
                        <GameFetchError className='fetchError'>An error occurred, please come back
                            later</GameFetchError>
                    ) : (
                        this.state.games.length > 0 ? (
                            <Game className='game' game={ this.state.games[ 0 ] }/>
                        ) : (
                            <GameListEmpty className='listEmpty'>No games to show :/</GameListEmpty>
                        )
                    )
                }
            </div>
            <div className='pure-u-12-24'>
                <form className='pure-form pure-form-stacked' onSubmit={ this.onFormSubmit.bind(this) }>
                    <h1>Add a new Game</h1>
                    <fieldset>
                        <input
                            type='text'
                            value={ this.state.gameTitle }
                            name='gameTitle'
                            onChange={ this.onInputValueChange.bind(this) }
                            placeholder='Title'
                        />
                        <input
                            type='text'
                            value={ this.state.gameDescription }
                            name='gameDescription'
                            onChange={ this.onInputValueChange.bind(this) }
                            placeholder='Description'
                        />
                        <input
                            type='number'
                            value={ this.state.gamePrice }
                            name='gamePrice'
                            onChange={ this.onInputValueChange.bind(this) }
                            placeholder='Price'
                        />
                        <input
                            type='number'
                            value={ this.state.gameRating }
                            name='gameRating'
                            onChange={ this.onInputValueChange.bind(this) }
                            placeholder='Rating'
                        />
                        <button type='submit' className='pure-button pure-button-primary' value='Add game'>Add game
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    }
}
