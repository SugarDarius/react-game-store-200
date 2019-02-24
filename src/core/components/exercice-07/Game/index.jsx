import React from 'react';
import { GameList } from "./GameList";
import { GameFetchError } from "./GameFetchError";
import { GameListEmpty } from "./GameListEmpty";

export class GameStore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            games: [],
            error: ''
        }
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
        return <div>
            { this.state.error !== '' ?
                <GameFetchError className="fetchError">An error occurred, please come back later</GameFetchError> :
                this.state.games.length > 0 ? <GameList games={ this.state.games } className='gameList'/> :
                    <GameListEmpty className="listEmpty">No games to show :/</GameListEmpty>
            }
        </div>
    }
}