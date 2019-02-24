import React from 'react';
import { GameList } from "./GameList";

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
            <GameList games={ this.state.games } className='gameList'/>
        </div>
    }
}