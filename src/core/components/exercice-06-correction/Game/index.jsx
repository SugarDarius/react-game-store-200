import React from 'react';
import { Game } from "./Game";
import { GameFetchError } from "./GameFetchError";
import { GameListEmpty } from "./GameListEmpty";

export class GameStore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            game: null,
            error: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:5010/api/game/9af3c847-4c1a-471a-a7eb-b768cb8887d5')
            .then(response => response.json())
            .then(game => {
                this.setState({ game: game })
            })
            .catch(error => this.setState({ error: error }))
    }

    render() {
        return <div>
            { this.state.error !== '' ?
                <GameFetchError className="fetchError">An error occurred, please come back later</GameFetchError> :
                this.state.game ? <Game className="game" game={ this.state.game }/> :
                    <GameListEmpty className="listEmpty">No games to show :/</GameListEmpty>
            }
        </div>
    }
}