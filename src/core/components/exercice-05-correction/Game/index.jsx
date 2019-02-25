import React from 'react';
import { Game } from "./Game";

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
        if (this.state.game) {
            return <div>
                { <Game className="game" game={ this.state.game }/> }
            </div>
        } else {
            return <div>
                { <p>No Game Found</p> }
            </div>
        }
    }
}