import React from 'react';
import { Bloc, GameForm, GameList } from '../index';

export class GameStore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            error: ''
        }
    }

    onFormSubmit(values) {
        fetch('/api/game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...values })
        })
            .then(response => response.json())
            .then(gameAdded => this.setState({ games: [ ...this.state.games, { ...gameAdded } ] }))
            .catch(error => this.setState({ error: error }))
    }

    componentDidMount() {
        fetch('http://localhost:5010/api/games')
            .then(response => response.json())
            .then(games => this.setState({ games }))
            .catch(error => this.setState({ error: error }))
    }

    render() {
        const { className } = this.props

        return <Bloc className={ className }>
            <Bloc className="pure-u-12-24">
                { this.state.error !== '' ?
                    <Bloc className="fetchError">An error occurred, please come back later</Bloc> :
                    this.state.games.length > 0 ? <GameList games={ this.state.games } className='gameList'/> :
                        <Bloc className="listEmpty">No games to show :/</Bloc>
                }
            </Bloc>
            <GameForm
                      handleOnSubmit={ this.onFormSubmit.bind(this) }/>
        </Bloc>
    }
}
