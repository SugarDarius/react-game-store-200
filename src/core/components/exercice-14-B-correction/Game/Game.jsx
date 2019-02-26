import React from 'react'
import { Title, List, Number, Text, Date, Image, Bloc } from "../index";
import { fetchGame } from "../Actions/Game/FetchGame";
import { connect } from 'react-redux';

class GameContent extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.game) {
            const { _id, title, description, platforms, genders, price, rating, developers, releaseDate, thumbnail } = this.props.game;
            this.state = {
                _id,
                title,
                description,
                platforms,
                genders,
                price,
                rating,
                developers,
                releaseDate,
                thumbnail
            };
        }
    }

    componentDidMount() {
        if (!!this.props.match && this.props.match.params.id) {
            this.props.fetchGame(this.props.match.params.id)
                .then(() => this.setState({ ...this.props.game }))
                .catch(error => this.setState({ error: error }))
        }
    }

    render() {
        const { className } = this.props;

        return (this.state ?
                <Bloc className={ className }>
                    <Title className="gameTitle">{ this.state.title }</Title>
                    <Text>{ this.state.description }</Text>
                    <List items={ this.state.platforms }/>
                    <List items={ this.state.genders }/>
                    <Number>{ this.state.price }</Number>
                    <Number>{ this.state.rating }</Number>
                    <List items={ this.state.developers }/>
                    <Date>{ this.state.releaseDate }</Date>
                    <Image src={ this.state.thumbnail } alt={ this.state.title }/>
                </Bloc> : null
        )
    }
}

export const Game = connect(
    state => {
        return {
            game: state.gamesReducer.game,
            error: state.gamesReducer.error
        }
    },
    dispatch => ({
        fetchGame: id => dispatch(fetchGame(id))
    }))(GameContent);