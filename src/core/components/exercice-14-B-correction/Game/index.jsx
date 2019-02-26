import React from 'react';
import { Bloc, GameForm, GameLibrary } from '../index';
import { fetchGames } from "../Actions/Game/FetchGames";
import { addGame } from "../Actions/Game/AddGame";
import { connect } from 'react-redux';

class GameStoreContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            error: ''
        }
    }

    componentDidMount() {
        this.props.fetchGames()
            .then(() => this.setState({ ...this.props.games }))
            .catch(error => this.setState({ error: error }))
    }

    onInputValueChange(event) {
        this.setState({ [ event.target.name ]: event.target.value })
    }

    onFormSubmit(e, values) {
        e.preventDefault()

        this.props.addGame({ ...values })
            .then(() => this.setState({ ...this.props.game }))
            .catch(error => this.setState({ error: error }))
    }

    render() {
        const { className } = this.props

        return (
            <Bloc className={ className }>
                <GameLibrary games={ this.props.games }/>
                <GameForm handleOnChange={ this.onInputValueChange }
                          handleOnSubmit={ this.onFormSubmit.bind(this) }/>
            </Bloc>);
    }
}

export const GameStore = connect(
    state => {
        return {
            game: state.gamesReducer.game,
            games: state.gamesReducer.games,
            error: state.gamesReducer.error
        }
    },
    dispatch => ({
        fetchGames: () => dispatch(fetchGames()),
        addGame: game => dispatch(addGame(game))
    }))(GameStoreContent);