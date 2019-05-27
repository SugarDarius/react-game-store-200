import React from 'react';
import { Bloc, GameList } from "../index";

export class GameLibrary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            error: ''
        }
    }

    static getDerivedStateFromProps(nextProps, prevStates) {
        return nextProps.games && prevStates.games !== nextProps.games ?
            {games: nextProps.games} :
            null;
    }

    componentDidMount() {
        if (this.state.games.length === 0) {
            fetch('http://localhost:5010/api/games')
                .then(response => response.json())
                .then(games => this.setState({ games }))
                .catch(error => this.setState({ error: error }))
        }
    }

    render() {
        return (
            <Bloc className="pure-u-12-24">
                { this.state.error !== '' ?
                    <Bloc className="fetchError">An error occurred, please come back later</Bloc> :
                    this.state.games.length > 0 ? <GameList games={ this.state.games } className='gameList'/> :
                        <Bloc className="listEmpty">No games to show :/</Bloc>
                }
            </Bloc>
        )
    }
}
