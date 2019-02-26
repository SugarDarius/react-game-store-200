import React from 'react'
import { Title, List, Number, Text, Date, Image, Bloc } from "../index";

export class Game extends React.Component {
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
            fetch(`http://localhost:5010/api/game/${ this.props.match.params.id }`)
                .then(response => response.json())
                .then(game => this.setState({ ...game }))
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