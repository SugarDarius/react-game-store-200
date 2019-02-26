import React from 'react';
import { Bloc, GameForm, GameLibrary, GameList } from '../index';

export class GameStore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            error: ''
        }
    }

    onInputValueChange(event) {
        this.setState({ [ event.target.name ]: event.target.value })
    }

    onFormSubmit(e, values) {
        e.preventDefault()

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

    render() {
        const { className } = this.props

        return (
            <Bloc className={ className }>
                <GameLibrary games={ this.state.games }/>
                <GameForm handleOnChange={ this.onInputValueChange }
                          handleOnSubmit={ this.onFormSubmit.bind(this) }/>
            </Bloc>);
    }
}